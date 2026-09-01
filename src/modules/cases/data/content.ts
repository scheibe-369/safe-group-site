import { localeContent } from "@/shared/i18n/content";
import { casesContentEnGB } from "./content.en-GB";
import { casesContentEnUS } from "./content.en-US";
import { casesContentEs } from "./content.es";
import { casesContentPtBR } from "./content.pt-BR";
import { casesContentPtPT } from "./content.pt-PT";

export const getCasesContent = localeContent({
  "pt-PT": casesContentPtPT,
  "pt-BR": casesContentPtBR,
  "en-GB": casesContentEnGB,
  "en-US": casesContentEnUS,
  es: casesContentEs,
});
