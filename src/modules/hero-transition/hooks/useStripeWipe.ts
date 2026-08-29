"use client";

import { useEffect, type RefObject } from "react";

const STRIPE_SELECTOR = ".hero-transition__stripe";
const COVER_SELECTOR = ".hero-transition__cover";

/**
 * Liga o avanco das listras ao scroll do wrapper via GSAP ScrollTrigger, em
 * modo scrub puro (sem pin, o sticky do CSS ja faz esse trabalho). Como a
 * Hero agora vive dentro do wrapper (o proprio `top top` cai no scroll 0,
 * nao depois da Hero passar), a timeline tem uma folga inicial antes da
 * cascata comecar, para a Hero ainda respirar um instante presa no ecra
 * antes das listras entrarem. So corre a partir do breakpoint lg e fora de
 * prefers-reduced-motion, para nao arriscar a sensacao de scroll em mobile.
 */
export function useStripeWipe(wrapperRef: RefObject<HTMLDivElement | null>, stageRef: RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    const wrapper = wrapperRef.current;
    const stage = stageRef.current;
    if (!wrapper || !stage) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(min-width: 1024px)").matches) return;

    let cancelled = false;
    let ctx: { revert: () => void } | undefined;

    Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(([{ gsap }, { ScrollTrigger }]) => {
      if (cancelled) return;
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        const stripes = stage.querySelectorAll<HTMLElement>(STRIPE_SELECTOR);
        const cover = stage.querySelector<HTMLElement>(COVER_SELECTOR);
        gsap.timeline({
          scrollTrigger: {
            trigger: wrapper,
            start: "top top",
            end: () => `+=${(wrapper.offsetHeight - window.innerHeight) * 0.65}`,
            scrub: 0.8,
          },
        }).to(stripes, {
          scaleX: 1,
          ease: "power2.inOut",
          stagger: { each: 0.05, from: "start" },
          duration: 1,
        }, 0.4).to(cover, { opacity: 1, ease: "power1.in", duration: 0.4 }, "-=0.2");
      }, wrapper);
    });

    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, [wrapperRef, stageRef]);
}
