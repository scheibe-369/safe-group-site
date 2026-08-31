"use client";

import { useEffect } from "react";
import { introTimeline } from "../data/timeline";

/**
 * Folga dada ao carregamento depois de a coreografia acabar. A cortina abre
 * assim que a linha temporal chega ao fim e a pagina esta pronta; se a ligacao
 * for lenta espera por ela ate este teto, e abre na mesma.
 */
const LOAD_GRACE = 3500;

/** Ritmo com que a cortina pergunta se a pagina ja acabou de carregar. */
const GATE_POLL = 100;

/**
 * Estado da cortina. So corre se o script inline tiver deixado
 * `data-intro="pending"` no `<html>`: sem ele (movimento reduzido) nao ha
 * cortina nem entrada.
 *
 * A coreografia da cortina e toda do CSS e arranca na primeira pintura, sem
 * esperar por este gancho. O que fica aqui e so o que o CSS nao sabe fazer:
 * decidir o momento em que a primeira dobra comeca a entrar por baixo. Esse
 * momento e o da referencia, corrigido pelo tempo que a hidratacao demorou a
 * chegar, e adiado enquanto a pagina ou as fontes ainda nao estiverem
 * prontas. A cortina e preta como o site, por isso a espera nao se ve.
 *
 * No StrictMode do desenvolvimento o efeito corre duas vezes; a limpeza repoe
 * `pending` para a segunda passagem recomecar do zero.
 */
export function useSiteIntro() {
  useEffect(() => {
    const html = document.documentElement;
    if (html.dataset.intro !== "pending") return;
    html.dataset.intro = "loading";

    const speed = Number.parseFloat(getComputedStyle(html).getPropertyValue("--intro-speed")) || 1;
    const startedAt = Number(html.dataset.introAt) || performance.now();
    const readyAt = introTimeline.ready * 1000 * speed;
    const capAt = readyAt + LOAD_GRACE;

    const timers: number[] = [];
    let finished = false;
    let fontsReady = !("fonts" in document);
    if ("fonts" in document) document.fonts.ready.then(() => { fontsReady = true; });

    const later = (fn: () => void, ms: number) => { timers.push(window.setTimeout(fn, ms)); };

    const open = () => {
      html.dataset.intro = "ready";
      later(() => { html.dataset.intro = "done"; finished = true; }, introTimeline.reveal * 1000);
    };

    const gate = () => {
      const elapsed = performance.now() - startedAt;
      if ((document.readyState === "complete" && fontsReady) || elapsed >= capAt) { open(); return; }
      later(gate, GATE_POLL);
    };

    later(gate, Math.max(0, readyAt - (performance.now() - startedAt)));

    return () => {
      timers.forEach(clearTimeout);
      if (!finished) html.dataset.intro = "pending";
    };
  }, []);
}
