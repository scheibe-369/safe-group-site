import type { HomeContent } from "../types";

/**
 * Copy da Home em es. Traduzido a partir da baseline pt-PT. Os `href` sao caminhos internos da
 * aplicacao e nao se traduzem aqui: a palavra que cada idioma mostra no URL
 * vive no `routing.ts`.
 */
export const homeEs: HomeContent = {
  hero: {
    kicker: ["Operaciones high ticket", "Diagnóstico Safe"],
    title: { first: "Encuentre la", second: "prioridad." },
    lead: "Safe conecta estrategia comercial, marketing, datos y tecnología para encontrar el bloqueo prioritario y estructurar la respuesta correcta.",
    areas: ["Demanda", "Comercial", "Tecnología"],
    actions: {
      primary: { href: "/contacto", label: "Hacer el diagnóstico" },
      secondary: { href: "/metodo", label: "Ver cómo funciona" },
    },
    signature: "Intelligence. Strategy. Growth.",
  },
};
