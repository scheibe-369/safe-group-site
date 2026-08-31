import type { MarketStat } from "../types/market-stat";

export const kicker = "Contexto de mercado";

export const titleA = "O mercado de ";

export const titleB = "automação e IA";

export const titleC = " em números.";

export const copy = "Dados das principais consultorias mostram a velocidade da adoção corporativa.";

export const sourceLabel = "Fonte:";

export const marketStats: MarketStat[] = [
  {
    id: "gartner",
    highlight: "40%",
    statText: "das aplicações empresariais terão agentes de IA integrados até o fim de 2026",
    detail: "Em 2025 esse número era inferior a 5%. A adoção corporativa acelerou em apenas 12 meses.",
    source: "Gartner",
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
    highlight: "61%",
    statText: "dos CEOs globais já estão implementando agentes de IA nas suas operações",
    detail: "Pesquisa com 2 mil CEOs em 33 países. Indicador direto da prioridade que a IA passou a ocupar nas agendas executivas.",
    source: "IBM Institute for Business Value",
  },
];
