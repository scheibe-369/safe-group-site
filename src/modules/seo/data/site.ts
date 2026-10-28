/**
 * Endereco publico do site e decisao de indexacao.
 *
 * So o build de producao da Action ("Deploy Cloudflare") define
 * `NEXT_PUBLIC_SITE_URL`, com `https://safegroupia.com`. O preview em
 * `safe.methodgrowthhub.com.br` e o `next dev` correm sem ela, e por isso saem
 * com `noindex`: o preview e uma copia integral da producao e nao pode
 * concorrer com ela nos motores de busca. O `next.config.ts` aplica a mesma
 * regra ao cabecalho `X-Robots-Tag`.
 */
export const isIndexable = Boolean(process.env.NEXT_PUBLIC_SITE_URL);

export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://safegroupia.com").replace(/\/$/, "");

/** Converte um caminho do site (`/cases`) em URL absoluta. */
export function absoluteUrl(path: string): string {
  return path === "/" ? siteUrl : `${siteUrl}${path}`;
}

/**
 * Dados de marca usados nos dados estruturados e no `llms.txt`. So o que ja e
 * publico no proprio site: nome, logo e Instagram. Nada de razao social, CNPJ,
 * morada ou nomes de pessoas (decisao do utilizador, 28/10/2026).
 */
export const brand = {
  name: "Safe Group",
  alternateName: "Safe",
  /** PNG quadrado com fundo escuro: o simbolo tem partes brancas que sumiam num fundo claro. */
  logo: "/brand/safe-logo-square.png",
  logoSize: 512,
  /** Imagem de partilha por omissao, a mesma da Home. */
  ogImage: { url: "/brand/safe-banner.png", width: 1672, height: 941 },
  sameAs: ["https://www.instagram.com/safegroup_/"],
  /** Mercados de atuacao (decisao D2 de 28/10/2026). */
  areaServed: ["Brasil", "Portugal"],
} as const;

export const organizationId = `${siteUrl}/#organization`;
export const websiteId = `${siteUrl}/#website`;
