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
      id: "pwc",
      highlight: "3×",
      statText: "mayor fue el crecimiento de ingresos por empleado en los sectores más expuestos a la IA",
      detail: "El estudio comparó sectores y encontró un crecimiento del 27%, frente al 9% en los menos expuestos a la tecnología.",
      source: "PwC, 2025",
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
