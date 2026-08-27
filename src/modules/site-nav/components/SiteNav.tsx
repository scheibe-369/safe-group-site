"use client";

import Link from "next/link";
import type { SiteNavContent } from "../types";
import { useActiveHref, useSiteNav } from "../hooks/useSiteNav";
import { BrandLogo } from "./BrandLogo";
import { DiagonalArrow } from "./DiagonalArrow";
import { HamburgerToggle } from "./HamburgerToggle";
import { MenuPanel } from "./MenuPanel";
import { TextMask } from "./TextMask";

const MENU_ID = "site-menu";

const cta = "nav-mask-trigger group pointer-events-auto h-11 items-center gap-2.5 border px-5 text-[13px] font-semibold uppercase tracking-[.1em] hover:border-[var(--safe-red)] hover:bg-[var(--safe-red)]";

type SiteNavProps = {
  /** Calculado no servidor (layout) para a prosa dos cases e os icones das solucoes nao irem no bundle do cliente. */
  content: SiteNavContent;
  year: number;
};

/**
 * Cabecalho fixo com o menu dentro, na estrutura do site de referencia: a barra
 * fica num contexto proprio por cima do painel, por isso a marca e o
 * alternador continuam clicaveis com o menu aberto sem `z-index` novo. O
 * `<header>` nao pode levar `transform` nem `backdrop-filter`, senao passa a
 * ser o bloco de referencia do painel `fixed` e ele deixa de cobrir a janela.
 */
export function SiteNav({ content, year }: SiteNavProps) {
  const { open, scrolled, toggle, close, toggleRef, pathname } = useSiteNav(MENU_ID);
  const { isActive, noteNavigation } = useActiveHref(pathname);
  const navigate = (href: string) => {
    noteNavigation(href);
    close();
  };

  return (
    <header data-open={open} className="site-nav fixed inset-x-0 top-0 z-50">
      <span aria-hidden data-visible={scrolled && !open} className="site-nav__scrim pointer-events-none absolute inset-0 bg-gradient-to-b from-black/80 to-transparent" />

      <div className="safe-edge pointer-events-none relative z-10 flex min-h-24 items-center justify-between gap-6">
        <BrandLogo label={content.brandLabel} onClick={() => navigate("/")} />

        <nav aria-label="Navegação principal" className="site-nav__links hidden items-center gap-6 lg:flex xl:gap-8">
          {content.barLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link key={link.href} href={link.href} onClick={() => navigate(link.href)} aria-current={active ? (link.href.includes("#") ? "location" : "page") : undefined} className={`nav-mask-trigger pointer-events-auto inline-flex min-h-11 items-center text-xs font-medium uppercase tracking-[.12em] ${active ? "text-white" : "text-white/80"}`}>
                <TextMask label={link.label} copyClassName="text-[var(--safe-red)]" />
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-5 lg:gap-8">
          {/* Os dois CTAs partilham a mesma casa na barra: o claro serve o site,
              o escuro entra por cima quando o menu abre e a barra fica sobre o
              painel claro. Em ecra largo o escuro salta para o limite direito
              da coluna de conteudo do painel, como na referencia. */}
          <span className="relative hidden sm:inline-flex lg:static">
            <Link href={content.cta.href} onClick={() => navigate(content.cta.href)} className={`site-nav__cta inline-flex border-white/55 text-white ${cta}`}>
              <TextMask label={content.cta.label} />
              <DiagonalArrow className="h-3 w-3 transition-transform duration-500 group-hover:rotate-45" />
            </Link>
            <Link href={content.cta.href} onClick={() => navigate(content.cta.href)} className={`site-nav__panel-cta absolute inset-0 inline-flex border-black text-black hover:text-white lg:inset-auto lg:right-[44%] lg:top-1/2 lg:-translate-y-1/2 ${cta}`}>
              <TextMask label={content.cta.label} />
              <DiagonalArrow className="h-3 w-3 transition-transform duration-500 group-hover:rotate-45" />
            </Link>
          </span>
          <HamburgerToggle ref={toggleRef} open={open} labels={content.toggle} controls={MENU_ID} onToggle={toggle} />
        </div>
      </div>

      <MenuPanel id={MENU_ID} open={open} content={content} year={year} onNavigate={navigate} />
    </header>
  );
}
