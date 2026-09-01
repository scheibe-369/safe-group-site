import type { CasesContent } from "../types/content";

/**
 * Copy da interface do modulo de cases em es. Traduzido a partir da baseline pt-PT.
 */
export const casesContentEs: CasesContent = {
  rail: {
    kicker: "Cases",
    title: "La intervención solo cuenta cuando el resultado se puede explicar.",
    action: "Explorar cases",
    carouselLabel: "cases Safe",
  },

  demoNotice: "Algunos cases de abajo son contenido de demostración, ficticios, para validar el formato.",

  carousel: {
    hoverLabel: "Ver case",
    demoTag: "Demostración",
    coverAlt: "Case {client}",
    slideAriaLabel: "{client}, {meta}",
    previous: "Anterior, {label}",
    next: "Siguiente, {label}",
  },

  directory: {
    metaTitle: "Cases",
    metaDescription: "Cases de Safe Group presentados con contexto, decisión, intervención y resultados verificables.",
    hero: {
      kicker: "Cases",
      titleBefore: "Antes del resultado, existe una ",
      titleHighlight: "decisión",
      titleAfter: " bien estructurada.",
      copy: "Cada case muestra el contexto, la prioridad, la intervención y la prueba disponible. Sin métricas sueltas y sin promesas sin fuente.",
    },
    sectorNavAriaLabel: "Navegar por sector",
    sectorCarouselLabel: "cases de {sector}",
    sectorCount: { singular: "case", plural: "cases" },
    indexTitle: "Todos los cases",
    indexCount: { singular: "registro", plural: "registros" },
    demoTag: "Demostración",
  },

  detail: {
    notFoundTitle: "Case no encontrado",
    demoWarning: "Case de demostración, no corresponde a trabajo realizado.",
    credit: "Operación de origen: {label}",
    coverAlt: "Case {client}",
    fields: {
      client: "Cliente",
      area: "Área",
      deliverables: "Entregas",
    },
    sections: {
      context: "Contexto",
      challenge: "Desafío",
      intervention: "Intervención",
      structure: "Estructura",
    },
    resultsTitle: "Resultados verificados",
    galleryAriaLabel: "Galería del case {client}",
    galleryImageAlt: "{client}, imagen {index}",
    relatedTitle: "Otros cases",
    relatedAction: "Ver todos los cases",
  },
};
