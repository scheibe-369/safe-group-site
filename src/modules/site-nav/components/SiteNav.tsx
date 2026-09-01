"use client";

import Link from "next/link";
import { LanguageMenu } from "@/modules/language-switcher";
import type { SiteNavContent } from "../types";
import { useActiveHref, useSiteNav } from "../hooks/useSiteNav";
import { BrandLogo } from "./BrandLogo";
import { DiagonalArrow } from "./DiagonalArrow";
import { HamburgerToggle } from "./HamburgerToggle";
import { MenuPanel } from "./MenuPanel";
import { TextMask } from "./TextMask";

const MENU_ID = "site-menu";

const cta = "nav-mask-trigger group pointer-events-auto whitespace-nowrap h-[3.385em] items-center gap-[0.77em] border px-[1.54em] text-[0.875em] font-semibold uppercase tracking-[.1em] hover:border-[var(--safe-red)] hover:bg-[var(--safe-red)]";

type SiteNavProps = {
  /** Calculado no servidor (layout) para a prosa dos cases e os icones das solucoes nao irem no bundle do cliente. */
  content: SiteNavContent;
  year: number;
};

/**
 * Cabecalho fixo com o menu dentro, na estrutura do site de referencia: a barra
 * fica num contexto proprio por cima do painel, por isso a marca e o
 * alternador continuam clicaveis com o menu aberto sem `z-index` novo.
 *
 * Sobre a primeira dobra nao ha barra nenhuma: ela so desce depois do primeiro
 * scroll (`data-scrolled`), sobre um vidro escuro que desfoca e abafa o que
 * passa por baixo, e volta a subir quando a pagina regressa ao topo. O vidro e
 * um irmao da barra e do painel, nunca o `<header>`: o `<header>` nao pode
 * levar `transform`, `opacity` nem `backdrop-filter`, senao passa a ser o
 * bloco de referencia do painel `fixed` (e a raiz do desfoque) e o painel
 * deixa de cobrir a janela.
 */
export function SiteNav({ content, year }: SiteNavProps) {
  const { open, scrolled, toggle, close, toggleRef, pathname } = useSiteNav(MENU_ID);
  const { isActive, noteNavigation } = useActiveHref(pathname);
  const navigate = (href: string) => {
    noteNavigation(href);
    close();
  };

  return (
    <header data-open={open} data-scrolled={scrolled} className="site-nav fixed inset-x-0 top-0 z-50">
      <span aria-hidden className="site-nav__glass pointer-events-none absolute inset-0" />

      {/* `inert` tira a barra escondida do foco, dos cliques e da arvore de
          acessibilidade; `visibility` nao servia, porque as abas e o CTA a
          redefinem para a coreografia do menu. */}
      <div inert={!scrolled && !open} className="site-nav__bar safe-edge pointer-events-none relative z-10 flex min-h-[6em] items-center justify-between gap-[1.5em]">
        <BrandLogo label={content.brandLabel} onClick={() => navigate("/")} />

        <nav aria-label={content.navAriaLabel} className="site-nav__links hidden items-center gap-[1.5em] lg:flex xl:gap-[2em]">
          {content.barLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link key={link.href} href={link.href} onClick={() => navigate(link.href)} aria-current={active ? (link.href.includes("#") ? "location" : "page") : undefined} className={`nav-mask-trigger pointer-events-auto inline-flex min-h-11 items-center text-[0.75em] font-medium uppercase tracking-[.12em] xl:text-[0.84375em] ${active ? "text-white" : "text-white/80"}`}>
                <TextMask label={link.label} copyClassName="text-[var(--safe-red)]" />
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-[1.25em] lg:gap-[2em]">
          {/* O seletor de idioma acompanha as abas: partilha a classe
              `site-nav__links`, por isso desaparece com elas quando o menu
              abre, e la dentro o painel tem o seu.

              Cabe a partir de `lg` porque e so o globo e duas letras: a lista
              dos cinco idiomas por extenso vive no popup e nao ocupa barra. A
              versao anterior, com os cinco codigos em linha, punha o CTA a
              partir em duas linhas a 1024 em espanhol. */}
          <span className="site-nav__links pointer-events-auto hidden lg:inline-flex">
            <LanguageMenu variant="bar" />
          </span>

          {/* Os dois CTAs partilham a mesma casa na barra: o claro serve o site,
              o escuro entra por cima quando o menu abre e a barra fica sobre o
              painel claro. Em ecra largo o escuro salta para o limite direito
              da coluna de conteudo do painel, como na referencia. */}
          <span className="relative hidden sm:inline-flex lg:static">
            <Link href={content.cta.href} onClick={() => navigate(content.cta.href)} className={`site-nav__cta inline-flex border-white/55 text-white ${cta}`}>
              <TextMask label={content.cta.label} />
              <DiagonalArrow className="h-[0.92em] w-[0.92em] transition-transform duration-500 group-hover:rotate-45" />
            </Link>
            <Link href={content.cta.href} onClick={() => navigate(content.cta.href)} className={`site-nav__panel-cta absolute inset-0 inline-flex border-black text-black hover:text-white lg:inset-auto lg:right-[44%] lg:top-1/2 lg:-translate-y-1/2 ${cta}`}>
              <TextMask label={content.cta.label} />
              <DiagonalArrow className="h-[0.92em] w-[0.92em] transition-transform duration-500 group-hover:rotate-45" />
            </Link>
          </span>
          <HamburgerToggle ref={toggleRef} open={open} labels={content.toggle} controls={MENU_ID} onToggle={toggle} />
        </div>
      </div>

      <MenuPanel id={MENU_ID} open={open} content={content} year={year} onNavigate={navigate} />
    </header>
  );
}
