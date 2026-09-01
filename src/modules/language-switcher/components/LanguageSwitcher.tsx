"use client";

import { useParams } from "next/navigation";
import { useLocale } from "next-intl";
import Link from "next/link";
import { localeLabels, localeShortLabels, locales, type Locale } from "@/shared/i18n/locales";
import { getPathname, usePathname } from "@/shared/i18n/navigation";
import { getLanguageSwitcherContent } from "../data/content";

/**
 * Troca de idioma sem sair da pagina.
 *
 * `usePathname` devolve o caminho interno (`/cases/[slug]`), nao o endereco
 * visivel, e o `getPathname` volta a compo-lo no idioma de destino com a
 * palavra e o prefixo certos. Por isso quem esta em `/en-us/solutions` cai em
 * `/es/soluciones`, e nao na raiz do outro idioma.
 *
 * Sao ancoras verdadeiras, uma por idioma, e nao um menu conduzido por
 * JavaScript: o motor de busca segue-as, e o teclado e o botao do meio do rato
 * funcionam como em qualquer ligacao.
 */
export function LanguageSwitcher() {
  const active = useLocale();
  const pathname = usePathname();
  const params = useParams();
  const content = getLanguageSwitcherContent(active);

  return (
    <div className="flex items-center gap-[1.25em] overflow-hidden">
      <p className="safe-kicker text-black/45">{content.heading}</p>
      <ul className="-m-2 flex items-center gap-[1.25em] p-2 text-[0.75em]">
        {locales.map((locale) => {
          const current = locale === active;
          return (
            <li key={locale} className="site-nav__social">
              {current ? (
                <span aria-current="true" className="inline-flex min-h-11 items-center font-semibold text-black lg:min-h-0">
                  {localeShortLabels[locale]}
                </span>
              ) : (
                <Link
                  // O `params` da rota actual e reaproveitado tal e qual: os
                  // slugs de case e de solucao nao sao traduzidos.
                  href={getPathname({ href: { pathname, params } as never, locale })}
                  hrefLang={locale}
                  aria-label={`${content.switchTo} ${localeLabels[locale]}`}
                  className="inline-flex min-h-11 items-center text-black/55 transition-colors hover:text-black lg:min-h-0"
                >
                  {localeShortLabels[locale]}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export type { Locale };
