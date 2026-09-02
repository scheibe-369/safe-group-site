import type { MarketContextContent } from "../types/market-stat";

/**
 * Copy pt-PT do contexto de mercado.
 *
 * O `source` de cada cartao e o nome da consultoria que assina o estudo: fica
 * igual nos cinco idiomas.
 */
export const marketContextContentEnGB: MarketContextContent = {
  kicker: "Market context",
  titleA: "The ",
  titleB: "automation and AI",
  titleC: " market in numbers.",
  copy: "Data from the leading consultancies shows the speed of corporate adoption.",
  sourceLabel: "Source:",
  stats: [
    {
      id: "pwc",
      highlight: "3×",
      statText: "higher was the growth in turnover per employee in the sectors most exposed to AI",
      detail: "The study compared sectors and found growth of 27%, against 9% in those less exposed to the technology.",
      source: "PwC, 2025",
    },
    {
      id: "mckinsey",
      highlight: "US$ 4.4tn",
      statText: "a year in value that AI agents could generate for the global economy",
      detail: "Process automation, productivity gains and new business models make up the largest corporate transformation since the internet.",
      source: "McKinsey & Company",
    },
    {
      id: "ibm",
      highlight: "48%",
      statText: "of operational decisions could be made by AI without human intervention",
      detail: "Today, executives estimate the figure at 25%, provided the decision has clearly defined rules, criteria and limits.",
      source: "IBM, projection for 2030",
    },
  ],
  carousel: {
    previous: "Previous card",
    next: "Next card",
    goToCard: "Go to card {n}",
  },
};
