"use client";

import { useEffect } from "react";
import { DRIFT, DURATION, LINE_HEIGHT, OPT_OUT, easeOutExpo } from "../data/config";

/** Teclas que rolam a página, com o deslocamento que cada uma pede. */
function keyDelta(event: KeyboardEvent, viewport: number): number | null {
  switch (event.key) {
    case "PageDown":
      return viewport * 0.9;
    case "PageUp":
      return -viewport * 0.9;
    case "ArrowDown":
      return 120;
    case "ArrowUp":
      return -120;
    case " ":
      return event.shiftKey ? -viewport * 0.9 : viewport * 0.9;
    default:
      return null;
  }
}

function isEditable(node: EventTarget | null): boolean {
  const el = node as HTMLElement | null;
  if (!el || !el.closest) return false;
  return Boolean(el.closest("input, textarea, select, [contenteditable=''], [contenteditable='true']"));
}

/**
 * Se o ponteiro estiver sobre uma caixa que rola por dentro e ainda tem para
 * onde rolar naquele sentido, o evento é dela e não da página.
 *
 * Percorre os antepassados a ler estilo calculado, o que é caro para correr a
 * cada evento da roda. Quem chama passa por `overPage`, que guarda a resposta
 * negativa, que é a comum e não muda enquanto o ponteiro estiver no mesmo sítio.
 */
function insideOwnScroller(node: EventTarget | null, delta: number): boolean {
  // O alvo nem sempre e um elemento: um evento disparado sobre `window` ou
  // `document` chega aqui e o `getComputedStyle` rebentaria dentro do handler.
  let el = node instanceof Element ? (node as HTMLElement) : null;
  while (el && el !== document.body && el !== document.documentElement) {
    if (el.hasAttribute(OPT_OUT)) return true;

    const overflow = getComputedStyle(el).overflowY;
    if ((overflow === "auto" || overflow === "scroll") && el.scrollHeight > el.clientHeight + 1) {
      const atTop = el.scrollTop <= 0;
      const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 1;
      if (!(delta < 0 && atTop) && !(delta > 0 && atBottom)) return true;
    }
    el = el.parentElement;
  }
  return false;
}

/**
 * Scroll com inércia, no modelo do Lenis que o site de referência usa: cada
 * impulso da roda define um destino e a página viaja até lá em 2 segundos com
 * uma curva expo-out, ou seja arranca depressa e passa quase todo o tempo a
 * travar. Um impulso novo a meio do caminho não corta o anterior, soma-se ao
 * destino e recomeça a curva a partir da posição actual.
 *
 * Três decisões que valem a pena registar:
 *
 * 1. **Rola a janela de verdade**, com `window.scrollTo`, em vez de traduzir um
 *    contentor. É isso que mantém `position: sticky`, `IntersectionObserver` e
 *    o `ScrollTrigger` do GSAP a funcionar exactamente como funcionavam, o que
 *    importa nesta base: a Hero, a pilha de Soluções e o Statement dependem dos
 *    três.
 * 2. **Só em ponteiro fino.** No telemóvel o scroll nativo já tem inércia, e
 *    melhor do que qualquer imitação. Interceptar `touchmove` seria trocar um
 *    comportamento bom por um pior.
 * 3. **Cede a quem mais mexer no scroll.** Se a posição da janela deixar de
 *    corresponder à última que este módulo escreveu, foi outra coisa a mandar
 *    (barra de deslocamento, âncora do browser, `scrollTo` de um componente) e
 *    a animação é abandonada em vez de disputar.
 */
