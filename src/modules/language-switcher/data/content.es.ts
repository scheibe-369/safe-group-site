import type { LanguageSwitcherContent } from "../types";

/**
 * Copy do seletor de idioma em es. Os nomes dos idiomas
 * nao vivem aqui: estao em `@/shared/i18n/locales`, cada um escrito na propria
 * lingua, porque quem procura a versao inglesa procura "English", nao "Ingles".
 */
export const languageSwitcherEs: LanguageSwitcherContent = {
  heading: "Idioma",
  switchTo: "Ver el sitio en",
};
