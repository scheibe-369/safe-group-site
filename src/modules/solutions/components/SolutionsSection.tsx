import { ButtonLink } from "@/shared/ui/ButtonLink";
import { SectionHeading } from "@/shared/ui/SectionHeading";
import { SolutionsGrid } from "./SolutionsGrid";

export function SolutionsSection() {
  return (
    <section className="safe-section bg-[var(--safe-black)]" id="solucoes">
      <div className="safe-container">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading kicker="Frentes de crescimento" title={<>A estrutura adapta-se ao <span className="text-white/35">ponto de alavancagem.</span></>} copy="Não começamos por um pacote. Começamos pela decisão que mais pode mudar a operação." />
          <ButtonLink href="/solucoes" variant="secondary" className="shrink-0">Ver todas as frentes</ButtonLink>
        </div>
        <div className="mt-14"><SolutionsGrid /></div>
      </div>
    </section>
  );
}
