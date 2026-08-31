import { ButtonLink } from "@/shared/ui/ButtonLink";
import { SectionHeading } from "@/shared/ui/SectionHeading";
import { caseStudies } from "@/modules/cases/data/cases";
import { CasesCarousel } from "@/modules/cases/components/carousel/CasesCarousel";
import type { Solution } from "../types/solution";
import { OtherSolutions } from "./detail/OtherSolutions";
import { SolutionBand } from "./detail/SolutionBand";
import { SolutionFigures } from "./detail/SolutionFigures";
import { SolutionHero } from "./detail/SolutionHero";
import { SolutionIntro } from "./detail/SolutionIntro";
import { SolutionOfferings } from "./detail/SolutionOfferings";
import { SolutionStatement } from "./detail/SolutionStatement";

/**
 * Ordem das subsecções decalcada do template de serviço do original: hero,
 * introdução, faixa de respiração, acordeão de ofertas, números, frase de
 * fecho, cases e grelha das outras soluções. O rodapé global entra sozinho por
 * `SiteFooterSlot`, que o mostra em qualquer rota que não seja a Home.
 */
export function SolutionDetail({ item }: { item: Solution }) {
  return (
    <article>
      <SolutionHero item={item} />
      <SolutionIntro item={item} />
      <SolutionBand />
      <SolutionOfferings items={item.offerings} idPrefix={item.slug} solutionName={item.name} />
      <SolutionFigures items={item.figures ?? []} />
      <SolutionStatement statement={item.statement} />

      {/* Decalque deliberado do bloco de `cases/components/CasesRail.tsx`, com
          outro titulo. O `overflow-x-clip` e requisito do carrossel, que sangra
          em 100vw para fora do `.safe-container`. O titulo e declarativo e nao
          atribui estes cases a esta solucao. */}
      <section className="safe-section overflow-x-clip bg-[var(--safe-black)]">
        <div className="safe-container flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading kicker="Cases" title="Operações que a Safe já estruturou." />
          <ButtonLink href="/cases" variant="secondary" className="shrink-0">
            Todos os cases
          </ButtonLink>
        </div>
        <div className="safe-container mt-8">
          <CasesCarousel items={caseStudies} label="cases Safe" />
        </div>
      </section>

      <OtherSolutions currentSlug={item.slug} />
    </article>
  );
}
