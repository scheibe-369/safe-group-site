import { localeContent } from "@/shared/i18n/content";
import { methodEnGB } from "./steps.en-GB";
import { methodEnUS } from "./steps.en-US";
import { methodEs } from "./steps.es";
import { methodPtBR } from "./steps.pt-BR";
import { methodPtPT } from "./steps.pt-PT";

export const getMethod = localeContent({
  "pt-PT": methodPtPT,
  "pt-BR": methodPtBR,
  "en-GB": methodEnGB,
  "en-US": methodEnUS,
  es: methodEs,
});
