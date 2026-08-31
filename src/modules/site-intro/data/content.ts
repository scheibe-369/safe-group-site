/**
 * Copy da cortina de entrada. Decorativa: a cortina e `aria-hidden`.
 *
 * `tag` e a linha que a barra branca vai revelando da esquerda para a direita.
 * Escreve-se em caixa baixa e sobe a versal no CSS, como na referencia.
 * `steps` sao as quatro leituras do contador: nao ha contagem continua, o
 * numero salta entre estas quatro e cada salto e uma volta do rolo.
 */
export const introContent = {
  tag: "//a carregar safe group...",
  steps: ["00", "23", "65", "100"],
} as const;
