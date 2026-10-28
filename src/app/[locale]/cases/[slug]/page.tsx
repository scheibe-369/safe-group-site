import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseDetail } from "@/modules/cases/components/CaseDetail";
import { caseSlugs, getCaseStudies } from "@/modules/cases/data/cases";
import { getCasesContent } from "@/modules/cases/data/content";
import { JsonLd, alternatesFor, brand, breadcrumbNode, jsonLdGraph, openGraphFor } from "@/modules/seo";
import type { Locale } from "@/shared/i18n/locales";
import { getPathname } from "@/shared/i18n/navigation";

type Props = { params: Promise<{ locale: Locale; slug: string }> };

// O slug identifica o case e nao e traduzido, entao a lista e a mesma nos cinco idiomas.
export function generateStaticParams() { return caseSlugs.map((slug) => ({ slug })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const { detail } = getCasesContent(locale);
  const item = getCaseStudies(locale).find((entry) => entry.slug === slug);
  if (!item) return { title: detail.notFoundTitle };
  // Um case de demonstração fica fora do índice; um case real entra normalmente.
  const robots = item.isDemo ? { robots: { index: false, follow: false } } : {};
  const alternates = alternatesFor({ pathname: "/cases/[slug]", params: { slug } }, locale);
  return {
    title: item.client,
    description: item.summary,
    alternates,
    openGraph: openGraphFor({ locale, title: `${item.client} | ${brand.name}`, description: item.summary, url: alternates.canonical, type: "article" }),
    ...robots,
  };
}

export default async function CasePage({ params }: Props) {
  const { locale, slug } = await params;
  const item = getCaseStudies(locale).find((entry) => entry.slug === slug);
  if (!item) notFound();
  // Um case de demonstracao fica sem dados estruturados, como fica fora do indice.
  const breadcrumb = item.isDemo
    ? null
    : jsonLdGraph([
        breadcrumbNode([
          { name: brand.name, path: getPathname({ href: "/", locale }) },
          { name: getCasesContent(locale).directory.metaTitle, path: getPathname({ href: "/cases", locale }) },
          { name: item.client, path: getPathname({ href: { pathname: "/cases/[slug]", params: { slug } }, locale }) },
        ]),
      ]);
  return (
    <>
      {breadcrumb && <JsonLd data={breadcrumb} />}
      <CaseDetail item={item} />
    </>
  );
}
