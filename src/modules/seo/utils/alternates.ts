import { defaultLocale, locales, type Locale } from "@/shared/i18n/locales";
import { getPathname } from "@/shared/i18n/navigation";

type Href = Parameters<typeof getPathname>[0]["href"];

/**
 * `canonical` e `hreflang` de uma pagina: a versao do idioma pedido, as cinco
 * traducoes e o `x-default`, que aponta para a lingua de origem, a unica sem
 * prefixo no endereco.
 */
export function alternatesFor(href: Href, locale: Locale) {
  const languages = Object.fromEntries(locales.map((other) => [other, getPathname({ href, locale: other })]));
  return {
    canonical: getPathname({ href, locale }),
    languages: { ...languages, "x-default": getPathname({ href, locale: defaultLocale }) },
  };
}
