import type { Metadata } from "next";
import { ClosingCta } from "@/modules/home/components/ClosingCta";
import { SolutionsGrid } from "@/modules/solutions/components/SolutionsGrid";
import { PageHero } from "@/shared/layout/PageHero";

export const metadata: Metadata = { title: "Soluções", description: "Frentes de crescimento, inteligência comercial e tecnologia estruturadas pela Safe Group para operações high ticket." };

export default function SolutionsPage() {
  return <><PageHero kicker="Soluções" title="A frente certa para o bloqueio certo." copy="A Safe combina procura, estrutura comercial, CRM, IA, dados, software e produtos digitais conforme a prioridade da operação." /><section className="safe-section bg-[var(--safe-black)]"><div className="safe-container"><SolutionsGrid /></div></section><section className="safe-section border-y border-white/10 bg-[#0a0a0a]"><div className="safe-container grid gap-10 lg:grid-cols-2"><h2 className="text-4xl font-semibold leading-tight sm:text-6xl">Não existe um pacote Safe.</h2><div><p className="text-xl leading-9 text-white/65">Existe uma estrutura desenhada para uma oportunidade concreta.</p><p className="mt-6 leading-7 text-white/45">As frentes podem avançar isoladamente ou em conjunto. O diagnóstico define a ordem, os responsáveis, a tecnologia e as métricas.</p></div></div></section><ClosingCta /></>;
}
