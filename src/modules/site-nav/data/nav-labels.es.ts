import type { SiteNavLabels } from "../types";

/**
 * Copy do menu em es. So texto: os destinos vivem em
 * `nav-content.ts`, que junta cada `hash` ao endereco da Home no idioma certo.
 */
export const siteNavLabelsEs: SiteNavLabels = {
  brandLabel: "Safe Group, página de inicio",
  navAriaLabel: "Navegación principal",
  barLinks: [
    { hash: "metodo", label: "Método" },
    { hash: "solucoes", label: "Soluciones" },
    { hash: "cases", label: "Cases" },
    { hash: "faq", label: "FAQ" },
  ],
  cta: { hash: "diagnostico", label: "Empezar diagnóstico" },
  toggle: {
    open: "Menú",
    close: "Cerrar",
    ariaOpen: "Abrir menú",
    ariaClose: "Cerrar menú",
    menuLabel: "Menú del sitio",
  },
  columns: {
    navigation: "Navegación",
    cases: "Cases",
  },
  menuLinks: [
    { label: "Inicio" },
    { hash: "metodo", label: "Método" },
    { hash: "solucoes", label: "Soluciones" },
    { hash: "cases", label: "Cases" },
    { hash: "faq", label: "Preguntas frecuentes" },
    { hash: "diagnostico", label: "Contacto" },
  ],
  casesAll: { hash: "cases", label: "Todos los cases" },
  casesNote: "Incluye contenido de demostración",
};
