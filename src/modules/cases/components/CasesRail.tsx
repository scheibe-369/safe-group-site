import { ButtonLink } from "@/shared/ui/ButtonLink";
import { SectionHeading } from "@/shared/ui/SectionHeading";
import { caseStudies } from "../data/cases";
import { CasesCarousel } from "./carousel/CasesCarousel";
import { CasesDemoNotice } from "./CasesDemoNotice";
import { CasesEmptyState } from "./CasesEmptyState";

/**
 * Bloco de cases da home.
 *
 * O overflow-x: clip e requisito do carrossel: o trilho sangra em 100vw para
 * fora do .safe-container para os slides correrem ate a borda direita do ecra.
 */
export function CasesRail() {
  return (
    <section id="cases" className="safe-section scroll-mt-28 overflow-x-clip bg-[var(--safe-black)]">
      <div className="safe-container flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading
          kicker="Cases"
          title="A intervenção só conta quando o resultado pode ser explicado."
        />
        <ButtonLink href="/cases" variant="secondary" className="shrink-0">
          Explorar cases
        </ButtonLink>
      </div>

      <CasesDemoNotice className="safe-container mt-10" />

      <div className="safe-container mt-8">
        {caseStudies.length ? (
          <CasesCarousel items={caseStudies} label="cases Safe" />
        ) : (
          <CasesEmptyState compact />
        )}
      </div>
    </section>
  );
}
