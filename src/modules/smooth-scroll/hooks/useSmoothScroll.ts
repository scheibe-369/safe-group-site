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

      const maxScroll = () => Math.max(0, root.scrollHeight - window.innerHeight);
      const clamp = (value: number) => Math.min(Math.max(value, 0), maxScroll());

      const stop = () => {
        if (frame) {
          window.cancelAnimationFrame(frame);
          frame = 0;
        }
      };

      const tick = (now: number) => {
        const elapsed = now - startedAt;
        const t = Math.min(1, elapsed / DURATION);
        const value = from + (to - from) * easeOutExpo(t);

        applied = value;
        // `behavior: "instant"` e obrigatorio: o `globals.css` declara
        // `scroll-behavior: smooth` no `<html>`, e sem isto o browser abria a
        // sua propria animacao a cada frame, a competir com esta.
        window.scrollTo({ top: value, behavior: "instant" });

        if (t < 1) {
          frame = window.requestAnimationFrame(tick);
        } else {
          frame = 0;
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
        startedAt = performance.now();
        if (!frame) frame = window.requestAnimationFrame(tick);
      };

      const push = (delta: number) => {
        // O impulso soma-se ao destino e nao a posicao actual: rodar a roda tres
        // vezes depressa anda o triplo, como no original. Sem isto, cada volta
        // da roda anulava a anterior.
        const base = frame ? to : window.scrollY;
        travelTo(base + delta);
      };

      const onWheel = (event: WheelEvent) => {
        // Enquanto a cortina de entrada esta fechada o `<html>` tem
        // `overflow: hidden` e a pagina nao deve andar.
        const intro = root.dataset.intro;
        if (intro === "pending" || intro === "loading") return;
        if (event.ctrlKey) return; // zoom do browser
        if (insideOwnScroller(event.target, event.deltaY)) return;

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
          travelTo(event.key === "Home" ? 0 : maxScroll());
          return;
        }

        const delta = keyDelta(event, window.innerHeight);
        if (delta === null) return;
        event.preventDefault();
        push(delta);
      };

      const onScroll = () => {
        // Se a posicao nao e a que este modulo escreveu, foi outra coisa a
        // mandar. Larga a animacao em vez de disputar.
        if (frame && Math.abs(window.scrollY - applied) > DRIFT) stop();
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

      window.addEventListener("wheel", onWheel, { passive: false });
      window.addEventListener("keydown", onKeyDown);
      window.addEventListener("scroll", onScroll, { passive: true });
      document.addEventListener("click", onAnchorClick);
      root.dataset.smoothScroll = "on";

      teardown = () => {
        stop();
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
