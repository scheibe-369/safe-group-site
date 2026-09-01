import { hasLocale } from "next-intl";
import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

/**
 * Configuracao por pedido do next-intl. So resolve o idioma: a copy nao vive em
 * catalogos globais de mensagens, vive nos ficheiros `content.<locale>.ts` de
 * cada modulo, que e o que a regra `modular-arch` do projecto exige. Daqui sai
 * apenas o `locale`, que os modulos usam para escolher o seu proprio conteudo.
 */
export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested) ? requested : routing.defaultLocale;
  // O catalogo vazio e deliberado: nao usamos `useTranslations`, mas o provider
  // do next-intl recusa arrancar sem `messages` definidas.
  return { locale, messages: {} };
});
