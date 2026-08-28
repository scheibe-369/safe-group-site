"use client";

import { useEffect, type RefObject } from "react";

/** Atraso entre a montagem e o primeiro incremento do contador. */
const COUNT_START = 150;
/** Duracao da subida ate 99, com curva de saida cubica: rapida ate meio, lenta no fim. */
const COUNT_DURATION = 1100;
/** Teto de espera pelo `load` e pelas fontes. Passado isto o contador fecha a 100 sem eles. */
const LOAD_CAP = 2600;
/** A marca leva 500ms a sair e o contador 350ms a apagar-se; a cortina desce a seguir. */
const EXIT_TO_READY = 550;
/** A cortina desce em 800ms e a ultima mascara entra aos 1300ms + 800ms. Com folga. */
const READY_TO_DONE = 2300;

type IntroRefs = {
  root: RefObject<HTMLDivElement | null>;
  count: RefObject<HTMLSpanElement | null>;
  line: RefObject<HTMLSpanElement | null>;
};

/**
 * Linha temporal da cortina. So corre se o script inline tiver deixado
 * `data-intro="pending"` no `<html>`: sem ele (movimento reduzido) nao ha
 * cortina nem entrada. O contador e o filete sao escritos directamente no
 * DOM, a cada frame, sem passar pelo estado do React. O resto e CSS a reagir
 * ao atributo do `<html>` e ao `data-phase` da cortina.
 *
 * O contador sobe ate 99 pela curva e so fecha a 100 quando a pagina acabou
 * de carregar e as fontes estao prontas, com um teto para uma ligacao lenta
 * nao prender a cortina. No StrictMode do desenvolvimento o efeito corre duas
 * vezes; a limpeza repoe `pending` para a segunda passagem recomecar do zero.
 */
export function useSiteIntro({ root, count, line }: IntroRefs) {
  useEffect(() => {
    const html = document.documentElement;
    if (html.dataset.intro !== "pending") return;
    html.dataset.intro = "loading";

    const start = performance.now();
    const timers: number[] = [];
    let frame = 0;
    let shown = -1;
    let finished = false;
    let fontsReady = !("fonts" in document);
    if ("fonts" in document) document.fonts.ready.then(() => { fontsReady = true; });

    const later = (fn: () => void, ms: number) => { timers.push(window.setTimeout(fn, ms)); };

    const paint = (value: number) => {
      if (count.current) count.current.textContent = String(value).padStart(2, "0");
      if (line.current) line.current.style.transform = `scale3d(${value / 100}, 1, 1)`;
    };

    const leave = () => {
      root.current?.setAttribute("data-phase", "exit");
      later(() => { html.dataset.intro = "ready"; }, EXIT_TO_READY);
      later(() => { html.dataset.intro = "done"; finished = true; }, EXIT_TO_READY + READY_TO_DONE);
    };

    const tick = (now: number) => {
      const t = Math.min(1, Math.max(0, (now - start - COUNT_START) / COUNT_DURATION));
      const eased = 1 - (1 - t) ** 3;
      const gate = (document.readyState === "complete" && fontsReady) || now - start >= LOAD_CAP;
      const value = t >= 1 && gate ? 100 : Math.min(99, Math.floor(eased * 100));
      if (value !== shown) { shown = value; paint(value); }
      if (value < 100) { frame = requestAnimationFrame(tick); return; }
      leave();
    };

    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      timers.forEach(clearTimeout);
      if (!finished) {
        html.dataset.intro = "pending";
        root.current?.removeAttribute("data-phase");
      }
    };
  }, [root, count, line]);
}
