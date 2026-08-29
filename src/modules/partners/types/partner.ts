export type BrandPath = { d: string; fill?: string };

/**
 * `mono` desenha todos os tracados sob um unico fill="currentColor", que muda
 * para `brand` no hover. `multicolor` mantem o fill proprio de cada tracado
 * (so a OLX precisa disto: e a unica marca com 3 cores oficiais distintas).
 */
export type PartnerKind = "mono" | "multicolor";

export type Partner = {
  id: string;
  name: string;
  label: string;
  kind: PartnerKind;
  viewBox: string;
  paths: BrandPath[];
  /** Aplicado ao grupo que envolve os tracados, quando a arte de origem exige. */
  transform?: string;
  brand: string;
  glow?: string;
};
