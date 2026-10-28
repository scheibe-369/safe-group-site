import type { SiteChromeContent } from "../types";

/**
 * Copy da moldura do site (salto para o conteudo, rodape global, pagina 404 e
 * metadados da raiz) em en-GB. Este ficheiro e a fonte de
 * onde os outros quatro idiomas sao traduzidos: mudar aqui obriga a repassar os
 * agentes tradutores, como descrito no `CLAUDE.md`.
 */
export const siteChromeEnGB: SiteChromeContent = {
  skipToContent: "Skip to content",
  logoAriaLabel: "Safe Group, home page",

  footer: {
    navAriaLabel: "Footer navigation",
    tagline:
      "Strategy, commercial intelligence and technology for decisions that move the business.",
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
    description: "Go back to the home page to carry on exploring Safe.",
    action: "Back to the home page",
  },

  metadata: {
    titleDefault: "Safe Group | Operations and commercial growth consultancy",
    description:
      "Operations consultancy for high-ticket businesses. Safe Group finds the decision with the greatest impact on growth, margin or efficiency and structures the execution around it.",
    ogDescription: "Decisions that move the business.",
  },
};
