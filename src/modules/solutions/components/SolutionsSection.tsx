import { ButtonLink } from "@/shared/ui/ButtonLink";
import { SectionHeading } from "@/shared/ui/SectionHeading";
import { SolutionsGrid } from "./SolutionsGrid";

export function SolutionsSection() {
  return (
    <section className="safe-section scroll-mt-28 bg-[var(--safe-black)]" id="solucoes">
      <div className="safe-container">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading kicker="Frentes de execução" title={<>Cada frente existe para <span className="text-white/35">mover uma prioridade.</span></>} copy="Não há pacotes fechados. Há uma estrutura desenhada para tratar a decisão que mais pode mudar a operação." />
          <ButtonLink href="#diagnostico" variant="secondary" className="shrink-0">Começar diagnóstico</ButtonLink>
        </div>
        <div className="mt-14"><SolutionsGrid /></div>
        <p className="mt-10 max-w-2xl text-sm leading-7 text-white/45">Não existe um pacote Safe. Existe uma estrutura desenhada para tratar uma oportunidade concreta, com as frentes certas para o momento da operação.</p>
      </div>
    </section>
  );
}
