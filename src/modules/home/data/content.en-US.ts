import type { HomeContent } from "../types";

/**
 * Copy da Home em en-US. Traduzido a partir da baseline pt-PT. Os `href` sao caminhos internos da
 * aplicacao e nao se traduzem aqui: a palavra que cada idioma mostra no URL
 * vive no `routing.ts`.
 */
export const homeEnUS: HomeContent = {
  hero: {
    kicker: ["Operations consulting", "Safe diagnostic"],
    title: { first: "Find the bottleneck", second: "holding back your growth." },
    lead: "Safe analyzes sales strategy, processes, data and technology to identify where the business is losing results.",
    areas: ["Demand", "Sales", "Technology"],
    actions: {
      primary: { href: "/contacto", label: "Take the diagnostic" },
      secondary: { href: "/metodo", label: "See how it works" },
    },
    signature: "Intelligence. Strategy. Growth.",
  },
};
