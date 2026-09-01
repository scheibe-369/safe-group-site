import type { StatementCopy } from "../types";

/**
 * Copy es da seccao de afirmacao. Extraida tal e qual do
 * site da Tyvo (`design-source/image.png`, confirmada no DOM ao vivo em
 * https://tyvo-athostudio.webflow.io), a pedido explicito do utilizador. So o
 * botao troca "TYVO" por "SAFE" e o destino.
 */
export const statementCopyEs: StatementCopy = {
  heading: "Llegó la hora de duplicar su facturación y no los gastos de su empresa",
  paragraph: "Tendrá una estructura completa para transformar todos los aspectos de su negocio y duplicar su ganancia, no sus gastos.",
  cta: {
    label: "Contratar a Safe",
    path: "/contacto",
  },
};
