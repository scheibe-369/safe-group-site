import { absoluteUrl, brand, organizationId, siteUrl, websiteId } from "../data/site";
import type { JsonLdNode } from "../types";

/**
 * Construtores dos dados estruturados (schema.org) do site.
 *
 * A organizacao e o site levam `@id` fixo, para as paginas internas apontarem
 * para eles (`provider`, `publisher`) em vez de repetirem os dados. Tudo o que
 * entra aqui tem de estar visivel no site: o Google ignora, ou penaliza,
 * marcacao que descreve o que a pagina nao mostra.
 */

const areaServed = brand.areaServed.map((name) => ({ "@type": "Country", name }));

export function organizationNode(description: string): JsonLdNode {
  return {
    "@type": "Organization",
    "@id": organizationId,
    name: brand.name,
    alternateName: brand.alternateName,
    url: siteUrl,
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl(brand.logo),
      width: brand.logoSize,
      height: brand.logoSize,
    },
    image: absoluteUrl(brand.ogImage.url),
    description,
    sameAs: [...brand.sameAs],
    areaServed,
  };
}

export function websiteNode({ locale, homePath }: { locale: string; homePath: string }): JsonLdNode {
  return {
    "@type": "WebSite",
    "@id": websiteId,
    name: brand.name,
    alternateName: brand.alternateName,
    url: absoluteUrl(homePath),
    inLanguage: locale,
    publisher: { "@id": organizationId },
  };
}

export function serviceNode({ name, description, path }: { name: string; description: string; path: string }): JsonLdNode {
  return {
    "@type": "Service",
    "@id": `${absoluteUrl(path)}#service`,
    name,
    description,
    url: absoluteUrl(path),
    provider: { "@id": organizationId },
    areaServed,
  };
}

/** Cada passo e `{ name, path }`; o ultimo e a propria pagina. */
export function breadcrumbNode(steps: readonly { name: string; path: string }[]): JsonLdNode {
  return {
    "@type": "BreadcrumbList",
    itemListElement: steps.map((step, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: step.name,
      item: absoluteUrl(step.path),
    })),
  };
}

/** Junta varios nos num unico documento JSON-LD. */
export function jsonLdGraph(nodes: JsonLdNode[]): JsonLdNode {
  return { "@context": "https://schema.org", "@graph": nodes };
}
