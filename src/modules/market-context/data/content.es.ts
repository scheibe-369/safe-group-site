import type { MarketContextContent } from "../types/market-stat";

/**
 * Copy pt-PT do contexto de mercado.
 *
 * O `source` de cada cartao e o nome da consultoria que assina o estudo: fica
 * igual nos cinco idiomas.
 */
export const marketContextContentEs: MarketContextContent = {
  kicker: "Contexto de mercado",
  titleA: "El mercado de ",
  titleB: "automatización e IA",
  titleC: " en números.",
  copy: "Los datos de las principales consultoras muestran la velocidad de la adopción corporativa.",
  sourceLabel: "Fuente:",
  stats: [
    {
      id: "gartner",
      highlight: "40%",
      statText: "de las aplicaciones empresariales tendrán agentes de IA integrados para finales de 2026",
      detail: "En 2025 esa cifra era inferior al 5%. La adopción corporativa se aceleró en apenas 12 meses.",
      source: "Gartner",
    },
    {
      id: "mckinsey",
      highlight: "US$ 4,4 billones",
      statText: "al año en valor que los agentes de IA pueden generar para la economía global",
      detail: "La automatización de procesos, las mejoras de productividad y los nuevos modelos de negocio componen la mayor transformación corporativa desde internet.",
      source: "McKinsey & Company",
    },
    {
      id: "ibm",
      highlight: "61%",
      statText: "de los CEO globales ya están implementando agentes de IA en sus operaciones",
      detail: "Encuesta a 2 mil CEO en 33 países. Indicador directo de la prioridad que la IA pasó a ocupar en las agendas ejecutivas.",
      source: "IBM Institute for Business Value",
    },
    {
      id: "pwc",
      highlight: "3×",
      statText: "mayor fue el crecimiento de ingresos por empleado en los sectores más expuestos a la IA",
      detail: "El estudio comparó sectores y encontró un crecimiento del 27%, frente al 9% en los menos expuestos a la tecnología.",
      source: "PwC, 2025",
    },
    {
      id: "ibm-2030",
      highlight: "48%",
      statText: "de las decisiones operativas pueden ser tomadas por IA sin intervención humana",
      detail: "Hoy, la estimación de los ejecutivos es del 25%, siempre que la decisión tenga reglas, criterios y límites bien definidos.",
      source: "IBM, proyección para 2030",
    },
  ],
  carousel: {
    previous: "Tarjeta anterior",
    next: "Tarjeta siguiente",
    goToCard: "Ir a la tarjeta {n}",
  },
};
