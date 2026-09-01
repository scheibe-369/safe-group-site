import { localeContent } from "@/shared/i18n/content";
import { homeEnGB } from "./content.en-GB";
import { homeEnUS } from "./content.en-US";
import { homeEs } from "./content.es";
import { homePtBR } from "./content.pt-BR";
import { homePtPT } from "./content.pt-PT";

export const getHome = localeContent({
  "pt-PT": homePtPT,
  "pt-BR": homePtBR,
  "en-GB": homeEnGB,
  "en-US": homeEnUS,
  es: homeEs,
});
