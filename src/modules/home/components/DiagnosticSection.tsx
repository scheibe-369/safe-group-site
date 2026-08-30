import { ChartNoAxesCombined, PanelsTopLeft, Search, Timer } from "lucide-react";
import { SectionHeading } from "@/shared/ui/SectionHeading";

const scenarios = [
  { icon: Search, title: "Procura que não chega", copy: "A operação precisa de canais, mensagem ou oferta capazes de gerar oportunidades com consistência." },
  { icon: Timer, title: "Oportunidades que arrefecem", copy: "A procura existe, mas a resposta, qualificação ou cadência comercial deixa valor pelo caminho." },
  { icon: ChartNoAxesCombined, title: "Decisões sem leitura", copy: "Há atividade, mas a informação fragmentada impede a equipa de perceber o que protege margem e eficiência." },
  { icon: PanelsTopLeft, title: "Capacidade que não escala", copy: "Processos manuais, sistemas desligados ou tecnologia limitada travam a evolução da operação." },
];

export function DiagnosticSection() {
  return (
    <section className="safe-section safe-grid border-y border-white/10 bg-[#090909]">
      <div className="safe-container">
        <SectionHeading
          kicker="Diagnóstico 360"
          title={<>O sintoma é visível. A <span className="safe-shine safe-shine--silver">causa</span> nem sempre.</>}
          copy="O mesmo problema pode nascer na procura, na operação comercial, nos dados ou na tecnologia. O diagnóstico encontra a decisão que mais altera o todo."
        />
        <div className="mt-14 grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2">
          {scenarios.map(({ icon: Icon, title, copy }) => (
            <article key={title} className="group bg-[#0c0c0d] p-7 sm:p-9">
              <Icon className="h-7 w-7 text-[var(--safe-red)]" strokeWidth={1.5} aria-hidden />
              <h3 className="mt-14 text-2xl font-medium text-white">{title}</h3>
              <p className="mt-3 max-w-md text-sm leading-6 text-white/55">{copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
