import type { HomeContent } from "../types";

/**
 * Copy da Home em es. Traduzido a partir da baseline pt-PT. Os `href` sao caminhos internos da
 * aplicacao e nao se traduzem aqui: a palavra que cada idioma mostra no URL
 * vive no `routing.ts`.
 */
export const homeEs: HomeContent = {
  hero: {
    kicker: ["Consultoría de operación", "Diagnóstico Safe"],
    title: { first: "Encuentre el cuello de botella", second: "que frena su crecimiento." },
    lead: "Safe analiza estrategia comercial, procesos, datos y tecnología para identificar dónde la operación pierde resultado.",
    areas: ["Demanda", "Comercial", "Tecnología"],
    actions: {
      primary: { href: "/contacto", label: "Hacer el diagnóstico" },
      secondary: { href: "/metodo", label: "Ver cómo funciona" },
    },
    signature: "Intelligence. Strategy. Growth.",
  },
};
