import { localeContent } from "@/shared/i18n/content";
import type { Locale } from "@/shared/i18n/locales";
import { getPathname } from "@/shared/i18n/navigation";
import type { ClosingSectionContent } from "../types";
import { closingSectionCopyEnGB } from "./content.en-GB";
import { closingSectionCopyEnUS } from "./content.en-US";
import { closingSectionCopyEs } from "./content.es";
import { closingSectionCopyPtBR } from "./content.pt-BR";
import { closingSectionCopyPtPT } from "./content.pt-PT";

const getCopy = localeContent({
  "pt-PT": closingSectionCopyPtPT,
  "pt-BR": closingSectionCopyPtBR,
  "en-GB": closingSectionCopyEnGB,
  "en-US": closingSectionCopyEnUS,
  es: closingSectionCopyEs,
});

/**
 * Conteudo da seccao de fecho no idioma pedido.
 *
 * As ligacoes do rodape saem daqui ja com o prefixo do idioma, para o
 * componente (que corre no cliente) continuar a receber uma string e a usar o
 * `Link` normal do Next. E tambem por isso que este getter nunca pode ser
 * importado dentro do `ClosingSection`: arrastaria os cinco idiomas para o
 * pacote do browser. Quem o chama e a pagina, no servidor.
 */
export function getClosingSectionContent(locale: Locale | string): ClosingSectionContent {
  const copy = getCopy(locale);
  return {
    ...copy,
    footer: {
      ...copy.footer,
      navLinks: copy.footer.navLinks.map(({ path, label }) => ({
        href: getPathname({ href: path, locale: locale as Locale }),
        label,
      })),
    },
  };
}
