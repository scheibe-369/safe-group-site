import { getCaseStudies } from "@/modules/cases/data/cases";
import { socialNetworks } from "@/modules/social-dock/data/networks";
import { localeContent } from "@/shared/i18n/content";
import type { Locale } from "@/shared/i18n/locales";
import { getPathname } from "@/shared/i18n/navigation";
import type { NavLabel, SiteNavContent } from "../types";
import { siteNavLabelsEnGB } from "./nav-labels.en-GB";
import { siteNavLabelsEnUS } from "./nav-labels.en-US";
import { siteNavLabelsEs } from "./nav-labels.es";
import { siteNavLabelsPtBR } from "./nav-labels.pt-BR";
import { siteNavLabelsPtPT } from "./nav-labels.pt-PT";

const getLabels = localeContent({
  "pt-PT": siteNavLabelsPtPT,
  "pt-BR": siteNavLabelsPtBR,
  "en-GB": siteNavLabelsEnGB,
  "en-US": siteNavLabelsEnUS,
  es: siteNavLabelsEs,
});

/**
 * A coluna dos cases lista so os reais, sem repetir slugs; se ainda nao houver
 * nenhum, cai nos de demonstracao com o aviso respetivo, para a coluna nunca
 * ir ao ar vazia. O indice completo fica na ligacao final da coluna.
 */
function pickMenuCases(locale: Locale | string) {
  const studies = getCaseStudies(locale);
  const real = studies.filter((study) => !study.isDemo);
  return (real.length ? real : studies).filter((study, index, list) => list.findIndex((other) => other.slug === study.slug) === index);
}

/**
 * Copy e destinos do menu. O site é um one-page com âncoras, por isso a maior
 * parte das ligações aponta para secções da Home; só o detalhe de cada case
 * tem rota própria. A coluna de cases é derivada dos dados do módulo
 * respetivo para não manter uma segunda cópia da lista. Este ficheiro é lido
 * no servidor (layout) e só chega ao cliente como dados simples.
 *
 * Os endereços saem daqui já resolvidos para o idioma pedido, incluindo o
 * prefixo, para os componentes continuarem a receber uma string e a usar o
 * `Link` normal do Next.
 */
export function getSiteNavContent(locale: Locale | string): SiteNavContent {
  const labels = getLabels(locale);
  const menuCases = pickMenuCases(locale);
  const home = getPathname({ href: "/", locale: locale as Locale });
  const toHref = ({ hash }: NavLabel) => (hash ? `${home}#${hash}` : home);
  const link = (item: NavLabel) => ({ href: toHref(item), label: item.label });

  return {
    brandLabel: labels.brandLabel,
    barLinks: labels.barLinks.map(link),
    cta: link(labels.cta),
    toggle: labels.toggle,
    columns: labels.columns,
    menuLinks: labels.menuLinks.map(link),
    cases: menuCases.map((study) => ({
      slug: study.slug,
      href: getPathname({ href: { pathname: "/cases/[slug]", params: { slug: study.slug } }, locale: locale as Locale }),
      label: study.client,
      cover: study.cover,
    })),
    casesAll: link(labels.casesAll),
    casesNote: menuCases.some((study) => study.isDemo) ? labels.casesNote : undefined,
    social: socialNetworks
      .filter((network) => network.id !== "whatsapp")
      .map((network) => ({ label: network.label, href: network.href })),
  };
}
