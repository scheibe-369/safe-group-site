import { localeContent } from "@/shared/i18n/content";
import type { Locale } from "@/shared/i18n/locales";
import { getPathname } from "@/shared/i18n/navigation";
import type { StatementContent } from "../types";
import { statementCopyEnGB } from "./content.en-GB";
import { statementCopyEnUS } from "./content.en-US";
import { statementCopyEs } from "./content.es";
import { statementCopyPtBR } from "./content.pt-BR";
import { statementCopyPtPT } from "./content.pt-PT";

const getCopy = localeContent({
  "pt-PT": statementCopyPtPT,
  "pt-BR": statementCopyPtBR,
  "en-GB": statementCopyEnGB,
  "en-US": statementCopyEnUS,
  es: statementCopyEs,
});

/**
 * Conteudo da seccao de afirmacao no idioma pedido, com o destino do botao ja
 * resolvido. A seccao corre no cliente, por isso quem chama este getter e a
 * pagina, no servidor.
 */
export function getStatementContent(locale: Locale | string): StatementContent {
  const copy = getCopy(locale);
  return {
    ...copy,
    cta: {
      label: copy.cta.label,
      href: getPathname({ href: copy.cta.path, locale: locale as Locale }),
    },
  };
}
