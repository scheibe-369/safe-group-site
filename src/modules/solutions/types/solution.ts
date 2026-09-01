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

/**
 * Toda a copy do modulo: as solucoes e o texto que estava escrito dentro dos
 * componentes. E este o formato que os agentes tradutores escrevem, um ficheiro
 * por idioma. Os enderecos nao vivem aqui: sao montados no idioma actual pelos
 * componentes de seccao, a partir dos `slug`.
 */
export type SolutionsContent = {
  /** Chapeu dos paineis da Home e do hero de cada pagina de detalhe. */
  kicker: string;
  /** Nome acessivel da seccao da Home. */
  sectionLabel: string;
  /** Palavra escrita no cursor que segue o rato sobre os paineis. */
  cursorLabel: string;
  /** Rotulo do unico alvo focavel de cada painel. */
  panelAction: string;
  /** Copy exclusiva da pagina de detalhe de cada solucao. */
  detail: {
    diagnosticAction: string;
    offeringsKicker: string;
    /** `{solution}` e trocado pelo nome da solucao. */
    offeringsTitle: string;
    statementOverline: string;
    casesKicker: string;
    casesTitle: string;
    casesAction: string;
    /** Nome acessivel do carrossel de cases. */
    casesCarouselLabel: string;
    othersKicker: string;
    othersTitle: string;
    /** Titulo da pagina quando o slug pedido nao existe. */
    notFoundTitle: string;
    /** Cartao de partilha. `{solution}` e trocado pelo nome da solucao. */
    ogTitle: string;
  };
  items: Solution[];
};
