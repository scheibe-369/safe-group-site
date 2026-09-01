import { defaultLocale, type Locale } from "./locales";

/**
 * Pais de origem do visitante para idioma do site.
 *
 * O pais chega no cabecalho `CF-IPCountry`, que a Cloudflare escreve a entrada
 * a partir do IP: e geolocalizacao a serio, nao o `accept-language` do browser.
 * Fora da Cloudflare (por exemplo em `next dev`) o cabecalho nao existe e nao
 * se redireciona ninguem.
 *
 * Quem nao estiver nesta lista fica na lingua de origem. E de proposito: mais
 * vale servir portugues a um pais que nao mapeamos do que atirar alguem para um
 * idioma que nao e o dele.
 */
const COUNTRY_LOCALE: Record<string, Locale> = {
  // Portugues europeu
  PT: "pt-PT", AO: "pt-PT", MZ: "pt-PT", CV: "pt-PT", GW: "pt-PT", ST: "pt-PT", TL: "pt-PT", MO: "pt-PT",

  // Portugues do Brasil
  BR: "pt-BR",

  // Ingles britanico: Reino Unido e os mercados que seguem a norma britanica
  GB: "en-GB", IE: "en-GB", AU: "en-GB", NZ: "en-GB", ZA: "en-GB", IN: "en-GB",
  NG: "en-GB", KE: "en-GB", GH: "en-GB", SG: "en-GB", MY: "en-GB", HK: "en-GB", MT: "en-GB",

  // Ingles americano
  US: "en-US", CA: "en-US", PH: "en-US", PR: "en-US",

  // Espanhol, Espanha e America Latina
  ES: "es", MX: "es", AR: "es", CO: "es", CL: "es", PE: "es", VE: "es", EC: "es",
  GT: "es", CU: "es", BO: "es", DO: "es", HN: "es", PY: "es", SV: "es", NI: "es",
  CR: "es", PA: "es", UY: "es", GQ: "es",
};

/**
 * Rastreadores nunca sao redirecionados. Um motor de busca que indexa a partir
 * dos Estados Unidos veria a Home inglesa no endereco da portuguesa, e passava
 * a indexar o site trocado. Cada idioma tem o seu endereco proprio e o
 * `hreflang` a liga-los: o rastreador chega la sozinho.
 */
const CRAWLER = /bot|crawl|spider|slurp|bingpreview|facebookexternalhit|whatsapp|telegram|embedly|quora|pinterest|vkshare|redditbot|applebot|ia_archiver|lighthouse|headlesschrome/i;

export function isCrawler(userAgent: string | null): boolean {
  return !!userAgent && CRAWLER.test(userAgent);
}

/** Idioma sugerido pelo pais, ou `null` se nao houver motivo para mudar. */
export function localeForCountry(country: string | null): Locale | null {
  if (!country) return null;
  const locale = COUNTRY_LOCALE[country.toUpperCase()];
  return !locale || locale === defaultLocale ? null : locale;
}
