import Image from "next/image";
import { ButtonLink } from "@/shared/ui/ButtonLink";

export function AboutSection() {
  return (
    <section className="safe-section overflow-hidden bg-[#f2f1ef] text-black">
      <div className="safe-container grid items-center gap-10 lg:grid-cols-[.9fr_1.1fr] lg:gap-20">
        <div className="relative mx-auto aspect-square w-full max-w-[480px] overflow-hidden rounded-full border border-black/10 bg-white">
          <Image src="/brand/safe-seal.png" alt="Selo Safe Group, Strategy, Systems, Growth" fill sizes="(min-width: 1024px) 40vw, 90vw" className="object-cover" />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[.18em] text-[var(--safe-red)]">Uma visão, várias alavancas</p>
          <h2 className="mt-5 text-4xl font-semibold leading-[.98] tracking-[-.045em] sm:text-6xl">A operação inteira entra na conversa.</h2>
          <p className="mt-7 max-w-xl text-lg leading-8 text-black/60">A Safe conecta procura, processo comercial, tecnologia, produtos digitais, dados e margem. A prioridade muda conforme o contexto, mas o objetivo mantém-se: transformar oportunidades em crescimento estruturado.</p>
          <ButtonLink href="/sobre" className="mt-9">Conheça a Safe</ButtonLink>
        </div>
      </div>
    </section>
  );
}
