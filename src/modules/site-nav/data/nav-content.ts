import { caseStudies } from "@/modules/cases/data/cases";
import { socialNetworks } from "@/modules/social-dock/data/networks";
import { solutions } from "@/modules/solutions/data/solutions";
import type { SiteNavContent } from "../types";

/**
 * Copy e destinos do menu. O site é um one-page com âncoras, por isso a maior
 * parte das ligações aponta para secções da Home; só os cases têm rotas
 * próprias. As colunas de cases e de soluções são derivadas dos dados dos
 * módulos respetivos para não manter uma segunda cópia da lista.
 */
export const siteNavContent: SiteNavContent = {
  brandLabel: "Safe Group, página inicial",
  barLinks: [
    { href: "/#solucoes", label: "Soluções" },
    { href: "/#metodo", label: "Método" },
    { href: "/cases", label: "Cases" },
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
    { href: "/cases", label: "Cases" },
    { href: "/#sobre", label: "Sobre" },
    { href: "/#diagnostico", label: "Contacto" },
  ],
  solutions: solutions.map((solution) => ({ href: "/#solucoes", label: solution.title })),
  cases: caseStudies.map((study) => ({ slug: study.slug, href: `/cases/${study.slug}`, label: study.client, cover: study.cover })),
  social: socialNetworks
    .filter((network) => network.id !== "whatsapp")
    .map((network) => ({ label: network.label, href: network.href })),
  legal: "Safe Group",
};
