import type { HomeContent } from "../types";

/**
 * Copy da Home em pt-BR, traduzida da baseline pt-PT. Os `href` sao caminhos
 * internos da aplicacao e nao se traduzem aqui: a palavra que cada idioma
 * mostra no URL vive no `routing.ts`.
 */
export const homePtBR: HomeContent = {
  hero: {
    kicker: ["Operações high ticket", "Diagnóstico Safe"],
    title: { first: "Encontre a", second: "prioridade." },
    lead: "A Safe conecta estratégia comercial, marketing, dados e tecnologia para encontrar o gargalo prioritário e estruturar a resposta certa.",
    areas: ["Demanda", "Comercial", "Tecnologia"],
    actions: {
      primary: { href: "/contacto", label: "Fazer o diagnóstico" },
      secondary: { href: "/metodo", label: "Ver como funciona" },
    },
    signature: "Intelligence. Strategy. Growth.",
  },
};
