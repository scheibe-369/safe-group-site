import type { SiteNavLabels } from "../types";

/**
 * Copy do menu em pt-PT, a lingua de origem. So texto: os destinos vivem em
 * `nav-content.ts`, que junta cada `hash` ao endereco da Home no idioma certo.
 */
export const siteNavLabelsPtPT: SiteNavLabels = {
  brandLabel: "Safe Group, página inicial",
  navAriaLabel: "Navegação principal",
  barLinks: [
    { hash: "metodo", label: "Método" },
    { hash: "solucoes", label: "Soluções" },
    { hash: "cases", label: "Cases" },
    { hash: "faq", label: "FAQ" },
  ],
  cta: { hash: "diagnostico", label: "Começar diagnóstico" },
  toggle: {
    open: "Menu",
    close: "Fechar",
    ariaOpen: "Abrir menu",
    ariaClose: "Fechar menu",
    menuLabel: "Menu do site",
  },
  columns: {
    navigation: "Navegação",
    cases: "Cases",
  },
  menuLinks: [
    { label: "Início" },
    { hash: "metodo", label: "Método" },
    { hash: "solucoes", label: "Soluções" },
    { hash: "cases", label: "Cases" },
    { hash: "faq", label: "Perguntas frequentes" },
    { hash: "diagnostico", label: "Contacto" },
  ],
  casesAll: { hash: "cases", label: "Todos os cases" },
  casesNote: "Inclui conteúdo de demonstração",
};
