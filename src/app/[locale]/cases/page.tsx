import type { Metadata } from "next";
import { CasesDirectory } from "@/modules/cases/components/CasesDirectory";
import { getCaseStudies, hasDemoCases } from "@/modules/cases/data/cases";
import { getCasesContent } from "@/modules/cases/data/content";
import { alternatesFor, brand, openGraphFor } from "@/modules/seo";
import type { Locale } from "@/shared/i18n/locales";
import { PageHero } from "@/shared/layout/PageHero";

type Props = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const { directory } = getCasesContent(locale);
  const items = getCaseStudies(locale);
  const alternates = alternatesFor("/cases", locale);

  return {
    title: directory.metaTitle,
    description: directory.metaDescription,
    alternates,
    openGraph: openGraphFor({ locale, title: `${directory.metaTitle} | ${brand.name}`, description: directory.metaDescription, url: alternates.canonical }),
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
