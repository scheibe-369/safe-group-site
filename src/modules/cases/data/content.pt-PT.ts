import type { CasesContent } from "../types/content";

/**
 * Copy da interface do modulo de cases em pt-PT, a lingua de origem. Este
 * ficheiro e a fonte de onde os outros quatro idiomas sao traduzidos.
 */
export const casesContentPtPT: CasesContent = {
  rail: {
    kicker: "Cases",
    title: "A intervenção só conta quando o resultado pode ser explicado.",
    action: "Explorar cases",
    carouselLabel: "cases Safe",
  },

  demoNotice: "Alguns cases abaixo são conteúdo de demonstração, fictícios, para validar o formato.",

  carousel: {
    hoverLabel: "Ver case",
    demoTag: "Demonstração",
    coverAlt: "Case {client}",
    slideAriaLabel: "{client}, {meta}",
    previous: "Anterior, {label}",
    next: "Seguinte, {label}",
  },

  directory: {
    metaTitle: "Cases",
    metaDescription: "Cases da Safe Group apresentados com contexto, decisão, intervenção e resultados verificáveis.",
    hero: {
      kicker: "Cases",
      titleBefore: "Antes do resultado, existe uma ",
      titleHighlight: "decisão",
      titleAfter: " bem estruturada.",
      copy: "Cada case mostra o contexto, a prioridade, a intervenção e a prova disponível. Sem métricas soltas e sem promessas sem fonte.",
    },
    sectorNavAriaLabel: "Navegar por setor",
    sectorCarouselLabel: "cases de {sector}",
    sectorCount: { singular: "case", plural: "cases" },
    indexTitle: "Todos os cases",
    indexCount: { singular: "registo", plural: "registos" },
    demoTag: "Demonstração",
  },

  detail: {
    notFoundTitle: "Case não encontrado",
    demoWarning: "Case de demonstração, não corresponde a trabalho realizado.",
    credit: "Operação de origem: {label}",
    coverAlt: "Case {client}",
    fields: {
      client: "Cliente",
      area: "Área",
      deliverables: "Entregas",
    },
    sections: {
      context: "Contexto",
      challenge: "Desafio",
      intervention: "Intervenção",
      structure: "Estrutura",
    },
    resultsTitle: "Resultados verificados",
    galleryAriaLabel: "Galeria do case {client}",
    galleryImageAlt: "{client}, imagem {index}",
    relatedTitle: "Outros cases",
    relatedAction: "Ver todos os cases",
  },
};
