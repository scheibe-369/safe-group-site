import type { Metadata } from "next";
import Image from "next/image";
import { ClosingCta } from "@/modules/home/components/ClosingCta";
import { PageHero } from "@/shared/layout/PageHero";

export const metadata: Metadata = { title: "Sobre", description: "Conheça a visão 360 da Safe Group para crescimento, inteligência comercial e tecnologia em operações high ticket." };

export default function AboutPage() {
  return (
    <>
      <PageHero kicker="Sobre a Safe" title="Uma visão completa para decisões mais precisas." copy="A Safe existe para ligar as partes da operação que normalmente são tratadas em separado." />
      <section className="safe-section bg-[var(--safe-black)]">
        <div className="safe-container grid items-center gap-12 lg:grid-cols-2 lg:gap-24">
          <div><p className="safe-kicker">A tese</p><h2 className="mt-5 text-4xl font-semibold leading-tight sm:text-6xl">Crescimento não começa sempre no marketing.</h2><p className="mt-7 text-lg leading-8 text-white/60">Pode começar na resposta a um lead, no processo comercial, no CRM, num produto digital, na arquitetura de software ou numa decisão de margem. Por isso, a Safe não entra com a mesma prioridade em todas as operações.</p></div>
          <div className="relative aspect-square overflow-hidden rounded-full bg-white"><Image src="/brand/safe-seal.png" alt="Selo Safe Group" fill className="object-cover" sizes="(min-width: 1024px) 42vw, 90vw" /></div>
        </div>
      </section>
      <section className="safe-section border-y border-white/10 bg-[#0a0a0a]"><div className="safe-container grid gap-12 md:grid-cols-3"><div><p className="safe-kicker">01</p><h3 className="mt-5 text-2xl">Visão 360</h3><p className="mt-4 text-sm leading-7 text-white/55">Procura, atendimento, processo, produto, tecnologia, dados e margem são lidos como um sistema.</p></div><div><p className="safe-kicker">02</p><h3 className="mt-5 text-2xl">Prioridade real</h3><p className="mt-4 text-sm leading-7 text-white/55">A intervenção começa onde existe maior potencial de impacto, não onde existe uma ferramenta para vender.</p></div><div><p className="safe-kicker">03</p><h3 className="mt-5 text-2xl">Execução integrada</h3><p className="mt-4 text-sm leading-7 text-white/55">Estratégia, pessoas, processos e tecnologia avançam com responsabilidades e métricas claras.</p></div></div></section>
      <ClosingCta />
    </>
  );
}
