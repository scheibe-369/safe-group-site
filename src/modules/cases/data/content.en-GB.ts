import type { CasesContent } from "../types/content";

/**
 * Copy da interface do modulo de cases em en-GB. Traduzido a partir da baseline pt-PT.
 */
export const casesContentEnGB: CasesContent = {
  rail: {
    kicker: "Cases",
    title: "The intervention only counts when the result can be explained.",
    action: "Explore cases",
    carouselLabel: "Safe cases",
  },

  demoNotice: "Some of the cases below are demonstration content, fictional, to validate the format.",

  carousel: {
    hoverLabel: "View case",
    demoTag: "Demonstration",
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
      copy: "Each case shows the context, the priority, the intervention and the evidence available. No loose metrics and no promises without a source.",
    },
    sectorNavAriaLabel: "Browse by sector",
    sectorCarouselLabel: "{sector} cases",
    sectorCount: { singular: "case", plural: "cases" },
    indexTitle: "All cases",
    indexCount: { singular: "record", plural: "records" },
    demoTag: "Demonstration",
  },

  detail: {
    notFoundTitle: "Case not found",
    demoWarning: "Demonstration case, it does not correspond to work carried out.",
    credit: "Original business: {label}",
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
    galleryAriaLabel: "Gallery for the {client} case",
    galleryImageAlt: "{client}, image {index}",
    relatedTitle: "Other cases",
    relatedAction: "View all cases",
  },
};
