import type { StatementCopy } from "../types";

/**
 * Copy pt-BR da seccao de afirmacao, traduzida da baseline pt-PT. Extraida tal
 * e qual do site da Tyvo (`design-source/image.png`, confirmada no DOM ao vivo
 * em https://tyvo-athostudio.webflow.io), a pedido explicito do utilizador. So
 * o botao troca "TYVO" por "SAFE" e o destino.
 */
export const statementCopyPtBR: StatementCopy = {
  heading: "Chegou a hora de dobrar o seu faturamento e não os custos da sua empresa",
  paragraph: "Você terá uma estrutura completa para transformar todos os aspectos do seu negócio e dobrar seu lucro, não os seus custos.",
  cta: {
    label: "Contratar a Safe",
    path: "/contacto",
  },
};
