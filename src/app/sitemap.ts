import type { MetadataRoute } from "next";
import { caseStudies } from "@/modules/cases/data/cases";
// Import por caminho profundo, e nao pelo barrel, para o grafo do sitemap nao
// arrastar os componentes do modulo. O mesmo criterio da linha acima.
import { solutionSlugs } from "@/modules/solutions/data/solutions";
import { defaultLocale, locales, type Locale } from "@/shared/i18n/locales";
import { getPathname } from "@/shared/i18n/navigation";
import type { AppPathname } from "@/shared/i18n/routing";

type Entry = { href: AppPathname; params?: Record<string, string>; priority: number };

/**
 * Cada pagina entra uma vez por idioma, com o endereco ja traduzido, e leva no
 * `alternates.languages` as outras quatro versoes mais o `x-default`, que
 * aponta para a lingua de origem. Sem isto, os motores de busca tratariam as
 * cinco versoes como paginas concorrentes em vez de traducoes da mesma.
 *
 * `/solucoes`, `/metodo`, `/sobre` e `/contacto` ficam de fora: sao
 * redirecionamentos permanentes para ancoras da Home, nao paginas.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://safegroup.pt";
  // Cases de demonstracao nao sao submetidos aos motores de busca.
  const published = caseStudies.filter((item) => !item.isDemo);

  const entries: Entry[] = [
    { href: "/", priority: 1 },
    { href: "/cases", priority: .8 },
    ...solutionSlugs.map((slug) => ({ href: "/solucoes/[slug]" as const, params: { slug }, priority: .8 })),
    ...published.map(({ slug }) => ({ href: "/cases/[slug]" as const, params: { slug }, priority: .7 })),
  ];

  const url = (entry: Entry, locale: Locale) =>
    `${base}${getPathname({ href: (entry.params ? { pathname: entry.href, params: entry.params } : entry.href) as never, locale })}`;

  return entries.flatMap((entry) => {
    const languages = Object.fromEntries(locales.map((locale) => [locale, url(entry, locale)]));
    return locales.map((locale) => ({
      url: url(entry, locale),
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: entry.priority,
      alternates: { languages: { ...languages, "x-default": url(entry, defaultLocale) } },
    }));
  });
}
