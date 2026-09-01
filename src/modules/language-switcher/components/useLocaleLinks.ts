"use client";

import { useParams } from "next/navigation";
import { useLocale } from "next-intl";
import { localeLabels, localeShortLabels, locales, type Locale } from "@/shared/i18n/locales";
import { getPathname, usePathname } from "@/shared/i18n/navigation";

export type LocaleLink = {
  locale: Locale;
  href: string;
  label: string;
  short: string;
  active: boolean;
};

/**
 * A mesma pagina nos cinco idiomas.
 *
 * `usePathname` devolve o caminho interno (`/cases/[slug]`), nao o endereco
 * visivel, e o `getPathname` volta a compo-lo no idioma de destino com a
 * palavra e o prefixo certos. Por isso quem esta em `/en-us/solutions` cai em
 * `/es/soluciones`, e nao na raiz do outro idioma.
 */
export function useLocaleLinks(): LocaleLink[] {
  const active = useLocale();
  const pathname = usePathname();
  const params = useParams();

  return locales.map((locale) => ({
    locale,
    // O `params` da rota actual e reaproveitado tal e qual: os slugs de case e
    // de solucao nao sao traduzidos.
    href: getPathname({ href: { pathname, params } as never, locale }),
    label: localeLabels[locale],
    short: localeShortLabels[locale],
    active: locale === active,
  }));
}

/**
 * Grava a escolha por um ano. E este cookie que o middleware consulta antes de
 * redirecionar por pais: uma escolha feita a mao vale mais do que o IP, senao
 * um portugues em viagem nunca conseguia ficar em portugues.
 */
export function rememberLocale(locale: Locale) {
  document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=31536000; samesite=lax`;
}
