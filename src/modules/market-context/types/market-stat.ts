export type MarketStat = {
  id: "gartner" | "mckinsey" | "ibm";
  highlight: string;
  statText: string;
  detail: string;
  source: string;
};

export type MarketContextContent = {
  kicker: string;
  /** Titulo em tres partes. A do meio recebe o gradiente prateado. */
  titleA: string;
  titleB: string;
  titleC: string;
  copy: string;
  /** Sai antes do nome da consultora, no rodape de cada cartao. */
  sourceLabel: string;
  stats: readonly MarketStat[];
  /** Rotulos de acessibilidade do carrossel de telemovel. */
  carousel: {
    previous: string;
    next: string;
    /** `{n}` e substituido pelo numero do cartao. */
    goToCard: string;
  };
};
