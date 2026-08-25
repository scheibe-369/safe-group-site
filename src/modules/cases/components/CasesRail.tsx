import { ButtonLink } from "@/shared/ui/ButtonLink";
import { SectionHeading } from "@/shared/ui/SectionHeading";
import { caseStudies } from "../data/cases";
import { CaseCard } from "./CaseCard";
import { CasesEmptyState } from "./CasesEmptyState";

export function CasesRail() {
  return (
    <section className="safe-section overflow-hidden bg-[var(--safe-black)]">
      <div className="safe-container flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading kicker="Cases" title="A intervenção só conta quando o resultado pode ser explicado." />
        <ButtonLink href="/cases" variant="secondary" className="shrink-0">Explorar cases</ButtonLink>
      </div>
      <div className="safe-container mt-14">
        {caseStudies.length ? <div className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-6">{caseStudies.map((item) => <CaseCard key={item.slug} item={item} />)}</div> : <CasesEmptyState compact />}
      </div>
    </section>
  );
}
