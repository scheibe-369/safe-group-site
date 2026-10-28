import { getCaseStudies } from "@/modules/cases/data/cases";
import { getHome } from "@/modules/home/data/content";
import { getSolutions } from "@/modules/solutions/data/solutions";
import { getSiteChrome } from "@/shared/layout/data/chrome";
import { defaultLocale, localeLabels, locales } from "@/shared/i18n/locales";
import { getPathname } from "@/shared/i18n/navigation";
import { absoluteUrl, brand, siteUrl } from "../data/site";

/**
 * Conteudo do `/llms.txt` (proposta em llmstxt.org): um resumo em Markdown do
 * que o site diz, para assistentes de IA lerem sem passar pelo HTML.
 *
 * E montado dos mesmos ficheiros de copy que desenham as paginas, na lingua de
 * origem, para nunca divergir do site. Nao entram promessas, metricas nem dados
 * pessoais, so o que ja esta publicado. Cases de demonstracao ficam de fora,
 * como no sitemap.
 */
export function buildLlmsTxt(): string {
  const locale = defaultLocale;
  const { metadata } = getSiteChrome(locale);
  const { hero } = getHome(locale);
  const solutions = getSolutions(locale);
  const cases = getCaseStudies(locale).filter((item) => !item.isDemo);
  const home = getPathname({ href: "/", locale });

  const lines = [
    `# ${brand.name}`,
    "",
    `> ${metadata.description}`,
    "",
    hero.lead,
    "",
    `- Atividade: ${hero.kicker[0]}.`,
    `- Mercados: ${brand.areaServed.join(" e ")}.`,
    `- Site: ${absoluteUrl(home)}`,
    "",
    "## Soluções",
    "",
    ...solutions.items.map((item) => {
      const path = getPathname({ href: { pathname: "/solucoes/[slug]", params: { slug: item.slug } }, locale });
      return `- [${item.name}](${absoluteUrl(path)}): ${item.metaDescription}`;
    }),
    "",
    "## Cases",
    "",
    `- [Todos os cases](${absoluteUrl(getPathname({ href: "/cases", locale }))})`,
    ...cases.map((item) => {
      const path = getPathname({ href: { pathname: "/cases/[slug]", params: { slug: item.slug } }, locale });
      return `- [${item.client}](${absoluteUrl(path)}): ${item.sector}. ${item.summary}`;
    }),
    "",
    "## Idiomas",
    "",
    ...locales.map((other) => `- [${localeLabels[other]}](${absoluteUrl(getPathname({ href: "/", locale: other }))})`),
    "",
    "## Contacto",
    "",
    `- [${hero.actions.primary.label}](${siteUrl}/#diagnostico): formulário de diagnóstico na Home.`,
    ...brand.sameAs.map((href) => `- [Instagram](${href})`),
    "",
  ];

  return lines.join("\n");
}
