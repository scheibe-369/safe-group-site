import type { Metadata } from "next";
import { ClosingCta } from "@/modules/home/components/ClosingCta";
import { SolutionsGrid } from "@/modules/solutions/components/SolutionsGrid";
import { PageHero } from "@/shared/layout/PageHero";

export const metadata: Metadata = { title: "Soluções", description: "As frentes que a Safe pode ligar a uma prioridade de crescimento, margem ou eficiência." };

export default function SolutionsPage() {
  return <><PageHero kicker="Soluções" title="A frente só faz sentido quando resolve a prioridade." copy="Procura, estrutura comercial, CRM, IA, dados, software e produtos digitais são meios. O diagnóstico define quando cada um entra." /><section className="safe-section bg-[var(--safe-black)]"><div className="safe-container"><SolutionsGrid /></div></section><section className="safe-section border-y border-white/10 bg-[#0a0a0a]"><div className="safe-container grid gap-10 lg:grid-cols-2"><h2 className="text-4xl font-semibold leading-tight sm:text-6xl">Não existe um pacote Safe.</h2><div><p className="text-xl leading-9 text-white/65">Existe uma estrutura desenhada para tratar uma oportunidade concreta.</p><p className="mt-6 leading-7 text-white/45">As frentes podem avançar isoladamente ou em conjunto. O diagnóstico define a ordem, os responsáveis, a tecnologia e as métricas.</p></div></div></section><ClosingCta /></>;
}
