export type SolutionOffering = {
  title: string;
  body: string;
};

/**
 * A grelha de numeros grandes do layout original so entra quando existirem
 * numeros confirmados. O `AGENTS.md` proibe inventar metricas, por isso o
 * campo e opcional e por omissao nenhuma solucao o preenche.
 */
export type SolutionFigure = {
  label: string;
  value: string;
};

export type Solution = {
  slug: string;
  /** Titulo do painel e `h1` da pagina de detalhe. */
  name: string;
  /** Entrada do menu vertical. A caixa alta e aplicada pelo CSS. */
  menuLabel: string;
  /** Paragrafo do painel, sob o titulo. */
  teaser: string;
  /** Linha unica na coluna direita do hero de detalhe. */
  pitch: string;
  introHeading: string;
  introBody: string;
  offerings: SolutionOffering[];
  /** Frase grande do bloco "por outras palavras", revelada linha a linha. */
  statement: string;
  figures?: SolutionFigure[];
  image: string;
  imageAlt: string;
  metaDescription: string;
};
