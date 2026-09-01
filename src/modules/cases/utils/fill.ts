/**
 * Preenche os moldes `{chave}` da copy do modulo.
 *
 * Existe para o texto acessivel (`alt`, `aria-label`) e os rotulos com valores
 * lá dentro ficarem inteiros no ficheiro de idioma, em vez de serem colados
 * em pedaços dentro do JSX: só assim um tradutor pode mudar a ordem das
 * palavras à volta do valor.
 */
export function fill(template: string, values: Record<string, string | number>) {
  return template.replace(/\{(\w+)\}/g, (match, key: string) =>
    key in values ? String(values[key]) : match,
  );
}
