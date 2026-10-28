import type { Metadata } from "next";
import { brand } from "../data/site";

/**
 * Cartao de partilha completo de uma pagina.
 *
 * O Next junta os metadados do layout com os da pagina chave a chave, sem
 * fundir o interior: uma pagina que declara `openGraph` perde a imagem, o nome
 * do site e o idioma herdados da raiz. Por isso todas as paginas passam por
 * aqui, e nao escrevem o `openGraph` a mao.
 */
export function openGraphFor({
  locale,
  title,
  description,
  url,
  type = "website",
}: {
  locale: string;
  title: string;
  description: string;
  url: string;
  type?: "website" | "article";
}): Metadata["openGraph"] {
  return {
    title,
    description,
    url,
    siteName: brand.name,
    locale: locale.replace("-", "_"),
    type,
    images: [{ ...brand.ogImage, alt: brand.name }],
  };
}
