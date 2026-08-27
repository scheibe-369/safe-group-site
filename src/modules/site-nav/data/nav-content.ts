import { caseStudies } from "@/modules/cases/data/cases";
import { socialNetworks } from "@/modules/social-dock/data/networks";
import { solutions } from "@/modules/solutions/data/solutions";
import type { SiteNavContent } from "../types";

/**
 * A coluna dos cases lista so os reais, sem repetir slugs; se ainda nao houver
 * nenhum, cai nos de demonstracao com o aviso respetivo, para a coluna nunca
 * ir ao ar vazia. O indice completo fica na ligacao final da coluna.
 */
const realCases = caseStudies.filter((study) => !study.isDemo);
const menuCases = (realCases.length ? realCases : caseStudies).filter((study, index, list) => list.findIndex((other) => other.slug === study.slug) === index);

/**
 * Copy e destinos do menu. O site é um one-page com âncoras, por isso a maior
 * parte das ligações aponta para secções da Home; só o detalhe de cada case
 * tem rota própria. As colunas de cases e de soluções são derivadas dos dados
 * dos módulos respetivos para não manter uma segunda cópia da lista. Este
 * ficheiro é lido no servidor (layout) e só chega ao cliente como dados simples.
 */
export const siteNavContent: SiteNavContent = {
  brandLabel: "Safe Group, página inicial",
  barLinks: [
    { href: "/#solucoes", label: "Soluções" },
    { href: "/#metodo", label: "Método" },
    { href: "/#cases", label: "Cases" },
    { href: "/#sobre", label: "Sobre" },
  ],
  cta: { href: "/#diagnostico", label: "Começar diagnóstico" },
  toggle: {
    open: "Menu",
    close: "Fechar",
    ariaOpen: "Abrir menu",
    ariaClose: "Fechar menu",
    menuLabel: "Menu do site",
  },
  columns: {
    navigation: "Navegação",
    cases: "Cases",
    solutions: "Soluções",
  },
  menuLinks: [
    { href: "/", label: "Início" },
    { href: "/#solucoes", label: "Soluções" },
    { href: "/#metodo", label: "Método" },
    { href: "/#cases", label: "Cases" },
    { href: "/#sobre", label: "Sobre" },
    { href: "/#diagnostico", label: "Contacto" },
  ],
  solutions: solutions.map((solution) => ({ href: `/#${solution.id}`, label: solution.title })),
  cases: menuCases.map((study) => ({ slug: study.slug, href: `/cases/${study.slug}`, label: study.client, cover: study.cover })),
  casesAll: { href: "/#cases", label: "Todos os cases" },
  casesNote: menuCases.some((study) => study.isDemo) ? "Inclui conteúdo de demonstração" : undefined,
  social: socialNetworks
    .filter((network) => network.id !== "whatsapp")
    .map((network) => ({ label: network.label, href: network.href })),
};
