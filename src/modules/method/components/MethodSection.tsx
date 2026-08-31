import { ButtonLink } from "@/shared/ui/ButtonLink";
import { SectionHeading } from "@/shared/ui/SectionHeading";
import { MethodTimeline } from "./MethodTimeline";

export function MethodSection() {
  return (
    <section id="metodo" className="safe-section scroll-mt-28 border-y border-white/10 bg-[#090909]">
      <div className="safe-container">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            kicker="Metodologia Safe"
            title={<>Não começamos por serviços. <span className="text-white/35">Começamos pelo bloqueio.</span></>}
            copy="Lemos procura, operação comercial, dados e tecnologia como partes do mesmo sistema, em operações automóvel, financeiras ou de software, sempre high ticket. Da leitura à otimização, uma sequência evita decisões isoladas e concentra recursos na prioridade que mais muda a operação."
          />
          <ButtonLink href="#diagnostico" variant="secondary" className="shrink-0">Começar diagnóstico</ButtonLink>
        </div>
        <MethodTimeline />
        <p className="mt-10 max-w-2xl text-sm leading-7 text-white/45">A ferramenta entra depois da decisão. Campanhas, CRM, automações, IA e dashboards só criam valor quando estão ligados a um problema claro, a um responsável e a uma métrica de operação.</p>
      </div>
    </section>
  );
}
