import type { MarketContextContent } from "../types/market-stat";

/**
 * Copy pt-PT do contexto de mercado, a lingua de origem.
 *
 * O `source` de cada cartao e o nome da consultoria que assina o estudo: fica
 * igual nos cinco idiomas.
 */
export const marketContextContentPtPT: MarketContextContent = {
  kicker: "Contexto de mercado",
  titleA: "O mercado de ",
  titleB: "automação e IA",
  titleC: " em números.",
  copy: "Dados das principais consultorias mostram a velocidade da adoção corporativa.",
  sourceLabel: "Fonte:",
  stats: [
    {
      id: "pwc",
      highlight: "3×",
      statText: "maior foi o crescimento de receita por colaborador nos setores mais expostos à IA",
      detail: "O estudo comparou setores e encontrou crescimento de 27%, contra 9% nos menos expostos à tecnologia.",
      source: "PwC, 2025",
    },
    {
      id: "mckinsey",
      highlight: "US$ 4,4 tri",
      statText: "por ano em valor que agentes de IA podem gerar para a economia global",
      detail: "Automação de processos, ganhos de produtividade e novos modelos de negócio compõem a maior transformação corporativa desde a internet.",
      source: "McKinsey & Company",
    },
    {
      id: "ibm",
      highlight: "48%",
      statText: "das decisões operacionais podem ser tomadas por IA sem intervenção humana",
      detail: "Hoje, a estimativa dos executivos é de 25%, desde que a decisão tenha regras, critérios e limites bem definidos.",
      source: "IBM, projeção para 2030",
    },
  ],
  carousel: {
    previous: "Cartão anterior",
    next: "Cartão seguinte",
    goToCard: "Ir para o cartão {n}",
  },
};
