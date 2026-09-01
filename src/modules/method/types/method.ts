export type MethodStep = { number: string; title: string; description: string };

/**
 * Copy da seccao do metodo: o cabecalho, o rotulo do botao, a nota de fecho e
 * os cinco passos da linha do tempo. E este o formato que os agentes tradutores
 * escrevem, um ficheiro por idioma. O `number` de cada passo nao e copy, e a
 * numeracao da sequencia, igual nos cinco idiomas.
 */
export type MethodContent = {
  kicker: string;
  /** Primeira parte do titulo, a cheio. */
  titleLead: string;
  /** Segunda parte do titulo, esbatida. */
  titleAccent: string;
  copy: string;
  action: string;
  /** Paragrafo sob a linha do tempo. */
  note: string;
  steps: MethodStep[];
};
