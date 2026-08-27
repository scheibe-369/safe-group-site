export type CaseStudy = {
  slug: string;
  client: string;
  sector: string;
  summary: string;
  cover: string;
  area: string;
  deliverables: string[];
  context: string;
  challenge: string;
  intervention: string;
  structure: string;
  results: string[];
  gallery: string[];
  /** Marca um case fictício, usado só para validar o formato. Omitido em cases reais. */
  isDemo?: boolean;
};
