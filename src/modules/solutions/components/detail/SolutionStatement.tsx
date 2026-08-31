"use client";

import { useRef } from "react";
import { useLineWipeReveal } from "@/modules/statement-section/hooks/useLineWipeReveal";

type Props = {
  statement: string;
};

/**
 * Bloco "por outras palavras" do original: sobrelinha discreta e uma frase
 * grande revelada linha a linha à medida que atravessa o centro do ecrã.
 *
 * O efeito já existe no site em `statement-section` e é literalmente o mesmo do
 * original, por isso reutiliza-se o hook em vez de escrever outra timeline.
 *
 * Dependência que nenhum import declara: o hook injeta `.line-mask` dentro de
 * cada `.line`, e essas duas classes são estilizadas em
 * `src/modules/statement-section/styles/statement-section.css`, que chega aqui
 * por o `globals.css` a importar. Se esse módulo sair, este bloco parte em
 * silêncio, sem erro de build. A correção limpa é promover o hook e as duas
 * classes para `src/shared/`, como já acontece com `metallic-shine.css`, mas
 * isso mexe noutro módulo e fica para uma entrega própria.
 */
export function SolutionStatement({ statement }: Props) {
  const headingRef = useRef<HTMLHeadingElement>(null);
  useLineWipeReveal(headingRef);

  return (
    <section className="safe-section bg-[var(--safe-black)]">
      <div className="safe-container flex flex-col items-center gap-6 text-center">
        <p className="text-[clamp(.75rem,.97vw,1.1rem)] uppercase text-[var(--safe-steel)]">
          por outras palavras
        </p>
        <h2
          ref={headingRef}
          className="max-w-[min(74.8vw,67rem)] text-[clamp(1.75rem,4.4vw,4.5rem)] font-medium leading-[1.12] tracking-[-.02em] text-white"
        >
          {statement}
        </h2>
      </div>
    </section>
  );
}
