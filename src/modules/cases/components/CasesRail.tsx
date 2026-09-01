import { getLocale } from "next-intl/server";
import { ButtonLink } from "@/shared/ui/ButtonLink";
import { SectionHeading } from "@/shared/ui/SectionHeading";
import { getCaseStudies } from "../data/cases";
import { getCasesContent } from "../data/content";
import { getCasesPaths } from "../data/paths";
import { CasesCarousel } from "./carousel/CasesCarousel";
import { CasesDemoNotice } from "./CasesDemoNotice";

/**
 * Bloco de cases da home.
 *
 * O overflow-x: clip e requisito do carrossel: o trilho sangra em 100vw para
 * fora do .safe-container para os slides correrem ate a borda direita do ecra.
 */
export async function CasesRail() {
  const locale = await getLocale();
  const content = getCasesContent(locale);
  const paths = getCasesPaths(locale);

  return (
    <section id="cases" className="safe-section scroll-mt-28 overflow-x-clip bg-[var(--safe-black)]">
      <div className="safe-container flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading kicker={content.rail.kicker} title={content.rail.title} />
        <ButtonLink href={paths.index} variant="secondary" className="shrink-0">
          {content.rail.action}
        </ButtonLink>
      </div>

      <CasesDemoNotice className="safe-container mt-10" />

      <div className="safe-container mt-8">
        <CasesCarousel
          items={getCaseStudies(locale)}
          hrefs={paths.detail}
          labels={content.carousel}
          label={content.rail.carouselLabel}
        />
      </div>
    </section>
  );
}
