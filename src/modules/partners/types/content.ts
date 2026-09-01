import type { PartnerId } from "./partner";

/**
 * Copy da seccao de parceiros.
 *
 * Os rotulos dos selos vivem aqui, e nao em `data/partners.ts`, porque sao o
 * unico texto de leitura da lista: o resto do ficheiro sao identificadores,
 * caminhos de imagem, tracados vetoriais e cores de marca, que nao mudam com o
 * idioma. A chave e o `id` do parceiro, para o rotulo continuar colado ao selo
 * certo mesmo que a lista mude de ordem.
 */
export type PartnersContent = {
  kicker: string;
  title: string;
  labels: Record<PartnerId, string>;
};
