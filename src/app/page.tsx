import { ClosingSection } from "@/modules/closing-section";
import { whatsappNotificationEnabled } from "@/modules/diagnostic/api/send-whatsapp-notification";
import { FaqSection } from "@/modules/faq/components/FaqSection";
import { Hero } from "@/modules/home/components/Hero";
import { HeroTransition } from "@/modules/hero-transition";
import { StatementSection } from "@/modules/statement-section";
import { CasesRail } from "@/modules/cases/components/CasesRail";
import { MethodSection } from "@/modules/method/components/MethodSection";
import { MarketContextSection } from "@/modules/market-context/components/MarketContextSection";
import { PartnersSection } from "@/modules/partners";

export default function HomePage() {
  const diagnosticEnabled = whatsappNotificationEnabled();
  return <><HeroTransition><Hero /></HeroTransition><StatementSection /><PartnersSection /><MarketContextSection /><MethodSection /><CasesRail /><FaqSection /><ClosingSection enabled={diagnosticEnabled} year={new Date().getFullYear()} /></>;
}
