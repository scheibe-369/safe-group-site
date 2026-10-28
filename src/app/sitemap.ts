import type { MetadataRoute } from "next";
import { caseStudies } from "@/modules/cases/data/cases";
// Imports por caminho profundo, e nao pelo barrel, para o grafo do sitemap nao
// arrastar os componentes dos modulos. O mesmo criterio das linhas a volta.
import { absoluteUrl, isIndexable } from "@/modules/seo/data/site";
import { solutionSlugs } from "@/modules/solutions/data/solutions";
import { defaultLocale, locales, type Locale } from "@/shared/i18n/locales";
import { getPathname } from "@/shared/i18n/navigation";
import type { AppPathname } from "@/shared/i18n/routing";

type Entry = { href: AppPathname; params?: Record<string, string> };

/**
 * Cada pagina entra uma vez por idioma, com o endereco ja traduzido, e leva no
 * `alternates.languages` as outras quatro versoes mais o `x-default`, que
 * aponta para a lingua de origem. Sem isto, os motores de busca tratariam as
 * cinco versoes como paginas concorrentes em vez de traducoes da mesma.
 *
 * `/solucoes`, `/metodo`, `/sobre` e `/contacto` ficam de fora: sao
 * redirecionamentos permanentes para ancoras da Home, nao paginas.
 *
 * Sem `lastModified`, `changeFrequency` nem `priority`. A data era a hora do
 * build, que muda a cada deploy sem a pagina mudar, e o Google ignora os
 * outros dois. Fora da producao o sitemap sai vazio, porque o preview nao e
 * para indexar.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  if (!isIndexable) return [];

  // Cases de demonstracao nao sao submetidos aos motores de busca.
  const published = caseStudies.filter((item) => !item.isDemo);

  const entries: Entry[] = [
    { href: "/" },
    { href: "/cases" },
    ...solutionSlugs.map((slug) => ({ href: "/solucoes/[slug]" as const, params: { slug } })),
    ...published.map(({ slug }) => ({ href: "/cases/[slug]" as const, params: { slug } })),
  ];

  const url = (entry: Entry, locale: Locale) =>
    absoluteUrl(getPathname({ href: (entry.params ? { pathname: entry.href, params: entry.params } : entry.href) as never, locale }));

  return entries.flatMap((entry) => {
    const languages = Object.fromEntries(locales.map((locale) => [locale, url(entry, locale)]));
    return locales.map((locale) => ({
      url: url(entry, locale),
      alternates: { languages: { ...languages, "x-default": url(entry, defaultLocale) } },
    }));
  });
}
