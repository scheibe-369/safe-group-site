import type { SiteChromeContent } from "../types";

/**
 * Copy da moldura do site (salto para o conteudo, rodape global, pagina 404 e
 * metadados da raiz) em es. Este ficheiro e a fonte de
 * onde os outros quatro idiomas sao traduzidos: mudar aqui obriga a repassar os
 * agentes tradutores, como descrito no `CLAUDE.md`.
 */
export const siteChromeEs: SiteChromeContent = {
  skipToContent: "Ir al contenido",
  logoAriaLabel: "Safe Group, página de inicio",

  footer: {
    navAriaLabel: "Navegación del pie de página",
    tagline:
      "Estrategia, inteligencia comercial y tecnología para decisiones que mueven operaciones high ticket.",
    // Este rodape aparece em todas as rotas menos a Home. E o unico caminho de
    // volta a lista de solucoes para quem aterra em `/solucoes/<slug>`, por
    // isso a entrada "Solucoes" tem de estar aqui.
    links: [
      { hash: "metodo", label: "Método" },
      { hash: "solucoes", label: "Soluciones" },
      { hash: "cases", label: "Cases" },
      { hash: "diagnostico", label: "Contacto" },
    ],
    rights: "Safe Group. Todos los derechos reservados.",
  },

  notFound: {
    kicker: "404",
    title: "Esta página no existe.",
    description: "Vuelva al inicio para seguir explorando Safe.",
    action: "Volver al inicio",
  },

  metadata: {
    titleDefault: "Safe Group | Decisiones que mueven la operación",
    description:
      "Safe encuentra la decisión que puede desbloquear crecimiento, margen o eficiencia en operaciones high ticket y estructura la ejecución en torno a ella.",
    keywords: [
      "crecimiento high ticket",
      "inteligencia comercial",
      "desarrollo SaaS",
      "tecnología para ventas",
      "Safe Group",
    ],
    ogDescription: "Decisiones que mueven la operación.",
  },
};
