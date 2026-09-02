import type { StatementCopy } from "../types";

/**
 * Copy en-US da seccao de afirmacao. Extraida tal e qual do
 * site da Tyvo (`design-source/image.png`, confirmada no DOM ao vivo em
 * https://tyvo-athostudio.webflow.io), a pedido explicito do utilizador. So o
 * botao troca "TYVO" por "SAFE" e o destino.
 */
export const statementCopyEnUS: StatementCopy = {
  heading: "MORE TECHNOLOGY DOES NOT FIX A BUSINESS WITHOUT PROCESS.",
  paragraph: "Before adding AI, automation or more staff, Safe identifies where the business is losing time, information, margin or sales capacity. From there, it designs the intervention that generates real impact.",
  cta: {
    label: "Hire Safe",
    path: "/contacto",
  },
};
