import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SolutionDetail, findSolution, getSolutions, solutionSlugs } from "@/modules/solutions";
import { JsonLd, alternatesFor, breadcrumbNode, brand, jsonLdGraph, openGraphFor, serviceNode } from "@/modules/seo";
import type { Locale } from "@/shared/i18n/locales";
import { getPathname } from "@/shared/i18n/navigation";

type Props = { params: Promise<{ locale: Locale; slug: string }> };

// Os slugs sao os mesmos nos cinco idiomas, por isso saem da lingua de origem:
// o `[locale]/layout.tsx` e que multiplica cada um pelos cinco idiomas.
export function generateStaticParams() {
  return solutionSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const { detail } = getSolutions(locale);
  const item = findSolution(slug, locale);
  if (!item) return { title: detail.notFoundTitle };

  const alternates = alternatesFor({ pathname: "/solucoes/[slug]", params: { slug: item.slug } }, locale);

  return {
    title: item.metaTitle,
    description: item.metaDescription,
    alternates,
    // Sem isto, as seis paginas herdavam o cartao de partilha da Home.
    openGraph: openGraphFor({
      locale,
      title: detail.ogTitle.replace("{solution}", item.metaTitle),
      description: item.metaDescription,
      url: alternates.canonical,
      type: "article",
    }),
  };
}

export default async function SolutionPage({ params }: Props) {
  const { locale, slug } = await params;
  const item = findSolution(slug, locale);
  if (!item) notFound();

  const path = getPathname({ href: { pathname: "/solucoes/[slug]", params: { slug: item.slug } }, locale });
  const structuredData = jsonLdGraph([
    serviceNode({ name: item.name, description: item.metaDescription, path }),
    breadcrumbNode([
      { name: brand.name, path: getPathname({ href: "/", locale }) },
      { name: item.name, path },
    ]),
  ]);

  return (
    <>
      <JsonLd data={structuredData} />
      <SolutionDetail item={item} />
    </>
  );
}
