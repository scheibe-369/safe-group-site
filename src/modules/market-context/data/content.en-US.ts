import type { MarketContextContent } from "../types/market-stat";

/**
 * Copy pt-PT do contexto de mercado.
 *
 * O `source` de cada cartao e o nome da consultoria que assina o estudo: fica
 * igual nos cinco idiomas.
 */
export const marketContextContentEnUS: MarketContextContent = {
  kicker: "Market context",
  titleA: "The ",
  titleB: "automation and AI",
  titleC: " market in numbers.",
  copy: "Data from the leading consulting firms shows the speed of corporate adoption.",
  sourceLabel: "Source:",
  stats: [
    {
      id: "gartner",
      highlight: "40%",
      statText: "of enterprise applications will have AI agents built in by the end of 2026",
      detail: "In 2025 that number was below 5%. Corporate adoption accelerated in just 12 months.",
      source: "Gartner",
    },
    {
      id: "mckinsey",
      highlight: "US$ 4.4T",
      statText: "a year in value that AI agents can generate for the global economy",
      detail: "Process automation, productivity gains and new business models make up the largest corporate transformation since the internet.",
      source: "McKinsey & Company",
    },
    {
      id: "ibm",
      highlight: "61%",
      statText: "of global CEOs are already implementing AI agents across their operations",
      detail: "Survey of 2,000 CEOs in 33 countries. A direct indicator of the priority AI now holds on executive agendas.",
      source: "IBM Institute for Business Value",
    },
    {
      id: "pwc",
      highlight: "3×",
      statText: "higher revenue growth per employee in the sectors most exposed to AI",
      detail: "The study compared sectors and found 27% growth, against 9% in those less exposed to technology.",
      source: "PwC, 2025",
    },
    {
      id: "ibm-2030",
      highlight: "48%",
      statText: "of operational decisions can be made by AI without human intervention",
      detail: "Today, executives estimate 25%, as long as the decision has clearly defined rules, criteria and limits.",
      source: "IBM, 2030 projection",
    },
  ],
  carousel: {
    previous: "Previous card",
    next: "Next card",
    goToCard: "Go to card {n}",
  },
};
