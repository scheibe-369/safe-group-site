import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseDetail } from "@/modules/cases/components/CaseDetail";
import { caseSlugs, getCaseStudies } from "@/modules/cases/data/cases";
import { getCasesContent } from "@/modules/cases/data/content";
import { type Locale, locales } from "@/shared/i18n/locales";
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
  const href = { pathname: "/cases/[slug]", params: { slug } } as const;
  return {
    title: item.client,
    description: item.summary,
    alternates: {
      canonical: getPathname({ href, locale }),
      languages: Object.fromEntries(locales.map((other) => [other, getPathname({ href, locale: other })])),
    },
    ...robots,
  };
}

export default async function CasePage({ params }: Props) {
  const { locale, slug } = await params;
  const item = getCaseStudies(locale).find((entry) => entry.slug === slug);
  if (!item) notFound();
  return <CaseDetail item={item} />;
}
