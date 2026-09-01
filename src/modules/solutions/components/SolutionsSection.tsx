import { getLocale } from "next-intl/server";
import type { Locale } from "@/shared/i18n/locales";
import { getPathname } from "@/shared/i18n/navigation";
import { getSolutions } from "../data/solutions";
import { SolutionsMenu } from "./SolutionsMenu";
import { SolutionsPanels } from "./SolutionsPanels";
import { SolutionsStage } from "./SolutionsStage";

/**
 * Secção de Soluções da Home. O palco é a única peça de cliente; o menu e os
 * painéis são renderizados no servidor e entregues por `children`, para a copy
 * e as imagens não atravessarem a fronteira.
 *
 * A secção resolve o idioma sozinha, para a Home continuar a montá-la sem
 * argumentos, e é aqui que os endereços do detalhe ganham o prefixo do idioma.
 */
export async function SolutionsSection() {
  const locale = (await getLocale()) as Locale;
  const content = getSolutions(locale);
  const detailHref = (slug: string) =>
    getPathname({ href: { pathname: "/solucoes/[slug]", params: { slug } }, locale });

  return (
    <SolutionsStage count={content.items.length} label={content.sectionLabel} cursorLabel={content.cursorLabel}>
      <SolutionsMenu items={content.items} />
      <SolutionsPanels
        items={content.items}
        kicker={content.kicker}
        action={content.panelAction}
        detailHref={detailHref}
      />
    </SolutionsStage>
  );
}
