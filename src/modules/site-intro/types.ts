/**
 * Copy da cortina de entrada. Decorativa: a cortina e `aria-hidden`.
 *
 * `tag` e a linha que a barra branca vai revelando da esquerda para a direita.
 * Escreve-se em caixa baixa e sobe a versal no CSS, como na referencia.
 * `steps` sao as quatro leituras do contador: nao ha contagem continua, o
 * numero salta entre estas quatro e cada salto e uma volta do rolo.
 */
export type SiteIntroContent = {
  tag: string;
  /** Algarismos, iguais nos cinco idiomas. Tem de continuar a ser quatro. */
  steps: readonly [string, string, string, string];
};
