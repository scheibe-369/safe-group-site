import { getLocale } from "next-intl/server";
import { ButtonLink } from "@/shared/ui/ButtonLink";
import { SectionHeading } from "@/shared/ui/SectionHeading";
import { getCaseStudies } from "@/modules/cases/data/cases";
import { getCasesContent } from "@/modules/cases/data/content";
import { getCasesPaths } from "@/modules/cases/data/paths";
import { CasesCarousel } from "@/modules/cases/components/carousel/CasesCarousel";
import type { Locale } from "@/shared/i18n/locales";
import { getPathname } from "@/shared/i18n/navigation";
import { getSolutions } from "../data/solutions";
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
 *
 * A copy e os endereços são resolvidos aqui, uma vez, e descem por props: três
 * das subsecções são de cliente e não podem importar o mapa dos cinco idiomas.
 */
export async function SolutionDetail({ item }: { item: Solution }) {
  const locale = (await getLocale()) as Locale;
  const content = getSolutions(locale);
  const { detail } = content;
  const home = getPathname({ href: "/", locale });
  const diagnosticHref = `${home}#diagnostico`;
  // O carrossel e do modulo dos cases: os enderecos e a copy do widget saem de
  // la, so o cabecalho a volta e que pertence a esta pagina.
  const casesPaths = getCasesPaths(locale);

  return (
    <article>
      <SolutionHero
        item={item}
        kicker={content.kicker}
        action={detail.diagnosticAction}
        actionHref={diagnosticHref}
      />
      <SolutionIntro item={item} action={detail.diagnosticAction} actionHref={diagnosticHref} />
      <SolutionBand />
      <SolutionOfferings
        items={item.offerings}
        idPrefix={item.slug}
        kicker={detail.offeringsKicker}
        title={detail.offeringsTitle.replace("{solution}", item.name)}
      />
      <SolutionFigures items={item.figures ?? []} />
      <SolutionStatement statement={item.statement} overline={detail.statementOverline} />

      {/* Decalque deliberado do bloco de `cases/components/CasesRail.tsx`, com
          outro titulo. O `overflow-x-clip` e requisito do carrossel, que sangra
          em 100vw para fora do `.safe-container`. O titulo e declarativo e nao
          atribui estes cases a esta solucao. */}
      <section className="safe-section overflow-x-clip bg-[var(--safe-black)]">
        <div className="safe-container flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading kicker={detail.casesKicker} title={detail.casesTitle} />
          <ButtonLink href={casesPaths.index} variant="secondary" className="shrink-0">
            {detail.casesAction}
          </ButtonLink>
        </div>
        <div className="safe-container mt-8">
          <CasesCarousel
            items={getCaseStudies(locale)}
            hrefs={casesPaths.detail}
            labels={getCasesContent(locale).carousel}
            label={detail.casesCarouselLabel}
          />
        </div>
      </section>

      <OtherSolutions
        items={content.items.filter((other) => other.slug !== item.slug)}
        kicker={detail.othersKicker}
        title={detail.othersTitle}
        detailHref={(slug) => getPathname({ href: { pathname: "/solucoes/[slug]", params: { slug } }, locale })}
      />
    </article>
  );
}
