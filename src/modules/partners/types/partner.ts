export type BrandPath = { d: string; fill?: string };

export type PartnerId =
  | "meta"
  | "mercado-livre"
  | "olx"
  | "whatsapp"
  | "instagram"
  | "openai"
  | "stripe"
  | "asaas"
  | "google-ads"
  | "claude";

/**
 * A ficha de um selo guarda so o que nao muda com o idioma: identificador,
 * arte e cor. O rotulo visivel vive na copy do modulo, indexado pelo `id`.
 */
type PartnerBase = {
  id: PartnerId;
  name: string;
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
  /**
   * Multiplica a altura base do selo. Serve para equilibrar selos com
   * proporcoes muito diferentes: um bloco quase quadrado ou de tres linhas
   * fica visualmente minusculo ao lado de um wordmark comprido com a mesma
   * altura. Ausente equivale a 1.
   */
  scale?: number;
};

export type Partner = VectorPartner | ImagePartner;
