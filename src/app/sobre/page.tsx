import type { Metadata } from "next";
import Image from "next/image";
import { ClosingCta } from "@/modules/home/components/ClosingCta";
import { PageHero } from "@/shared/layout/PageHero";

export const metadata: Metadata = { title: "Sobre", description: "Conheça a forma como a Safe encontra prioridades e estrutura execução em operações high ticket." };

export default function AboutPage() {
  return (
    <>
      <PageHero kicker="Sobre a Safe" title="Uma decisão melhor começa por uma leitura completa." copy="A Safe liga as partes da operação que costumam ser tratadas em separado, para encontrar a prioridade que realmente move o negócio." />
      <section className="safe-section bg-[var(--safe-black)]">
        <div className="safe-container grid items-center gap-12 lg:grid-cols-2 lg:gap-24">
          <div><p className="safe-kicker">A tese</p><h2 className="mt-5 text-4xl font-semibold leading-tight sm:text-6xl">Crescimento raramente se resolve numa única frente.</h2><p className="mt-7 text-lg leading-8 text-white/60">Pode estar na resposta a uma oportunidade, no processo comercial, no CRM, num produto digital, na arquitectura de software ou numa decisão de margem. É por isso que a Safe não entra com a mesma receita em todas as operações.</p></div>
          <div className="relative aspect-square overflow-hidden rounded-full bg-white"><Image src="/brand/safe-seal.png" alt="Selo Safe Group" fill className="object-cover" sizes="(min-width: 1024px) 42vw, 90vw" /></div>
        </div>
      </section>
      <section className="safe-section border-y border-white/10 bg-[#0a0a0a]"><div className="safe-container grid gap-12 md:grid-cols-3"><div><p className="safe-kicker">01</p><h3 className="mt-5 text-2xl">Leitura completa</h3><p className="mt-4 text-sm leading-7 text-white/55">Procura, atendimento, processo, produto, tecnologia, dados e margem são lidos como um sistema.</p></div><div><p className="safe-kicker">02</p><h3 className="mt-5 text-2xl">Prioridade concreta</h3><p className="mt-4 text-sm leading-7 text-white/55">A intervenção começa onde existe maior potencial de impacto, não onde existe uma ferramenta para vender.</p></div><div><p className="safe-kicker">03</p><h3 className="mt-5 text-2xl">Execução ligada</h3><p className="mt-4 text-sm leading-7 text-white/55">Estratégia, pessoas, processos e tecnologia avançam com responsabilidades e métricas claras.</p></div></div></section>
      <ClosingCta />
    </>
  );
}
