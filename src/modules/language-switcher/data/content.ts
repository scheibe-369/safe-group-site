import { localeContent } from "@/shared/i18n/content";
import { languageSwitcherEnGB } from "./content.en-GB";
import { languageSwitcherEnUS } from "./content.en-US";
import { languageSwitcherEs } from "./content.es";
import { languageSwitcherPtBR } from "./content.pt-BR";
import { languageSwitcherPtPT } from "./content.pt-PT";

export const getLanguageSwitcherContent = localeContent({
  "pt-PT": languageSwitcherPtPT,
  "pt-BR": languageSwitcherPtBR,
  "en-GB": languageSwitcherEnGB,
  "en-US": languageSwitcherEnUS,
  es: languageSwitcherEs,
});
