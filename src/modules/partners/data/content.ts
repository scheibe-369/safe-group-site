import { localeContent } from "@/shared/i18n/content";
import { partnersContentEnGB } from "./content.en-GB";
import { partnersContentEnUS } from "./content.en-US";
import { partnersContentEs } from "./content.es";
import { partnersContentPtBR } from "./content.pt-BR";
import { partnersContentPtPT } from "./content.pt-PT";

export const getPartnersContent = localeContent({
  "pt-PT": partnersContentPtPT,
  "pt-BR": partnersContentPtBR,
  "en-GB": partnersContentEnGB,
  "en-US": partnersContentEnUS,
  es: partnersContentEs,
});
