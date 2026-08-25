export type TypographyVariant = {
  /** Identificador usado no atributo data-type do html e no script de build. */
  id: string;
  /** Nome legível, aparece no rodapé das versões de comparação. */
  label: string;
  /** Classes das variáveis CSS geradas pelo next/font. */
  variableClass: string;
};
