"use client";

import { useState } from "react";
import { SectionHeading } from "@/shared/ui/SectionHeading";
import type { SolutionOffering } from "../../types/solution";

type Props = {
  items: SolutionOffering[];
  /**
   * Prefixo dos ids. Vem do slug da solução e não de `useId`: o contador do
   * `useId` desalinhava entre o render do servidor e o do cliente e partia a
   * hidratação. O slug é único por página e estável nos dois lados.
   */
  idPrefix: string;
  /** Nome da solução, para o cabeçalho da secção. */
  solutionName: string;
};

/**
 * Acordeão das ofertas de cada solução. No original só uma linha fica aberta de
 * cada vez e a resposta entra indentada, com uma linha fina a fechar a linha.
 *
 * A altura anima por `grid-template-rows: 0fr -> 1fr`, sem medir nada em
 * JavaScript, por isso o conteúdo continua a poder crescer com o texto.
 */
export function SolutionOfferings({ items, idPrefix, solutionName }: Props) {
  // Todas fechadas de início, como no original.
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const baseId = `oferta-${idPrefix}`;

  return (
    <section className="safe-section bg-[var(--safe-black)]">
      <div className="safe-container flex flex-col gap-10">
        {/* Sem este cabeçalho a secção não tinha nome acessível e cada oferta
            lia-se como uma secção de topo da página, ao mesmo nível de "Cases".
            Com ele, os gatilhos descem para `h3` e a hierarquia fecha. */}
        <SectionHeading kicker="O que entra" title={`O que fazemos em ${solutionName}.`} />

        <ul className="solution-offerings__list">
          {items.map((item, index) => {
            const open = openIndex === index;
            const panelId = `${baseId}-panel-${index}`;
            const triggerId = `${baseId}-trigger-${index}`;

            return (
              <li key={item.title} className="solution-offerings__item" data-open={open ? "true" : "false"}>
                <h3>
                  <button
                    type="button"
                    id={triggerId}
                    className="solution-offerings__trigger"
                    aria-expanded={open}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(open ? null : index)}
                  >
                    <span>{item.title}</span>
                    <svg
                      className="solution-offerings__chevron"
                      viewBox="0 0 18 18"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M4 6.5 9 11.5 14 6.5"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinecap="square"
                      />
                    </svg>
                  </button>
                </h3>

                <div
                  className="solution-offerings__panel"
                  id={panelId}
                  role="region"
                  aria-labelledby={triggerId}
                >
                  {/* `inert` tira o conteúdo fechado da árvore de
                      acessibilidade e da ordem de tabulação sem lhe mexer no
                      layout, por isso a altura continua a animar. `hidden` ou
                      `display:none` matavam a transição. */}
                  <div inert={!open}>
                    <p className="solution-offerings__body">{item.body}</p>
                  </div>
                </div>

                <div className="solution-offerings__line" />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
