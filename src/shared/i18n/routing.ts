import { defineRouting } from "next-intl/routing";
import { defaultLocale, localePrefixes, locales, type Locale } from "./locales";

/**
 * Encaminhamento dos cinco idiomas.
 *
 * `pathnames` mapeia o caminho interno (a pasta real em `src/app/[locale]`)
 * para a palavra que cada idioma mostra no URL. A chave da esquerda nunca muda,
 * e a que o codigo usa; so o valor por idioma e traduzido. `/cases` fica
 * "cases" nos cinco, por ser o termo ja usado no mercado, e os slugs de cada
 * case ou solucao nao sao traduzidos: identificam o item, nao o descrevem.
 *
 * `localeDetection: false` por decisao de SEO. A deteccao por `accept-language`
 * serviria conteudo diferente ao mesmo endereco conforme o cabecalho do
 * visitante, incluindo o do rastreador. O idioma escolhe-se no seletor, e a
 * escolha fica no cookie que o next-intl escreve.
 */
export const routing = defineRouting({
  locales,
  defaultLocale,
  localePrefix: { mode: "as-needed", prefixes: localePrefixes },
  localeDetection: false,
  pathnames: {
    "/": "/",
    "/cases": "/cases",
    "/cases/[slug]": "/cases/[slug]",
    "/solucoes": {
      "pt-PT": "/solucoes",
      "pt-BR": "/solucoes",
      "en-GB": "/solutions",
      "en-US": "/solutions",
      es: "/soluciones",
    },
    "/solucoes/[slug]": {
      "pt-PT": "/solucoes/[slug]",
      "pt-BR": "/solucoes/[slug]",
      "en-GB": "/solutions/[slug]",
      "en-US": "/solutions/[slug]",
      es: "/soluciones/[slug]",
    },
    "/metodo": {
      "pt-PT": "/metodo",
      "pt-BR": "/metodo",
      "en-GB": "/method",
      "en-US": "/method",
      es: "/metodo",
    },
    "/sobre": {
      "pt-PT": "/sobre",
      "pt-BR": "/sobre",
      "en-GB": "/about",
      "en-US": "/about",
      es: "/sobre-nosotros",
    },
    "/contacto": {
      "pt-PT": "/contacto",
      "pt-BR": "/contato",
      "en-GB": "/contact",
      "en-US": "/contact",
      es: "/contacto",
    },
  },
});

export type AppPathname = keyof typeof routing.pathnames;

/**
 * Converte um caminho sem prefixo (que e sempre o da lingua de origem, porque
 * os valores pt-PT do mapa acima sao iguais as chaves internas) no endereco
 * completo do idioma pedido, prefixo incluido.
 *
 * Serve o redireccionamento por pais no middleware, que corre antes do
 * next-intl e por isso nao pode usar o `getPathname` do `navigation.ts`, que
 * conta com o contexto do pedido ja resolvido. Um caminho que nao esteja no
 * mapa leva so o prefixo, para uma rota nova nunca ficar sem redireccionamento.
 */
export function localizePathname(pathname: string, locale: Locale): string {
  const prefix = locale === defaultLocale ? "" : localePrefixes[locale as keyof typeof localePrefixes];

  for (const [internal, value] of Object.entries(routing.pathnames)) {
    const template = typeof value === "string" ? value : (value as Record<string, string>)[locale];
    const match = pathname.match(new RegExp(`^${internal.replace(/\[[^\]]+\]/g, "([^/]+)")}$`));
    if (!match) continue;

    let index = 1;
    const translated = template.replace(/\[[^\]]+\]/g, () => match[index++]);
    return `${prefix}${translated === "/" ? "" : translated}` || "/";
  }

  return `${prefix}${pathname === "/" ? "" : pathname}` || "/";
}
