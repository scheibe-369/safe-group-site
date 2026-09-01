import { localeContent } from "@/shared/i18n/content";
import { faqContentEnGB } from "./faq.en-GB";
import { faqContentEnUS } from "./faq.en-US";
import { faqContentEs } from "./faq.es";
import { faqContentPtBR } from "./faq.pt-BR";
import { faqContentPtPT } from "./faq.pt-PT";

export const getFaqContent = localeContent({
  "pt-PT": faqContentPtPT,
  "pt-BR": faqContentPtBR,
  "en-GB": faqContentEnGB,
  "en-US": faqContentEnUS,
  es: faqContentEs,
});
