import { SectionHeading } from "@/shared/ui/SectionHeading";

const faqs = [
  ["A Safe é uma agência de marketing?", "Não. Marketing pode ser uma das frentes da intervenção, mas a Safe parte do diagnóstico da operação e combina as disciplinas necessárias para resolver o ponto prioritário."],
  ["Em que setores a Safe atua?", "A Safe trabalha com operações high ticket e reúne experiência nos setores automóvel, financeiro e de software/SaaS. O diagnóstico e a estrutura adaptam-se ao modelo de negócio."],
  ["A Safe é uma software house?", "Não. Desenvolvimento de software, SaaS e integrações podem fazer parte da intervenção quando a tecnologia é necessária para resolver o bloqueio ou criar uma nova alavanca."],
  ["Qual é o papel da IA?", "A IA é uma ferramenta dentro da estrutura. É aplicada quando melhora velocidade, qualidade, eficiência ou capacidade de decisão, nunca como produto isolado."],
  ["Como é definida a prioridade?", "A Safe analisa a operação de forma 360 e identifica o ponto com maior potencial de crescimento, lucro ou eficiência. A intervenção começa por essa alavanca."],
];

export function FaqSection() {
  return (
    <section className="safe-section bg-[#080808]">
      <div className="safe-container grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
        <SectionHeading kicker="Perguntas frequentes" title="Clareza antes da intervenção." />
        <div className="border-t border-white/15">
          {faqs.map(([question, answer]) => (
            <details key={question} className="group border-b border-white/15 py-1">
              <summary className="flex min-h-20 cursor-pointer list-none items-center justify-between gap-6 text-lg font-medium text-white">
                {question}<span className="text-2xl font-light text-[var(--safe-red)] transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="max-w-2xl pb-7 pr-10 text-sm leading-7 text-white/55">{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
