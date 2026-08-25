import { SectionHeading } from "@/shared/ui/SectionHeading";

const disciplines = ["Marketing", "Inteligência comercial", "Tecnologia", "Dados", "IA", "Operação"];

export function PositioningSection() {
  return (
    <section className="safe-section relative overflow-hidden bg-[var(--safe-black)]">
      <div className="safe-container">
        <div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr] lg:gap-20">
          <SectionHeading kicker="Mais do que uma agência" title={<>Não vendemos uma disciplina. <span className="text-white/35">Estruturamos a resposta certa.</span></>} />
          <div className="self-end">
            <p className="text-xl leading-9 text-white/72 sm:text-2xl sm:leading-10">A Safe olha para a operação completa, identifica onde está a maior oportunidade de crescimento, lucro ou eficiência e organiza as competências necessárias para capturá-la.</p>
            <p className="mt-6 leading-7 text-white/48">Tráfego, CRM, automação, pré-vendas, IA, software ou novos produtos podem fazer parte da entrega. Nenhum deles define, sozinho, o nosso trabalho.</p>
          </div>
        </div>
        <div className="mt-16 grid grid-cols-2 border-l border-t border-white/10 sm:grid-cols-3 lg:grid-cols-6">
          {disciplines.map((item) => <div key={item} className="flex min-h-28 items-end border-b border-r border-white/10 p-4 text-xs uppercase tracking-[.12em] text-white/55 transition-colors hover:bg-white/[.035] hover:text-white">{item}</div>)}
        </div>
      </div>
    </section>
  );
}
