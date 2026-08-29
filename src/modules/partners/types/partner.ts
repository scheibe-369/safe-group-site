export type BrandPath = { d: string; fill?: string };

type PartnerBase = {
  id: string;
  name: string;
  label: string;
  brand: string;
  glow?: string;
};

/**
 * `mono` desenha todos os tracados sob um unico fill="currentColor", que muda
 * para `brand` no hover. `multicolor` mantem o fill proprio de cada tracado
 * (so a OLX precisa disto: e a unica marca com 3 cores oficiais distintas).
 */
export type VectorPartner = PartnerBase & {
  kind: "mono" | "multicolor";
  viewBox: string;
  paths: BrandPath[];
  /** Aplicado ao grupo que envolve os tracados, quando a arte de origem exige. */
  transform?: string;
};

/**
 * Selo oficial pronto (imagem), fornecido pelo proprio parceiro. Substitui o
 * traçado + rótulo separado: o texto já vem dentro da imagem.
 */
export type ImagePartner = PartnerBase & {
  kind: "image";
  src: string;
  width: number;
  height: number;
};

export type Partner = VectorPartner | ImagePartner;
