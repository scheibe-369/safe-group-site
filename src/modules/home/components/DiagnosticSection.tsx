import { ChartNoAxesCombined, PanelsTopLeft, Search, Timer } from "lucide-react";
import { SectionHeading } from "@/shared/ui/SectionHeading";

const scenarios = [
  { icon: Search, title: "Pouca procura", copy: "A operação precisa de campanhas, canais próprios ou uma nova estratégia de geração de oportunidades." },
  { icon: Timer, title: "Leads sem resposta", copy: "Existe procura, mas a velocidade, qualificação ou cadência comercial deixa receita pelo caminho." },
  { icon: ChartNoAxesCombined, title: "Decisão sem visibilidade", copy: "A atividade existe, mas dados fragmentados impedem a equipa de perceber o que protege margem e eficiência." },
  { icon: PanelsTopLeft, title: "Tecnologia que não acompanha", copy: "Processos manuais, sistemas desconectados ou um produto digital limitado travam a capacidade de crescer." },
];

export function DiagnosticSection() {
  return (
    <section className="safe-section safe-grid border-y border-white/10 bg-[#090909]">
      <div className="safe-container">
        <SectionHeading kicker="Diagnóstico 360" title="O mesmo sintoma pode exigir estruturas diferentes." copy="Duas empresas high ticket podem procurar crescimento por razões completamente distintas. A Safe começa por descobrir qual decisão move mais a operação." />
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
