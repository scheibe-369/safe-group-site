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

// As duas seccoes que correm no cliente (`StatementSection` e `ClosingSection`)
// recebem a copy por prop, resolvida aqui: importarem elas o getter arrastava
// os cinco idiomas para o pacote do browser. As restantes resolvem o conteudo
// delas por dentro.
export default async function HomePage() {
  const locale = await getLocale();
  const diagnosticEnabled = whatsappNotificationEnabled();
  return <><HeroTransition><Hero /></HeroTransition><StatementSection content={getStatementContent(locale)} /><PartnersSection /><MarketContextSection /><MethodSection /><SolutionsSection /><CasesRail /><FaqSection /><ClosingSection enabled={diagnosticEnabled} year={new Date().getFullYear()} content={getClosingSectionContent(locale)} options={getDiagnosticOptions(locale)} /></>;
}