export function useSmoothScroll() {
  useEffect(() => {
    const root = document.documentElement;
    const fine = window.matchMedia("(pointer: fine)");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");

    let teardown: (() => void) | undefined;

    const attach = () => {
      if (teardown) return;

      let from = window.scrollY;
      let to = window.scrollY;
      let startedAt = 0;
      let frame = 0;
      let applied = window.scrollY;
      /** Passo do último frame, usado para medir a deriva com tolerância justa. */
      let step = 0;

      // O limite fica em cache. Lê-lo a cada evento da roda, como estava antes,
      // obrigava o browser a um cálculo de layout sincrono por evento, com a
      // pilha de 600vh e os painéis `sticky` lá dentro. Era a causa principal
      // dos engasgos quando se rodava a roda várias vezes seguidas.
      let limit = 0;
      const measure = () => {
        limit = Math.max(0, root.scrollHeight - window.innerHeight);
      };
      measure();

      const clamp = (value: number) => Math.min(Math.max(value, 0), limit);

      // Apanha crescimento de conteúdo (imagens preguiçosas, o acordeão a
      // abrir) fora do caminho crítico do evento.
      const observer = new ResizeObserver(measure);
      observer.observe(document.body);

      // Guarda da resposta negativa da procura de caixa rolável.
      let lastTarget: Element | null = null;
      let lastDirection = 0;
      let lastTargetAt = 0;
      const overPage = (target: EventTarget | null, delta: number) => {
        const now = performance.now();
        const direction = Math.sign(delta);
        // A resposta depende do sentido: uma caixa que esta no fundo devolve
        // "e da pagina" para baixo e "e minha" para cima. Guardar sem o sentido
        // dava a resposta errada logo na inversao.
        if (
          target instanceof Element &&
          target === lastTarget &&
          direction === lastDirection &&
          now - lastTargetAt < 400
        ) {
          return true;
        }
        if (insideOwnScroller(target, delta)) {
          lastTarget = null;
          return false;
        }
        lastTarget = target instanceof Element ? target : null;
        lastDirection = direction;
        lastTargetAt = now;
        return true;
      };

      const stop = () => {
        if (frame) {
          window.cancelAnimationFrame(frame);
          frame = 0;
        }
      };

      const tick = (now: number) => {
        const elapsed = now - startedAt;
        const t = Math.min(1, elapsed / DURATION);
        let value = from + (to - from) * easeOutExpo(t);

        // Piso do passo, em pixels físicos do ecrã.
        //
        // A curva expo-out fecha cerca de 6 por cento da distância que falta em
        // cada frame, por isso nos últimos ~14px o passo cai abaixo de um pixel
        // físico. O ecrã não consegue desenhar meio pixel: a posição ficava
        // presa um ou dois frames e depois saltava, o que se via como engasgo
        // no fim de cada gesto. Medido: com o ecrã a 60fps e zero frames
        // perdidos, as paragens estavam todas nos últimos 10px, a andar de 0,8
        // em 0,8, que é exactamente o pixel físico a 1.25 de densidade.
        //
        // Com um piso de um pixel físico o remate faz-se a velocidade
        // constante, sem paragens e sem salto.
        const quantum = 1 / (window.devicePixelRatio || 1);
        const direction = Math.sign(to - from) || 1;
        const remaining = direction * (to - applied);

        if (remaining > quantum && direction * (value - applied) < quantum) {
          value = applied + direction * quantum;
        }

        // Chegou: encaixa no destino em vez de arrastar uma cauda que ninguém vê.
        let done = t >= 1 || remaining <= quantum || direction * (value - to) >= 0;
        if (done) value = to;

        step = Math.abs(value - applied);
        applied = value;
        // `behavior: "instant"` e obrigatorio: o `globals.css` declara
        // `scroll-behavior: smooth` no `<html>`, e sem isto o browser abria a
        // sua propria animacao a cada frame, a competir com esta.
        window.scrollTo({ top: value, behavior: "instant" });

        if (done) {
          frame = 0;
          step = 0;
        } else {
          frame = window.requestAnimationFrame(tick);
        }
      };

      const travelTo = (target: number) => {
        const next = clamp(target);
        // A meio de uma viagem, o ponto de partida e o valor exacto que o loop
        // escreveu e nao o `scrollY` ja arredondado pelo browser.
        const here = frame ? applied : window.scrollY;
        // Meio pixel de folga: destinos que ja estao onde estamos nao acordam o
        // loop nem roubam o scroll a quem o pediu.
        if (Math.abs(next - here) < 0.5) return;

        to = next;
        from = here;
        // O piso do passo mede-se contra `applied`, por isso ele tem de
        // acompanhar o ponto de partida quando a viagem comeca fora do loop.
        applied = here;
        startedAt = performance.now();
        if (!frame) frame = window.requestAnimationFrame(tick);
      };

      const push = (delta: number) => {
        const here = frame ? applied : window.scrollY;
        // Distancia que ainda falta percorrer da viagem em curso.
        const pending = frame ? to - here : 0;

        // Duas leituras, conforme o impulso continua ou contraria a viagem:
        //
        // No mesmo sentido, soma-se ao destino. Rodar a roda tres vezes
        // depressa anda o triplo, como no original, em vez de cada volta
        // anular a anterior.
        //
        // Em sentido contrario, parte-se da posicao actual e deita-se fora o
        // que faltava. Antes somava-se sempre ao destino, e como durante um
        // deslize o destino esta muito a frente da posicao, rodar para cima
        // apenas encurtava a descida: a pagina continuava a descer mais um
        // bocado antes de inverter, e sentia-se como uma travada no vai e vem.
        // O scroll nativo inverte na hora, e este passa a inverter tambem.
        const invertido = pending !== 0 && Math.sign(delta) !== Math.sign(pending);
        travelTo((invertido ? here : here + pending) + delta);
      };

      const onWheel = (event: WheelEvent) => {
        // Enquanto a cortina de entrada esta fechada o `<html>` tem
        // `overflow: hidden` e a pagina nao deve andar.
        const intro = root.dataset.intro;
        if (intro === "pending" || intro === "loading") return;
        if (event.ctrlKey) return; // zoom do browser
        if (!overPage(event.target, event.deltaY)) return;

        let delta = event.deltaY;
        if (event.deltaMode === 1) delta *= LINE_HEIGHT;
        else if (event.deltaMode === 2) delta *= window.innerHeight;

        event.preventDefault();
        push(delta);
      };

      const onKeyDown = (event: KeyboardEvent) => {
        if (event.defaultPrevented || event.metaKey || event.ctrlKey || event.altKey) return;
        if (isEditable(event.target)) return;

        if (event.key === "Home" || event.key === "End") {
          event.preventDefault();
          // O `End` e o unico sitio onde vale a pena remedir na hora, porque
          // salta para o fundo do documento e tem de acertar.
          measure();
          travelTo(event.key === "Home" ? 0 : limit);
          return;
        }

        const delta = keyDelta(event, window.innerHeight);
        if (delta === null) return;
        event.preventDefault();
        push(delta);
      };

      const onScroll = () => {
        if (!frame) return;
        // Se a posicao nao e a que este modulo escreveu, foi outra coisa a
        // mandar. Larga a animacao em vez de disputar.
        //
        // A tolerancia acompanha o passo do ultimo frame: o evento de scroll
        // chega depois do frame seguinte ja ter escrito, por isso a diferenca
        // legitima e da ordem de um passo. Com a tolerancia fixa de 1.5px que
        // estava aqui, qualquer glide rapido matava-se a si proprio a meio.
        const tolerance = Math.max(DRIFT, step * 2 + 2);
        if (Math.abs(window.scrollY - applied) > tolerance) stop();
      };

      const onAnchorClick = (event: MouseEvent) => {
        if (event.defaultPrevented || event.button !== 0) return;
        if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

        const link = (event.target as HTMLElement | null)?.closest?.("a");
        if (!link) return;

        const href = link.getAttribute("href");
        if (!href || !href.includes("#")) return;
        if (link.target && link.target !== "_self") return;

        const url = new URL(href, window.location.href);
        if (url.origin !== window.location.origin) return;
        if (url.pathname !== window.location.pathname) return;
        if (!url.hash || url.hash === "#") return;

        const target = document.querySelector(url.hash);
        if (!(target instanceof HTMLElement)) return;

        event.preventDefault();
        // Respeita o `scroll-margin-top` que as seccoes ancoradas ja declaram
        // (as classes `scroll-mt-28` do Tailwind).
        const offset = parseFloat(getComputedStyle(target).scrollMarginTop) || 0;
        travelTo(target.getBoundingClientRect().top + window.scrollY - offset);
        window.history.pushState(null, "", url.hash);
      };

      window.addEventListener("resize", measure);
      window.addEventListener("wheel", onWheel, { passive: false });
      window.addEventListener("keydown", onKeyDown);
      window.addEventListener("scroll", onScroll, { passive: true });
      document.addEventListener("click", onAnchorClick);
      root.dataset.smoothScroll = "on";

      teardown = () => {
        stop();
        observer.disconnect();
        window.removeEventListener("resize", measure);
        window.removeEventListener("wheel", onWheel);
        window.removeEventListener("keydown", onKeyDown);
        window.removeEventListener("scroll", onScroll);
        document.removeEventListener("click", onAnchorClick);
        delete root.dataset.smoothScroll;
      };
    };

    const detach = () => {
      teardown?.();
      teardown = undefined;
    };

    // Reavaliado em `change`: ligar um rato a um hibrido, ou mudar a preferencia
    // de movimento, nao remonta o componente.
    const sync = () => {
      if (fine.matches && !reduce.matches) attach();
      else detach();
    };

    sync();
    fine.addEventListener("change", sync);
    reduce.addEventListener("change", sync);

    return () => {
      fine.removeEventListener("change", sync);
      reduce.removeEventListener("change", sync);
      detach();
    };
  }, []);
}
