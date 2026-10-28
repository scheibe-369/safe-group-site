import { getLocale } from "next-intl/server";
import { ClosingSection, getClosingSectionContent } from "@/modules/closing-section";
import { whatsappNotificationEnabled } from "@/modules/diagnostic/api/send-whatsapp-notification";
import { getDiagnosticOptions } from "@/modules/diagnostic/data/option-labels";
import { FaqSection } from "@/modules/faq/components/FaqSection";
import { Hero } from "@/modules/home/components/Hero";
import { HeroTransition } from "@/modules/hero-transition";
import { StatementSection, getStatementContent } from "@/modules/statement-section";
import { CasesRail } from "@/modules/cases/components/CasesRail";
import { MethodSection } from "@/modules/method/components/MethodSection";
import { MarketContextSection } from "@/modules/market-context/components/MarketContextSection";
import { PartnersSection } from "@/modules/partners";
import { SolutionsSection } from "@/modules/solutions";
import { JsonLd, jsonLdGraph, organizationNode, websiteNode } from "@/modules/seo";
import { getSiteChrome } from "@/shared/layout/data/chrome";
import { getPathname } from "@/shared/i18n/navigation";
import type { Locale } from "@/shared/i18n/locales";

// As duas seccoes que correm no cliente (`StatementSection` e `ClosingSection`)
// recebem a copy por prop, resolvida aqui: importarem elas o getter arrastava
// os cinco idiomas para o pacote do browser. As restantes resolvem o conteudo
// delas por dentro.
//
// Os dados estruturados da marca (`Organization` e `WebSite`) so vivem na
// Home: e a pagina que representa a empresa. As internas apontam para eles
// pelo `@id`.
export default async function HomePage() {
  const locale = (await getLocale()) as Locale;
  const diagnosticEnabled = whatsappNotificationEnabled();
  const structuredData = jsonLdGraph([
    organizationNode(getSiteChrome(locale).metadata.description),
    websiteNode({ locale, homePath: getPathname({ href: "/", locale }) }),
  ]);
  return <><JsonLd data={structuredData} /><HeroTransition><Hero /></HeroTransition><StatementSection content={getStatementContent(locale)} /><PartnersSection /><MarketContextSection /><MethodSection /><SolutionsSection /><CasesRail /><FaqSection /><ClosingSection enabled={diagnosticEnabled} year={new Date().getFullYear()} content={getClosingSectionContent(locale)} options={getDiagnosticOptions(locale)} /></>;
}
