import type { HomeContent } from "../types";

/**
 * Copy da Home em en-GB. Traduzido a partir da baseline pt-PT. Os `href` sao caminhos internos da
 * aplicacao e nao se traduzem aqui: a palavra que cada idioma mostra no URL
 * vive no `routing.ts`.
 */
export const homeEnGB: HomeContent = {
  hero: {
    kicker: ["Business consultancy", "Safe diagnostic"],
    title: { first: "Find the bottleneck", second: "holding back your growth." },
    lead: "Safe analyses commercial strategy, processes, data and technology to identify where the business is losing results.",
    areas: ["Demand", "Sales", "Technology"],
    actions: {
      primary: { href: "/contacto", label: "Take the diagnostic" },
      secondary: { href: "/metodo", label: "See how it works" },
    },
    signature: "Intelligence. Strategy. Growth.",
  },
};
