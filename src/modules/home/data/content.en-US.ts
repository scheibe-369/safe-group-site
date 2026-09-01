import type { HomeContent } from "../types";

/**
 * Copy da Home em en-US. Traduzido a partir da baseline pt-PT. Os `href` sao caminhos internos da
 * aplicacao e nao se traduzem aqui: a palavra que cada idioma mostra no URL
 * vive no `routing.ts`.
 */
export const homeEnUS: HomeContent = {
  hero: {
    kicker: ["High ticket operations", "Safe diagnostic"],
    title: { first: "Find the", second: "priority." },
    lead: "Safe connects sales strategy, marketing, data and technology to find the blocker that matters most and structure the right response.",
    areas: ["Demand", "Sales", "Technology"],
    actions: {
      primary: { href: "/contacto", label: "Take the diagnostic" },
      secondary: { href: "/metodo", label: "See how it works" },
    },
    signature: "Intelligence. Strategy. Growth.",
  },
};
