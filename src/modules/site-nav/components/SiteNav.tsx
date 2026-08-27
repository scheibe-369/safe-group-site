"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteNavContent } from "../data/nav-content";
import { useActiveHref, useSiteNav } from "../hooks/useSiteNav";
import { BrandLogo } from "./BrandLogo";
import { DiagonalArrow } from "./DiagonalArrow";
import { HamburgerToggle } from "./HamburgerToggle";
import { MenuPanel } from "./MenuPanel";
import { TextMask } from "./TextMask";

const MENU_ID = "site-menu";
const content = siteNavContent;

const cta = "nav-mask-trigger group pointer-events-auto h-11 items-center gap-2.5 border px-5 text-[13px] font-semibold uppercase tracking-[.1em] transition-colors duration-300 hover:border-[var(--safe-red)] hover:bg-[var(--safe-red)]";

/**
 * Cabecalho fixo com o menu dentro, na estrutura do site de referencia: a barra
 * fica num contexto proprio por cima do painel, por isso a marca e o
 * alternador continuam clicaveis com o menu aberto sem `z-index` novo. O
 * `<header>` nao pode levar `transform` nem `backdrop-filter`, senao passa a
 * ser o bloco de referencia do painel `fixed` e ele deixa de cobrir a janela.
 */
export function SiteNav({ year }: { year: number }) {
  const { open, scrolled, toggle, close, toggleRef } = useSiteNav(MENU_ID);
  const pathname = usePathname();
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

        <nav aria-label="Navegação principal" className="site-nav__links hidden items-center gap-8 lg:flex">
          {content.barLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link key={link.href} href={link.href} onClick={() => navigate(link.href)} aria-current={active ? "page" : undefined} className={`nav-mask-trigger pointer-events-auto inline-flex min-h-11 items-center text-xs font-medium uppercase tracking-[.12em] ${active ? "text-white" : "text-white/80"}`}>
                <TextMask label={link.label} copyClassName="text-[var(--safe-red)]" />
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-5 lg:gap-8">
          <Link href={content.cta.href} onClick={() => navigate(content.cta.href)} className={`site-nav__cta hidden border-white/55 text-white sm:inline-flex ${cta}`}>
            <TextMask label={content.cta.label} />
            <DiagonalArrow className="h-3 w-3 transition-transform duration-500 group-hover:rotate-45" />
          </Link>
          <HamburgerToggle ref={toggleRef} open={open} labels={content.toggle} controls={MENU_ID} onToggle={toggle} />
        </div>

        {/* CTA do menu aberto, na barra como na referencia, encostado ao limite
            direito da coluna de conteudo (58%) do painel. */}
        <Link href={content.cta.href} onClick={() => navigate(content.cta.href)} className={`site-nav__panel-cta absolute right-[44%] top-1/2 hidden -translate-y-1/2 border-black text-black hover:text-white lg:inline-flex ${cta}`}>
          <TextMask label={content.cta.label} />
          <DiagonalArrow className="h-3 w-3 transition-transform duration-500 group-hover:rotate-45" />
        </Link>
      </div>

      <MenuPanel id={MENU_ID} open={open} content={content} year={year} onNavigate={navigate} />
    </header>
  );
}
