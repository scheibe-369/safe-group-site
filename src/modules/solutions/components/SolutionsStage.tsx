"use client";

import { useRef, type CSSProperties, type ReactNode } from "react";
import { useSolutionCursor } from "../hooks/useSolutionCursor";
import { useSolutionsStack } from "../hooks/useSolutionsStack";

type Props = {
  count: number;
  /** Nome acessivel da seccao, ja no idioma actual. */
  label: string;
  /** Palavra escrita no cursor que segue o rato sobre os paineis. */
  cursorLabel: string;
  children: ReactNode;
};

/**
 * A única peça de cliente da secção. Recebe a marcação já renderizada no
 * servidor por `children`, tal como `HeroTransition` faz com a Hero, e limita-se
 * a segurar o `ref` da raiz e a montar os dois efeitos.
 *
 * O motivo é concreto: os painéis carregam a copy das seis soluções e seis
 * `next/image`. Se o palco fosse cliente com os dados por props, tudo isso
 * atravessava a fronteira e ia parar ao payload da Home. Assim só atravessa o
 * número de painéis, que serve para a altura da secção.
 */
export function SolutionsStage({ count, label, cursorLabel, children }: Props) {
  const rootRef = useRef<HTMLElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  useSolutionsStack(rootRef);
  useSolutionCursor(rootRef, cursorRef);

  return (
    <section
      id="solucoes"
      ref={rootRef}
      className="solutions scroll-mt-28"
      data-cursor="off"
      style={{ "--solutions-count": count } as CSSProperties}
      aria-label={label}
    >
      {children}
      <div className="solutions__cursor" ref={cursorRef} data-visible="false" aria-hidden="true">
        {cursorLabel}
      </div>
    </section>
  );
}
