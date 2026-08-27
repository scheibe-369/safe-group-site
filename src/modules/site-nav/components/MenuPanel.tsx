import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { MenuCaseLink, NavLink, SiteNavContent } from "../types";
import { DiagonalArrow } from "./DiagonalArrow";
import { SafeMark3D } from "./SafeMark3D";
import { TextMask } from "./TextMask";

type MenuPanelProps = {
  id: string;
  open: boolean;
  content: SiteNavContent;
  year: number;
  onNavigate: (href: string) => void;
};

const linkClass = "nav-mask-trigger inline-flex min-h-8 items-center text-[.9375rem] text-black/55 lg:min-h-0";

function MenuLink({ link, onNavigate, onEnter, onLeave }: { link: NavLink; onNavigate: (href: string) => void; onEnter?: () => void; onLeave?: () => void }) {
  return (
    <Link href={link.href} onClick={() => onNavigate(link.href)} onMouseEnter={onEnter} onFocus={onEnter} onMouseLeave={onLeave} onBlur={onLeave} className={linkClass}>
      <TextMask label={link.label} copyClassName="text-black" />
    </Link>
  );
}

function Column({ heading, children, className = "" }: { heading: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <div className="site-nav__column flex flex-col gap-5 lg:gap-6">
        <p className="safe-kicker">{heading}</p>
        <div className="flex flex-col gap-2 lg:gap-3">{children}</div>
      </div>
    </div>
  );
}

/**
 * Painel do menu. Em ecra largo e um painel claro a 58% com tres colunas, um
 * painel visual preto a 42% com a marca 3D (trocada pela capa do case sob o
 * rato) e o wordmark gigante cortado pela base da janela. Abaixo de 1024
 * pixels fica so o painel claro, a rolar se for preciso, sobre um vidro escuro.
 */
export function MenuPanel({ id, open, content, year, onNavigate }: MenuPanelProps) {
  const [activeCase, setActiveCase] = useState<string | null>(null);
  // As capas so entram no DOM depois do primeiro hover, para o menu fechado
  // nao descarregar oito imagens que ninguem pediu.
  const [seen, setSeen] = useState<MenuCaseLink[]>([]);

  const showCase = (study: MenuCaseLink) => {
    setActiveCase(study.slug);
    setSeen((list) => (list.some((item) => item.slug === study.slug) ? list : [...list, study]));
  };

  return (
    <div id={id} role="dialog" aria-modal="true" aria-label={content.toggle.menuLabel} aria-hidden={!open} inert={!open} className="site-nav__menu">
      <div className="site-nav__panel relative z-[5] w-full bg-[var(--safe-white)] pb-6 pt-[7.5rem] shadow-[0_6px_10px_rgba(0,0,0,.08)] max-lg:max-h-dvh max-lg:overflow-y-auto lg:pb-8 lg:pt-40">
        <div className="safe-edge">
          <div className="flex w-full flex-col gap-12 lg:w-[58%] lg:max-w-[46.8rem] lg:gap-[4.5rem]">
            <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 sm:gap-x-3 lg:max-w-[35.7rem]">
              <Column heading={content.columns.navigation} className="max-sm:col-span-2">
                {content.menuLinks.map((link) => (
                  <MenuLink key={link.href} link={link} onNavigate={onNavigate} />
                ))}
              </Column>
              <Column heading={content.columns.cases}>
                {content.cases.map((study) => (
                  <MenuLink key={study.slug} link={study} onNavigate={onNavigate} onEnter={() => showCase(study)} onLeave={() => setActiveCase(null)} />
                ))}
              </Column>
              <Column heading={content.columns.solutions}>
                {content.solutions.map((link) => (
                  <MenuLink key={link.label} link={link} onNavigate={onNavigate} />
                ))}
              </Column>
            </div>

            <div className="flex w-full flex-col gap-6">
              <span aria-hidden className="site-nav__line block h-px w-full bg-black/10" />
              <div className="flex w-full flex-wrap items-center justify-between gap-x-6 gap-y-3">
                <div className="overflow-hidden">
                  <p className="site-nav__signature flex items-center gap-3 text-xs text-black/55">
                    <img src="/brand/safe-wordmark.svg" alt="" aria-hidden className="h-[.8125rem] w-auto brightness-0" />
                    <span>{year} ©</span>
                  </p>
                </div>
                <ul className="flex items-center gap-7 overflow-hidden text-xs">
                  {content.social.map((network) => (
                    <li key={network.label} className="site-nav__social">
                      {network.href ? (
                        <a href={network.href} target="_blank" rel="noreferrer noopener" className={linkClass}>
                          <TextMask label={network.label} copyClassName="text-black" />
                        </a>
                      ) : (
                        <span className="text-black/55">{network.label}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <Link href={content.cta.href} onClick={() => onNavigate(content.cta.href)} className="site-nav__panel-cta nav-mask-trigger group inline-flex h-11 items-center justify-center gap-2.5 border border-black px-5 text-[13px] font-semibold uppercase tracking-[.1em] text-black transition-colors duration-300 hover:border-[var(--safe-red)] hover:bg-[var(--safe-red)] hover:text-white lg:hidden">
              <TextMask label={content.cta.label} />
              <DiagonalArrow className="h-3 w-3 transition-transform duration-500 group-hover:rotate-45" />
            </Link>
          </div>
        </div>

        <div aria-hidden className="absolute inset-y-0 right-0 hidden w-[42%] items-center justify-center overflow-hidden bg-[var(--safe-black)] lg:flex">
          <SafeMark3D className="w-[52%] max-w-[22rem] text-white" />
          {seen.map((study) => (
            <Image key={study.slug} src={study.cover} alt="" fill sizes="42vw" data-active={activeCase === study.slug} className="site-nav__cover object-cover" />
          ))}
        </div>
      </div>

      <div aria-hidden className="absolute inset-x-0 bottom-[-32%] hidden overflow-hidden lg:block">
        <img src="/brand/safe-wordmark.svg" alt="" className="site-nav__wordmark block w-full" />
      </div>
    </div>
  );
}
