export type FaqItem = {
  question: string;
  answer: string;
};

export type FaqContent = {
  /** Titulo da seccao. Nao leva sobretitulo, ao contrario das outras. */
  title: string;
  items: readonly FaqItem[];
};
