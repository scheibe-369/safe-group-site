import { SectionHeading } from "@/shared/ui/SectionHeading";

const faqs = [
  ["A Safe é uma agência de marketing?", "Não. Marketing pode entrar na execução, mas a Safe começa pela leitura da operação e reúne apenas as disciplinas necessárias para resolver a prioridade real."],
  ["Em que setores a Safe atua?", "A Safe trabalha com operações high ticket e reúne experiência nos setores automóvel, financeiro e de software/SaaS. O diagnóstico e a estrutura adaptam-se ao modelo de negócio."],
  ["A Safe é uma software house?", "Não. Software, SaaS e integrações podem fazer parte da estrutura quando a tecnologia resolve um bloqueio ou cria capacidade nova para a operação."],
  ["Qual é o papel da IA?", "A IA é uma ferramenta dentro da estrutura. É aplicada quando melhora velocidade, qualidade, eficiência ou capacidade de decisão, nunca como produto isolado."],
  ["Como é definida a prioridade?", "A Safe lê a operação de forma 360 e avalia onde há maior potencial de impacto em crescimento, margem ou eficiência. A intervenção começa por essa decisão."],
  ["O que acontece depois do diagnóstico?", "Recebe uma leitura do ponto prioritário e da estrutura que faria sentido para o tratar. Só depois decide se quer avançar e em que ritmo."],
  ["É preciso avançar com todas as frentes?", "Não. A estrutura pode começar por uma frente ou ligar várias, conforme a prioridade identificada e a capacidade da operação."],
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
