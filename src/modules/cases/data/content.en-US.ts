import type { CasesContent } from "../types/content";

/**
 * Copy da interface do modulo de cases em en-US. Traduzido a partir da baseline pt-PT.
 */
export const casesContentEnUS: CasesContent = {
  rail: {
    kicker: "Cases",
    title: "The intervention only counts when the result can be explained.",
    action: "Explore cases",
    carouselLabel: "Safe cases",
  },

  demoNotice: "Some of the cases below are demo content, fictional, to validate the format.",

  carousel: {
    hoverLabel: "View case",
    demoTag: "Demo",
    coverAlt: "{client} case",
    slideAriaLabel: "{client}, {meta}",
    previous: "Previous, {label}",
    next: "Next, {label}",
  },

  directory: {
    metaTitle: "Cases",
    metaDescription: "Safe Group cases presented with context, decision, intervention and verifiable results.",
    hero: {
      kicker: "Cases",
      titleBefore: "Before the result, there is a well structured ",
      titleHighlight: "decision",
      titleAfter: ".",
      copy: "Every case shows the context, the priority, the intervention and the proof available. No loose metrics and no promises without a source.",
    },
    sectorNavAriaLabel: "Browse by sector",
    sectorCarouselLabel: "{sector} cases",
    sectorCount: { singular: "case", plural: "cases" },
    indexTitle: "All cases",
    indexCount: { singular: "record", plural: "records" },
    demoTag: "Demo",
  },

  detail: {
    notFoundTitle: "Case not found",
    demoWarning: "Demo case, it does not correspond to work performed.",
    credit: "Source operation: {label}",
    coverAlt: "{client} case",
    fields: {
      client: "Client",
      area: "Area",
      deliverables: "Deliverables",
    },
    sections: {
      context: "Context",
      challenge: "Challenge",
      intervention: "Intervention",
      structure: "Structure",
    },
    resultsTitle: "Verified results",
    galleryAriaLabel: "{client} case gallery",
    galleryImageAlt: "{client}, image {index}",
    relatedTitle: "Other cases",
    relatedAction: "View all cases",
  },
};
