import type { Metadata } from "next";
import { ClosingCta } from "@/modules/home/components/ClosingCta";
import { MethodTimeline } from "@/modules/method/components/MethodTimeline";
import { PageHero } from "@/shared/layout/PageHero";

export const metadata: Metadata = { title: "Método", description: "O método Safe para diagnosticar, priorizar e executar uma decisão de negócio com foco." };

export default function MethodPage() {
  return <><PageHero kicker="Método Safe" title="Da leitura do cenário à execução que faz diferença." copy="Um processo para reduzir decisões isoladas e concentrar recursos onde existe maior potencial de impacto." /><section className="safe-section bg-[var(--safe-black)]"><div className="safe-container"><MethodTimeline /></div></section><section className="safe-section safe-grid border-y border-white/10 bg-[#0a0a0a]"><div className="safe-container grid gap-8 md:grid-cols-2"><h2 className="text-4xl font-semibold leading-tight sm:text-6xl">A ferramenta entra depois da decisão.</h2><p className="self-end text-lg leading-8 text-white/60">Campanhas, CRM, automações, IA e dashboards só criam valor quando estão ligados a um problema claro, a um responsável e a uma métrica de operação.</p></div></section><ClosingCta /></>;
}
