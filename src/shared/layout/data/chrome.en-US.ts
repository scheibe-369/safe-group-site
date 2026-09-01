import type { SiteChromeContent } from "../types";

/**
 * Copy da moldura do site (salto para o conteudo, rodape global, pagina 404 e
 * metadados da raiz) em en-US. Este ficheiro e a fonte de
 * onde os outros quatro idiomas sao traduzidos: mudar aqui obriga a repassar os
 * agentes tradutores, como descrito no `CLAUDE.md`.
 */
export const siteChromeEnUS: SiteChromeContent = {
  skipToContent: "Skip to content",
  logoAriaLabel: "Safe Group, home page",

  footer: {
    navAriaLabel: "Footer navigation",
    tagline:
      "Strategy, commercial intelligence and technology for decisions that move high ticket operations.",
    // Este rodape aparece em todas as rotas menos a Home. E o unico caminho de
    // volta a lista de solucoes para quem aterra em `/solucoes/<slug>`, por
    // isso a entrada "Solucoes" tem de estar aqui.
    links: [
      { hash: "metodo", label: "Method" },
      { hash: "solucoes", label: "Solutions" },
      { hash: "cases", label: "Cases" },
      { hash: "diagnostico", label: "Contact" },
    ],
    rights: "Safe Group. All rights reserved.",
  },

  notFound: {
    kicker: "404",
    title: "This page does not exist.",
    description: "Head back to the home page to keep exploring Safe.",
    action: "Back to home",
  },

  metadata: {
    titleDefault: "Safe Group | Decisions that move the business",
    description:
      "Safe finds the decision that can unlock growth, margin or efficiency in high ticket operations and structures the execution around it.",
    keywords: [
      "high ticket growth",
      "commercial intelligence",
      "SaaS development",
      "sales technology",
      "Safe Group",
    ],
    ogDescription: "Decisions that move the business.",
  },
};
