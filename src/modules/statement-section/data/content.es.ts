import type { StatementCopy } from "../types";

/**
 * Copy es da seccao de afirmacao. Extraida tal e qual do
 * site da Tyvo (`design-source/image.png`, confirmada no DOM ao vivo em
 * https://tyvo-athostudio.webflow.io), a pedido explicito do utilizador. So o
 * botao troca "TYVO" por "SAFE" e o destino.
 */
export const statementCopyEs: StatementCopy = {
  heading: "MÁS TECNOLOGÍA NO CORRIGE UNA OPERACIÓN SIN PROCESO.",
  paragraph: "Antes de añadir IA, automatización o más empleados, Safe identifica dónde la operación pierde tiempo, información, margen o capacidad comercial. A partir de ahí, diseña la intervención que genera impacto real.",
  cta: {
    label: "Contratar a Safe",
    path: "/contacto",
  },
};
