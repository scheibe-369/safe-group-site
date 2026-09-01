import { localeContent } from "@/shared/i18n/content";
import { introContentEnGB } from "./content.en-GB";
import { introContentEnUS } from "./content.en-US";
import { introContentEs } from "./content.es";
import { introContentPtBR } from "./content.pt-BR";
import { introContentPtPT } from "./content.pt-PT";

export const getIntroContent = localeContent({
  "pt-PT": introContentPtPT,
  "pt-BR": introContentPtBR,
  "en-GB": introContentEnGB,
  "en-US": introContentEnUS,
  es: introContentEs,
});
