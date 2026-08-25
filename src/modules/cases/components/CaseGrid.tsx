import { caseStudies } from "../data/cases";
import { CaseCard } from "./CaseCard";
import { CasesEmptyState } from "./CasesEmptyState";

export function CaseGrid() {
  if (!caseStudies.length) return <CasesEmptyState />;
  return <div className="grid gap-8 md:grid-cols-2">{caseStudies.map((item) => <CaseCard key={item.slug} item={item} />)}</div>;
}
