/**
 * Os cinco idiomas do site. `pt-PT` e a lingua de origem: toda a copy e escrita
 * primeiro nela, nos ficheiros `content.pt-PT.ts` de cada modulo, e traduzida a
 * partir dai. Por isso e tambem o `defaultLocale`, o unico sem prefixo no URL,
 * o que preserva os enderecos ja indexados.
 */
export const locales = ["pt-PT", "pt-BR", "en-GB", "en-US", "es"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "pt-PT";

/**
 * Prefixo de URL por idioma. Em minusculas porque o codigo BCP47 (`pt-BR`) e
 * para o atributo `lang`, nao para o endereco. O idioma de origem nao leva
 * prefixo: fica na raiz.
 */
export const localePrefixes = {
  "pt-BR": "/pt-br",
  "en-GB": "/en-gb",
  "en-US": "/en-us",
  es: "/es",
} as const;

/**
 * Nome de cada idioma na propria lingua, para o seletor. Quem procura a versao
 * inglesa procura "English", nao "Ingles".
 */
export const localeLabels: Record<Locale, string> = {
  "pt-PT": "Português (PT)",
  "pt-BR": "Português (BR)",
  "en-GB": "English (UK)",
  "en-US": "English (US)",
  es: "Español",
};

/** Codigo curto mostrado no botao do seletor, quando nao ha espaco para o nome. */
export const localeShortLabels: Record<Locale, string> = {
  "pt-PT": "PT",
  "pt-BR": "BR",
  "en-GB": "UK",
  "en-US": "US",
  es: "ES",
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
