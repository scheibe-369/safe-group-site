import { localeContent } from "@/shared/i18n/content";
import { socialDockCopyEnGB } from "./dock-copy.en-GB";
import { socialDockCopyEnUS } from "./dock-copy.en-US";
import { socialDockCopyEs } from "./dock-copy.es";
import { socialDockCopyPtBR } from "./dock-copy.pt-BR";
import { socialDockCopyPtPT } from "./dock-copy.pt-PT";

export const getSocialDockCopy = localeContent({
  "pt-PT": socialDockCopyPtPT,
  "pt-BR": socialDockCopyPtBR,
  "en-GB": socialDockCopyEnGB,
  "en-US": socialDockCopyEnUS,
  es: socialDockCopyEs,
});
