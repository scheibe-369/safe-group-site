/**
 * Copy da interface do modulo de cases: rotulos, titulos e textos acessiveis
 * que estavam escritos dentro dos componentes. Os cases em si vivem em
 * `data/cases.<locale>.ts`.
 *
 * Os textos com `{chave}` sao moldes preenchidos por `utils/fill.ts`. Ficam
 * assim, e nao partidos em pedacos, para cada idioma poder mudar a ordem das
 * palavras a volta do valor.
 */

/** Duas formas de um contador, para cada idioma ter o plural que lhe serve. */
export type CasesCount = { singular: string; plural: string };

/**
 * Rotulos que atravessam a fronteira do servidor ate ao carrossel, que e um
 * client component: passam por prop para os cinco idiomas nao irem no bundle
 * do browser.
 */
export type CasesCarouselLabels = {
  /** Rotulo revelado no hover, no lugar da meta. */
  hoverLabel: string;
  /** Etiqueta sobre a imagem de um case ficticio. */
  demoTag: string;
  /** Molde `{client}`, alt da imagem de capa. */
  coverAlt: string;
  /** Molde `{client}` e `{meta}`, rotulo acessivel do link do slide. */
  slideAriaLabel: string;
  /** Moldes `{label}`, o nome do conjunto, para as setas. */
  previous: string;
  next: string;
};

export type CasesContent = {
  /** Bloco de cases da Home. */
  rail: {
    kicker: string;
    title: string;
    action: string;
    /** Nome do conjunto, usado nos rotulos das setas. */
    carouselLabel: string;
  };
  /** Aviso mostrado enquanto houver pelo menos um case de demonstracao publicado. */
  demoNotice: string;
  carousel: CasesCarouselLabels;
  /** Rota /cases. */
  directory: {
    metaTitle: string;
    metaDescription: string;
    /** O titulo parte-se em tres porque o pedaco do meio leva o efeito de brilho. */
    hero: {
      kicker: string;
      titleBefore: string;
      titleHighlight: string;
      titleAfter: string;
      copy: string;
    };
    sectorNavAriaLabel: string;
    /** Molde `{sector}`, nome do conjunto do carrossel de cada setor. */
    sectorCarouselLabel: string;
    sectorCount: CasesCount;
    indexTitle: string;
    indexCount: CasesCount;
    demoTag: string;
  };
  /** Rota /cases/[slug]. */
  detail: {
    notFoundTitle: string;
    demoWarning: string;
    /** Molde `{label}`, o credito externo da operacao de origem. */
    credit: string;
    /** Molde `{client}`, alt da imagem de capa. */
    coverAlt: string;
    fields: { client: string; area: string; deliverables: string };
    sections: { context: string; challenge: string; intervention: string; structure: string };
    resultsTitle: string;
    /** Molde `{client}`, rotulo acessivel da galeria. */
    galleryAriaLabel: string;
    /** Moldes `{client}` e `{index}`, alt de cada imagem da galeria. */
    galleryImageAlt: string;
    relatedTitle: string;
    relatedAction: string;
  };
};
