"use client";

import { useRef, type CSSProperties, type ReactNode } from "react";
import { useStripeWipe } from "../hooks/useStripeWipe";

const STRIPE_COUNT = 9;

type HeroTransitionProps = {
  children: ReactNode;
};

/**
 * Envolve a Hero real (nao uma copia) num palco sticky: a Hero fica presa no
 * ecra por scroll extra enquanto listras diagonais em cascata a cobrem por
 * cima (ver hero-transition.css), seguram a preto ate o sticky soltar, e a
 * proxima seccao sobe pelo scroll natural. O overlay e puramente decorativo
 * (aria-hidden, pointer-events-none) para nao tapar os cliques nos CTAs da
 * Hero antes de a cobertura la chegar.
 *
 * O `__hold` e o espaco que o sticky precisa para segurar no telemovel, e tem
 * de ser um irmao real do palco: o sticky so se pode deslocar dentro da
 * content box do wrapper, por isso dar essa folga por `padding-bottom` nao
 * prendia nada. No desktop nao existe (a altura vem do proprio wrapper).
 */
export function HeroTransition({ children }: HeroTransitionProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  useStripeWipe(wrapperRef, stageRef);

  return (
    <div ref={wrapperRef} className="hero-transition">
      <div ref={stageRef} className="hero-transition__stage">
        {children}
        <div aria-hidden="true" className="hero-transition__stripes">
          {Array.from({ length: STRIPE_COUNT }).map((_, i) => (
            <span key={i} className="hero-transition__stripe" style={{ "--i": i } as CSSProperties} />
          ))}
          <span className="hero-transition__cover" />
        </div>
      </div>
      <div aria-hidden="true" className="hero-transition__hold" />
    </div>
  );
}
