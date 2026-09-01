import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SolutionDetail, findSolution, getSolutions, solutionSlugs } from "@/modules/solutions";
import { locales, type Locale } from "@/shared/i18n/locales";
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

  const href = { pathname: "/solucoes/[slug]" as const, params: { slug: item.slug } };
  const canonical = getPathname({ href, locale });

  return {
    title: item.name,
    description: item.metaDescription,
    alternates: {
      canonical,
      languages: Object.fromEntries(locales.map((other) => [other, getPathname({ href, locale: other })])),
    },
    // Sem isto, as seis paginas herdavam o cartao de partilha da Home.
    openGraph: {
      title: detail.ogTitle.replace("{solution}", item.name),
      description: item.metaDescription,
      url: canonical,
      type: "article",
    },
  };
}

export default async function SolutionPage({ params }: Props) {
  const { locale, slug } = await params;
  const item = findSolution(slug, locale);
  if (!item) notFound();

  return <SolutionDetail item={item} />;
}
