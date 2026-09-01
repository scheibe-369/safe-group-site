import type { Metadata } from "next";
import { CasesDirectory } from "@/modules/cases/components/CasesDirectory";
import { getCaseStudies, hasDemoCases } from "@/modules/cases/data/cases";
import { getCasesContent } from "@/modules/cases/data/content";
import { type Locale, locales } from "@/shared/i18n/locales";
import { getPathname } from "@/shared/i18n/navigation";
import { PageHero } from "@/shared/layout/PageHero";

type Props = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const { directory } = getCasesContent(locale);
  const items = getCaseStudies(locale);

  return {
    title: directory.metaTitle,
    description: directory.metaDescription,
    alternates: {
      canonical: getPathname({ href: "/cases", locale }),
      languages: Object.fromEntries(locales.map((other) => [other, getPathname({ href: "/cases", locale: other })])),
    },
    // A rota só fica fora dos motores de busca se todos os cases ainda forem demonstração.
    ...(items.every((item) => item.isDemo) && hasDemoCases(items)
      ? { robots: { index: false, follow: false } }
      : {}),
  };
}

export default async function CasesPage({ params }: Props) {
  const { locale } = await params;
  const { hero } = getCasesContent(locale).directory;

  return (
    <>
      <PageHero
        kicker={hero.kicker}
        title={<>{hero.titleBefore}<span className="safe-shine safe-shine--silver">{hero.titleHighlight}</span>{hero.titleAfter}</>}
        copy={hero.copy}
      />
      <CasesDirectory />
    </>
  );
}
