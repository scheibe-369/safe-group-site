import { ButtonLink } from "@/shared/ui/ButtonLink";
import { SectionHeading } from "@/shared/ui/SectionHeading";
import { MethodTimeline } from "./MethodTimeline";

export function MethodSection() {
  return (
    <section className="safe-section border-y border-white/10 bg-[#090909]">
      <div className="safe-container">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading kicker="Método Safe" title="Diagnóstico antes da ferramenta. Estrutura antes da escala." copy="Uma sequência clara para decidir onde atuar, construir a resposta e medir a evolução." />
          <ButtonLink href="/metodo" variant="secondary" className="shrink-0">Explorar o método</ButtonLink>
        </div>
        <MethodTimeline />
      </div>
    </section>
  );
}
