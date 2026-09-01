import type { StatementCopy } from "../types";

/**
 * Copy en-US da seccao de afirmacao. Extraida tal e qual do
 * site da Tyvo (`design-source/image.png`, confirmada no DOM ao vivo em
 * https://tyvo-athostudio.webflow.io), a pedido explicito do utilizador. So o
 * botao troca "TYVO" por "SAFE" e o destino.
 */
export const statementCopyEnUS: StatementCopy = {
  heading: "It is time to double your revenue and not your company's costs",
  paragraph: "You get a complete structure to transform every aspect of your business and double your profit, not your costs.",
  cta: {
    label: "Hire Safe",
    path: "/contacto",
  },
};
