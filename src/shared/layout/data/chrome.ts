import { localeContent } from "@/shared/i18n/content";
import { siteChromeEnGB } from "./chrome.en-GB";
import { siteChromeEnUS } from "./chrome.en-US";
import { siteChromeEs } from "./chrome.es";
import { siteChromePtBR } from "./chrome.pt-BR";
import { siteChromePtPT } from "./chrome.pt-PT";

export const getSiteChrome = localeContent({
  "pt-PT": siteChromePtPT,
  "pt-BR": siteChromePtBR,
  "en-GB": siteChromeEnGB,
  "en-US": siteChromeEnUS,
  es: siteChromeEs,
});
