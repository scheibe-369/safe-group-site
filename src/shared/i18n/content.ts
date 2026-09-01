import { defaultLocale, isLocale, type Locale } from "./locales";

/**
 * Fecha o mapa de conteudo de um modulo num leitor por idioma.
 *
 * Cada modulo escreve a copy em `content.<locale>.ts`, um ficheiro por idioma,
 * e junta-os aqui. `Record<Locale, T>` obriga o TypeScript a falhar quando um
 * idioma novo entra e um modulo fica por traduzir, que e a rede de seguranca
 * que evita uma pagina meia traduzida em producao.
 *
 * Aceita `string` porque `getLocale()` do next-intl devolve o idioma sem o tipo
 * estreito; um valor desconhecido cai na lingua de origem em vez de rebentar.
 */
export function localeContent<T>(byLocale: Record<Locale, T>) {
  return (locale: Locale | string): T => byLocale[isLocale(locale) ? locale : defaultLocale];
}
