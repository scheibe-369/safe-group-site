import { ClosingSection } from "@/modules/closing-section";
import { whatsappNotificationEnabled } from "@/modules/diagnostic/api/send-whatsapp-notification";
import { DiagnosticSection } from "@/modules/home/components/DiagnosticSection";
import { FaqSection } from "@/modules/faq/components/FaqSection";
import { Hero } from "@/modules/home/components/Hero";
import { HeroTransition } from "@/modules/hero-transition";
import { StatementSection } from "@/modules/statement-section";
import { PositioningSection } from "@/modules/home/components/PositioningSection";
import { CasesRail } from "@/modules/cases/components/CasesRail";
import { MethodSection } from "@/modules/method/components/MethodSection";
import { SolutionsSection } from "@/modules/solutions/components/SolutionsSection";
import { MarketsSection } from "@/modules/markets/components/MarketsSection";
import { PartnersSection } from "@/modules/partners";

export default function HomePage() {
  const diagnosticEnabled = whatsappNotificationEnabled();
  return <><HeroTransition><Hero /></HeroTransition><StatementSection /><PartnersSection /><PositioningSection /><MarketsSection /><DiagnosticSection /><SolutionsSection /><MethodSection /><CasesRail /><FaqSection /><ClosingSection enabled={diagnosticEnabled} year={new Date().getFullYear()} /></>;
}
