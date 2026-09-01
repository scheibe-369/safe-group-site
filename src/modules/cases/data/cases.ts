import { localeContent } from "@/shared/i18n/content";
import type { CaseStudy } from "../types/case-study";
import { caseStudiesEnGB } from "./cases.en-GB";
import { caseStudiesEnUS } from "./cases.en-US";
import { caseStudiesEs } from "./cases.es";
import { caseStudiesPtBR } from "./cases.pt-BR";
import { caseStudiesPtPT } from "./cases.pt-PT";

export const getCaseStudies = localeContent({
  "pt-PT": caseStudiesPtPT,
  "pt-BR": caseStudiesPtBR,
  "en-GB": caseStudiesEnGB,
  "en-US": caseStudiesEnUS,
  es: caseStudiesEs,
});

/**
 * Cada case marca `isDemo: true` se for fictício. Um case sem essa marca é
 * real, com evidência aprovada, e entra no sitemap e no índice dos motores de
 * busca individualmente.
 *
 * `hasDemoCases` alimenta o aviso mostrado enquanto existir pelo menos um case
 * fictício no array. Some os `isDemo` de um case específico para o publicar
 * como real, sem afetar os restantes.
 */
export const hasDemoCases = (items: CaseStudy[]) => items.some((item) => item.isDemo);

/**
 * O slug identifica o case, nao o descreve: e igual nos cinco idiomas, por isso
 * sai da baseline e serve o `generateStaticParams` sem precisar do idioma.
 */
export const caseSlugs = caseStudiesPtPT.map((item) => item.slug);

/**
 * Compatibilidade temporaria para quem ainda le a lista sem indicar o idioma
 * (`site-nav/data/nav-content.ts` e `app/sitemap.ts`). Serve a baseline pt-PT.
 * Sai assim que esses dois ficheiros passarem a `getCaseStudies(locale)`.
 */
export const caseStudies = caseStudiesPtPT;
