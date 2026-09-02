import type { HomeContent } from "../types";

/**
 * Copy da Home em pt-BR, traduzida da baseline pt-PT. Os `href` sao caminhos
 * internos da aplicacao e nao se traduzem aqui: a palavra que cada idioma
 * mostra no URL vive no `routing.ts`.
 */
export const homePtBR: HomeContent = {
  hero: {
    kicker: ["Consultoria de operação", "Diagnóstico Safe"],
    title: { first: "Encontre o gargalo", second: "que trava o seu crescimento." },
    lead: "A Safe analisa estratégia comercial, processos, dados e tecnologia para identificar onde a operação perde resultado.",
    areas: ["Demanda", "Comercial", "Tecnologia"],
    actions: {
      primary: { href: "/contacto", label: "Fazer o diagnóstico" },
      secondary: { href: "/metodo", label: "Ver como funciona" },
    },
    signature: "Intelligence. Strategy. Growth.",
  },
};
