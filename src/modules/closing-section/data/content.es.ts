import type { ClosingSectionCopy } from "../types";

/**
 * Copy es da seccao de fecho. Fecha a Home com o mesmo
 * titulo que ja fechava a pagina, agora com formulario, e sem prometer prazo,
 * custo ou resultado que nao esteja confirmado. Este ficheiro e a fonte de onde
 * os outros quatro idiomas sao traduzidos.
 */
export const closingSectionCopyEs: ClosingSectionCopy = {
  kicker: "Próximo paso",
  titleLine1: "Antes de invertir más,",
  titleAccent: "encuentre",
  titleLine3: "el punto que cambia la operación.",
  descA: "Comparta el contexto de la operación para evaluar dónde existe ",
  descStrong: "mayor potencial de impacto",
  descB: ".",
  benefits: [
    "Lectura de la operación antes de la solución",
    "Una prioridad concreta para tratar",
    "Frentes conectados al mismo objetivo",
    "Responsables y métricas claros",
  ],
  contactHeader: "Información de contacto",
  operationHeader: "Información sobre la empresa",
  submitHint: "Los datos sirven solo para preparar la primera conversación.",

  form: {
    labels: {
      name: "Nombre completo",
      email: "E-mail profesional",
      phone: "Teléfono",
      company: "Empresa u operación",
      sector: "Sector",
      operationSize: "Tamaño de la operación",
      priority: "Prioridad actual",
      message: "Contexto de la operación",
    },
    selectPlaceholder: "Seleccione",
    submit: "Empezar diagnóstico",
    submitting: "Enviando",
    disabled: "Envío disponible en breve",
    disabledNotice:
      "La integración del formulario está en preparación. Los datos introducidos no se enviarán.",
    successTitle: "Solicitud recibida.",
    successDesc:
      "El equipo de Safe se pondrá en contacto para agendar la primera conversación.",
    errorMessage: "No fue posible enviar. Revise la conexión e inténtelo de nuevo.",
    errors: {
      name: "Indique el nombre completo.",
      email: "Indique un e-mail válido.",
      phone: "Indique un teléfono de contacto.",
      company: "Indique la empresa o la operación.",
      sector: "Elija el sector.",
      operationSize: "Elija el tamaño de la operación.",
      priority: "Elija la prioridad actual.",
      message: "El contexto excede el límite de caracteres.",
    },
  },

  footer: {
    socialHeader: "Redes",
    // Nomes de rede social sao marcas registadas: ficam iguais nos cinco
    // idiomas, tal como o endereco do perfil.
    socials: [
      { label: "Instagram", href: "https://www.instagram.com/safegroup_/" },
      { label: "LinkedIn", href: null },
    ],
    navHeader: "Navegación",
    navLinks: [
      { path: "/solucoes", label: "Soluciones" },
      { path: "/metodo", label: "Método" },
      { path: "/cases", label: "Cases" },
      { path: "/sobre", label: "Nosotros" },
      { path: "/contacto", label: "Contacto" },
    ],
    copyright: "Safe Group. Todos los derechos reservados.",
    backToTop: "Volver arriba",
  },
};
