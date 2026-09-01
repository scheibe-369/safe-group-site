import { defineRouting } from "next-intl/routing";
import { defaultLocale, localePrefixes, locales } from "./locales";

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
