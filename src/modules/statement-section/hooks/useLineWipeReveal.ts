"use client";

import { useEffect, type RefObject } from "react";

/**
 * Efeito extraido do site da Tyvo (`.split-lines`, script inline do
 * `index.html`): SplitType parte o titulo em linhas e palavras, cada linha
 * ganha uma mascara preta translucida a 100% de largura, e o scroll encolhe
 * essa mascara ate 0% conforme a linha atravessa o centro do ecra, revelando
 * o texto da esquerda para a direita. So sai cedo em prefers-reduced-motion;
 * sem restricao de breakpoint, tal como no original.
 */
export function useLineWipeReveal(headingRef: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const heading = headingRef.current;
    if (!heading) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let cancelled = false;
    let split: { revert: () => void } | undefined;
    let ctx: { revert: () => void } | undefined;
    let handleResize: (() => void) | undefined;

    Promise.all([import("gsap"), import("gsap/ScrollTrigger"), import("split-type")]).then(
      ([{ gsap }, { ScrollTrigger }, { default: SplitType }]) => {
        if (cancelled) return;
        gsap.registerPlugin(ScrollTrigger);

        const runSplit = () => {
          split = new SplitType(heading, { types: "lines,words" });
          heading.querySelectorAll<HTMLElement>(".line").forEach((line) => {
            const mask = document.createElement("div");
            mask.className = "line-mask";
            line.appendChild(mask);
          });
        };

        const createAnimation = () => {
          heading.querySelectorAll<HTMLElement>(".line").forEach((line) => {
            const mask = line.querySelector<HTMLElement>(".line-mask");
            if (!mask) return;
            gsap.timeline({
              scrollTrigger: { trigger: line, start: "top center", end: "bottom center", scrub: 1 },
            }).to(mask, { width: "0%", duration: 1 });
          });
        };

        const build = () => {
          runSplit();
          createAnimation();
        };

        ctx = gsap.context(() => {
          build();
        }, heading);

        let windowWidth = window.innerWidth;
        handleResize = () => {
          if (windowWidth === window.innerWidth) return;
          windowWidth = window.innerWidth;
          ctx?.revert();
          split?.revert();
          ctx = gsap.context(() => {
            build();
          }, heading);
        };
        window.addEventListener("resize", handleResize);
      },
    );

    return () => {
      cancelled = true;
      if (handleResize) window.removeEventListener("resize", handleResize);
      ctx?.revert();
      split?.revert();
    };
  }, [headingRef]);
}
