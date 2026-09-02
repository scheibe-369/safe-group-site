import type { ClosingSectionCopy } from "../types";

/**
 * Copy en-GB da seccao de fecho. Fecha a Home com o mesmo
 * titulo que ja fechava a pagina, agora com formulario, e sem prometer prazo,
 * custo ou resultado que nao esteja confirmado. Este ficheiro e a fonte de onde
 * os outros quatro idiomas sao traduzidos.
 */
export const closingSectionCopyEnGB: ClosingSectionCopy = {
  kicker: "Next step",
  titleLine1: "Before investing more,",
  titleAccent: "find",
  titleLine3: "the point that changes the business.",
  descA: "Share the context of your business so we can assess where the ",
  descStrong: "greatest potential impact",
  descB: " lies.",
  benefits: [
    "A reading of the business before the solution",
    "One concrete priority to address",
    "Workstreams tied to the same objective",
    "Clear owners and metrics",
  ],
  contactHeader: "Contact details",
  operationHeader: "Company details",
  submitHint: "The details are used only to prepare the first conversation.",

  form: {
    labels: {
      name: "Full name",
      email: "Work email",
      phone: "Telephone",
      company: "Company or business",
      sector: "Sector",
      operationSize: "Size of the business",
      priority: "Current priority",
    },
    selectPlaceholder: "Select",
    submit: "Start diagnostic",
    submitting: "Sending",
    disabled: "Sending available soon",
    successTitle: "Request received.",
    successDesc:
      "The Safe team will be in touch to arrange the first conversation.",
    errorMessage: "It was not possible to send. Check your connection and try again.",
    errors: {
      name: "Enter your full name.",
      email: "Enter a valid email address.",
      phone: "Enter a contact telephone number.",
      company: "Enter the company or the business.",
      sector: "Choose the sector.",
      operationSize: "Choose the size of the business.",
      priority: "Choose the current priority.",
    },
  },

  footer: {
    socialHeader: "Social",
    // Nomes de rede social sao marcas registadas: ficam iguais nos cinco
    // idiomas, tal como o endereco do perfil.
    socials: [
      { label: "Instagram", href: "https://www.instagram.com/safegroup_/" },
      { label: "LinkedIn", href: null },
    ],
    navHeader: "Navigation",
    navLinks: [
      { path: "/solucoes", label: "Solutions" },
      { path: "/metodo", label: "Method" },
      { path: "/cases", label: "Cases" },
      { path: "/sobre", label: "About" },
      { path: "/contacto", label: "Contact" },
    ],
    copyright: "Safe Group. All rights reserved.",
    backToTop: "Back to top",
  },
};
