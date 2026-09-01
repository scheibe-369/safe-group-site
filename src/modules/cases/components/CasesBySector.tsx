import type { CasesCarouselLabels, CasesContent } from "../types/content";
import { fill } from "../utils/fill";
import type { CaseSector } from "../utils/group-by-sector";
import { CasesCarousel } from "./carousel/CasesCarousel";

type CasesBySectorProps = {
  sectors: CaseSector[];
  hrefs: Record<string, string>;
  count: CasesContent["directory"]["sectorCount"];
  /** Molde do nome do conjunto de cada carrossel, com `{sector}`. */
  carouselLabel: string;
  carouselLabels: CasesCarouselLabels;
};

/**
 * Um carrossel por setor, empilhados. Cada bloco tem a sua ancora, alimentada
 * pela CasesSectorNav.
 *
 * O useCasesSwiper liga navegacao e scrollbar por referencia de elemento e nao
 * por seletor de string, portanto as instancias sao independentes: as setas de
 * um bloco nao mexem no trilho do bloco seguinte.
 *
 * O cabecalho de cada bloco e so o nome do setor e a contagem. Nao ha linha de
 * apoio inventada por setor: os setores so se conhecem quando os cases reais
 * entrarem nos dados.
 */
export function CasesBySector({ sectors, hrefs, count, carouselLabel, carouselLabels }: CasesBySectorProps) {
  return (
    <div className="flex flex-col gap-24 lg:gap-28">
      {sectors.map((sector) => (
        <section key={sector.id} id={sector.id} aria-labelledby={`${sector.id}-titulo`}>
          <div className="flex items-baseline justify-between gap-6 border-b border-white/15 pb-5">
            <h2
              id={`${sector.id}-titulo`}
              className="font-display text-2xl font-semibold tracking-[-.03em] sm:text-3xl"
            >
              {sector.name}
            </h2>
            <span className="shrink-0 text-[11px] uppercase tracking-[.14em] text-white/40">
              {String(sector.items.length).padStart(2, "0")}{" "}
              {sector.items.length === 1 ? count.singular : count.plural}
            </span>
          </div>

          <div className="mt-10">
            <CasesCarousel
              items={sector.items}
              hrefs={hrefs}
              labels={carouselLabels}
              metaField="area"
              label={fill(carouselLabel, { sector: sector.name })}
            />
          </div>
        </section>
      ))}
    </div>
  );
}
