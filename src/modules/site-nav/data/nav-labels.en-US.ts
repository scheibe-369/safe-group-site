import type { SiteNavLabels } from "../types";

/**
 * Copy do menu em en-US. So texto: os destinos vivem em
 * `nav-content.ts`, que junta cada `hash` ao endereco da Home no idioma certo.
 */
export const siteNavLabelsEnUS: SiteNavLabels = {
  brandLabel: "Safe Group, home page",
  barLinks: [
    { hash: "metodo", label: "Method" },
    { hash: "solucoes", label: "Solutions" },
    { hash: "cases", label: "Cases" },
    { hash: "faq", label: "FAQ" },
  ],
  cta: { hash: "diagnostico", label: "Start diagnostic" },
  toggle: {
    open: "Menu",
    close: "Close",
    ariaOpen: "Open menu",
    ariaClose: "Close menu",
    menuLabel: "Site menu",
  },
  columns: {
    navigation: "Navigation",
    cases: "Cases",
  },
  menuLinks: [
    { label: "Home" },
    { hash: "metodo", label: "Method" },
    { hash: "solucoes", label: "Solutions" },
    { hash: "cases", label: "Cases" },
    { hash: "faq", label: "Frequently asked questions" },
    { hash: "diagnostico", label: "Contact" },
  ],
  casesAll: { hash: "cases", label: "All cases" },
  casesNote: "Includes demo content",
};
