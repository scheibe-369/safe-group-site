import type { Locale } from "@/shared/i18n/locales";
import { getPathname } from "@/shared/i18n/navigation";
import { caseSlugs } from "./cases";

/**
 * Enderecos do modulo ja resolvidos para um idioma, incluindo o prefixo.
 *
 * Sao montados no servidor porque o carrossel e um client component e so pode
 * receber strings: passar-lhe o `Link` do next-intl arrastaria o encaminhamento
 * dos cinco idiomas para o bundle do browser.
 */
export function getCasesPaths(locale: Locale | string) {
  const index = getPathname({ href: "/cases", locale: locale as Locale });

  const detail: Record<string, string> = Object.fromEntries(
    caseSlugs.map((slug) => [
      slug,
      getPathname({ href: { pathname: "/cases/[slug]", params: { slug } }, locale: locale as Locale }),
    ]),
  );

  return { index, detail };
}
