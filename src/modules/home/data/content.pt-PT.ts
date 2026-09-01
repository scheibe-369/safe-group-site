import type { HomeContent } from "../types";

/**
 * Copy da Home em pt-PT, a lingua de origem. Este ficheiro e a fonte de onde os
 * outros quatro idiomas sao traduzidos. Os `href` sao caminhos internos da
 * aplicacao e nao se traduzem aqui: a palavra que cada idioma mostra no URL
 * vive no `routing.ts`.
 */
export const homePtPT: HomeContent = {
  hero: {
    kicker: ["Operações high ticket", "Diagnóstico Safe"],
    title: { first: "Encontre a", second: "prioridade." },
    lead: "A Safe liga estratégia comercial, marketing, dados e tecnologia para encontrar o bloqueio prioritário e estruturar a resposta certa.",
    areas: ["Procura", "Comercial", "Tecnologia"],
    actions: {
      primary: { href: "/contacto", label: "Fazer o diagnóstico" },
      secondary: { href: "/metodo", label: "Ver como funciona" },
    },
    signature: "Intelligence. Strategy. Growth.",
  },
};
