import { SectionHeading } from "@/shared/ui/SectionHeading";

const disciplines = ["Marketing", "Inteligência comercial", "Tecnologia", "Dados", "IA", "Operação"];

export function PositioningSection() {
  return (
    <section id="sobre" className="safe-section scroll-mt-28 relative overflow-hidden bg-[var(--safe-black)]">
      <div className="safe-container">
        <div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr] lg:gap-20">
          <SectionHeading kicker="O ponto de partida" title={<>Não começamos por serviços. <span className="text-white/35">Começamos pelo bloqueio.</span></>} />
          <div className="self-end">
            <p className="text-xl leading-9 text-white/72 sm:text-2xl sm:leading-10">Lemos procura, vendas, processo, dados, tecnologia e margem como partes da mesma operação. Só depois definimos a prioridade.</p>
            <p className="mt-6 leading-7 text-white/48">Marketing, CRM, automação, pré-vendas, IA, software ou novos produtos entram quando servem essa prioridade. A ferramenta nunca determina o diagnóstico.</p>
          </div>
        </div>
        <div className="mt-16 grid grid-cols-2 border-l border-t border-white/10 sm:grid-cols-3 lg:grid-cols-6">
          {disciplines.map((item) => <div key={item} className="flex min-h-28 items-end border-b border-r border-white/10 p-4 text-xs uppercase tracking-[.12em] text-white/55 transition-colors hover:bg-white/[.035] hover:text-white">{item}</div>)}
        </div>
      </div>
    </section>
  );
}
