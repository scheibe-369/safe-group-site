import { localeContent } from "@/shared/i18n/content";
import { marketContextContentEnGB } from "./content.en-GB";
import { marketContextContentEnUS } from "./content.en-US";
import { marketContextContentEs } from "./content.es";
import { marketContextContentPtBR } from "./content.pt-BR";
import { marketContextContentPtPT } from "./content.pt-PT";

export const getMarketContextContent = localeContent({
  "pt-PT": marketContextContentPtPT,
  "pt-BR": marketContextContentPtBR,
  "en-GB": marketContextContentEnGB,
  "en-US": marketContextContentEnUS,
  es: marketContextContentEs,
});
