import { AboutSection } from "@/modules/home/components/AboutSection";
import { ClosingCta } from "@/modules/home/components/ClosingCta";
import { DiagnosticSection } from "@/modules/home/components/DiagnosticSection";
import { FaqSection } from "@/modules/home/components/FaqSection";
import { Hero } from "@/modules/home/components/Hero";
import { PositioningSection } from "@/modules/home/components/PositioningSection";
import { CasesRail } from "@/modules/cases/components/CasesRail";
import { MethodSection } from "@/modules/method/components/MethodSection";
import { SolutionsSection } from "@/modules/solutions/components/SolutionsSection";
import { MarketsSection } from "@/modules/markets/components/MarketsSection";

export default function HomePage() {
  return <><Hero /><PositioningSection /><MarketsSection /><DiagnosticSection /><SolutionsSection /><MethodSection /><CasesRail /><AboutSection /><FaqSection /><ClosingCta /></>;
}
