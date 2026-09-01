import { localeContent } from "@/shared/i18n/content";
import type { Solution } from "../types/solution";
import { solutionsEnGB } from "./solutions.en-GB";
import { solutionsEnUS } from "./solutions.en-US";
import { solutionsEs } from "./solutions.es";
import { solutionsPtBR } from "./solutions.pt-BR";
import { solutionsPtPT } from "./solutions.pt-PT";

export const getSolutions = localeContent({
  "pt-PT": solutionsPtPT,
  "pt-BR": solutionsPtBR,
  "en-GB": solutionsEnGB,
  "en-US": solutionsEnUS,
  es: solutionsEs,
});

export function findSolution(slug: string, locale: string): Solution | undefined {
  return getSolutions(locale).items.find((item) => item.slug === slug);
}

/**
 * Os slugs identificam a solucao e nao sao traduzidos (ver `routing.ts`), por
 * isso saem da lingua de origem. E o que alimenta o `generateStaticParams` da
 * pagina de detalhe e o sitemap, que precisam da lista uma vez so e nao cinco.
 */
export const solutionSlugs = solutionsPtPT.items.map(({ slug }) => slug);
