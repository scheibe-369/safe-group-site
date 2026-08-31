"use client";

import { useEffect, type RefObject } from "react";

type GsapMatchMedia = ReturnType<typeof import("gsap").gsap.matchMedia>;

const STRIPE_SELECTOR = ".hero-transition__stripe";
const COVER_SELECTOR = ".hero-transition__cover";

/**
 * Arma o palco (`data-wipe` no wrapper, ver hero-transition.css) e liga o
 * avanco das listras ao scroll via GSAP ScrollTrigger, em modo scrub puro: o
 * sticky do CSS ja faz o papel de pin, sem o custo de reflow do
 * `ScrollTrigger.pin`. O atributo so entra por JavaScript de proposito, para
 * o scroll extra nunca existir sem listras para o preencher.
 *
 * Duas leituras, com a mesma coreografia:
 * - `pinned` (>= lg): a Hero cabe no ecra, o palco vale 100vh e ha folga
 *   inicial (0.4) para a Hero respirar presa antes das listras entrarem.
 * - `compact` (< lg): a Hero passa dos 760px, por isso o palco fica com a
 *   altura real dela e o pin encosta o fundo (CTA e assinatura) ao fundo do
 *   ecra, via `--hero-transition-pin-top`. A folga inicial e menor, porque o
 *   scroll extra tambem e menor.
 *
 * `gsap.matchMedia` e obrigatorio em vez de um `if` no efeito: rodar o
 * telemovel ou redimensionar o browser troca de leitura sem remontar o
 * componente, e so o matchMedia reverte os estilos inline da leitura antiga.
 */
export function useStripeWipe(wrapperRef: RefObject<HTMLDivElement | null>, stageRef: RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    const wrapper = wrapperRef.current;
    const stage = stageRef.current;
    if (!wrapper || !stage) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let cancelled = false;
    let mm: GsapMatchMedia | undefined;

    Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(([{ gsap }, { ScrollTrigger }]) => {
      if (cancelled) return;
      gsap.registerPlugin(ScrollTrigger);
      // A barra de endereco a esconder-se muda o innerHeight a meio do scroll;
      // sem isto o ScrollTrigger refazia as medidas e a cascata dava um salto.
      ScrollTrigger.config({ ignoreMobileResize: true });

      mm = gsap.matchMedia();
      mm.add(
        {
          pinned: "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
          compact: "(max-width: 1023.98px) and (prefers-reduced-motion: no-preference)",
        },
        (context) => {
          const pinned = Boolean(context.conditions?.pinned);
          wrapper.dataset.wipe = pinned ? "pinned" : "compact";

          // O palco so ganha altura depois do atributo entrar, por isso a
          // medida do pin tem de vir a seguir (e outra vez em cada refresh do
          // ScrollTrigger, que e onde a rotacao do ecra aparece).
          const measurePin = () => {
            if (pinned) return;
            const overflow = Math.min(0, window.innerHeight - stage.offsetHeight);
            wrapper.style.setProperty("--hero-transition-pin-top", `${overflow}px`);
          };
          measurePin();
          ScrollTrigger.addEventListener("refreshInit", measurePin);

          const stripes = stage.querySelectorAll<HTMLElement>(STRIPE_SELECTOR);
          const cover = stage.querySelector<HTMLElement>(COVER_SELECTOR);

          gsap
            .timeline({
              scrollTrigger: {
                trigger: wrapper,
                start: "top top",
                end: () => `+=${(wrapper.offsetHeight - window.innerHeight) * (pinned ? 0.65 : 0.75)}`,
                scrub: 0.8,
                invalidateOnRefresh: true,
              },
            })
            .to(
              stripes,
              { scaleX: 1, ease: "power2.inOut", stagger: { each: 0.05, from: "start" }, duration: 1 },
              pinned ? 0.4 : 0.2,
            )
            .to(cover, { opacity: 1, ease: "power1.in", duration: 0.4 }, "-=0.2");

          return () => {
            ScrollTrigger.removeEventListener("refreshInit", measurePin);
            wrapper.style.removeProperty("--hero-transition-pin-top");
            delete wrapper.dataset.wipe;
          };
        },
      );
    });

    return () => {
      cancelled = true;
      mm?.revert();
    };
  }, [wrapperRef, stageRef]);
}
