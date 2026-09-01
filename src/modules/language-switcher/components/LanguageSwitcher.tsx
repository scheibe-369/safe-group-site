"use client";

import { useParams } from "next/navigation";
import { useLocale } from "next-intl";
import Link from "next/link";
import { localeLabels, localeShortLabels, locales } from "@/shared/i18n/locales";
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
 * funcionam como em qualquer ligacao. Com cinco idiomas de duas letras cabem
 * todos numa linha, o que evita a maquinaria de um menu suspenso na barra.
 *
 * `bar` e a versao da barra fixa, clara sobre o escuro do site; `panel` e a do
 * menu aberto, escura sobre o painel branco, com o titulo da coluna.
 */
/**
 * Grava a escolha por um ano. E este cookie que o middleware consulta antes de
 * redirecionar por pais: uma escolha feita a mao vale mais do que o IP, senao
 * um portugues em viagem nunca conseguia ficar em portugues.
 */
function remember(locale: string) {
  document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=31536000; samesite=lax`;
}

export function LanguageSwitcher({ variant = "panel" }: { variant?: "bar" | "panel" }) {
  const active = useLocale();
  const pathname = usePathname();
  const params = useParams();
  const content = getLanguageSwitcherContent(active);
  const bar = variant === "bar";

  const item = bar
    ? "text-white/60 hover:text-[var(--safe-red)]"
    : "text-black/55 hover:text-black";
  const current = bar ? "text-white" : "text-black";

  return (
    <div className={bar ? "flex items-center gap-[0.6em]" : "flex items-center gap-[1.25em] overflow-hidden"}>
      {!bar && <p className="safe-kicker text-black/45">{content.heading}</p>}
      <ul className={`-m-2 flex items-center p-2 ${bar ? "gap-[0.6em] text-[0.75em] tracking-[.12em]" : "gap-[1.25em] text-[0.75em]"}`}>
        {locales.map((locale) => (
          <li key={locale} className={bar ? "" : "site-nav__social"}>
            {locale === active ? (
              <span aria-current="true" className={`inline-flex items-center font-semibold ${current} ${bar ? "" : "min-h-11 lg:min-h-0"}`}>
                {localeShortLabels[locale]}
              </span>
            ) : (
              <Link
                // O `params` da rota actual e reaproveitado tal e qual: os
                // slugs de case e de solucao nao sao traduzidos.
                href={getPathname({ href: { pathname, params } as never, locale })}
                hrefLang={locale}
                onClick={() => remember(locale)}
                aria-label={`${content.switchTo} ${localeLabels[locale]}`}
                className={`inline-flex items-center transition-colors ${item} ${bar ? "" : "min-h-11 lg:min-h-0"}`}
              >
                {localeShortLabels[locale]}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
