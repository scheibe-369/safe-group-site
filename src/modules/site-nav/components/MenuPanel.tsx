import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { NavLink, SiteNavContent } from "../types";
import { DiagonalArrow } from "./DiagonalArrow";
import { SafeMark3D } from "./SafeMark3D";
import { TextMask } from "./TextMask";

// O three so entra no bundle quando o menu abre pela primeira vez; ate la, e
// enquanto a cena carrega, fica a silhueta plana por baixo.
const SafeMark3DScene = dynamic(() => import("./SafeMark3DScene").then((module) => module.SafeMark3DScene), { ssr: false });

type MenuPanelProps = {
  id: string;
  open: boolean;
  content: SiteNavContent;
  year: number;
  onNavigate: (href: string) => void;
};

// Linhas de 44 pixels em ecra de toque, sem intervalo entre elas; em ecra
// largo a lista aperta para a cadencia da referencia.
const linkClass = "nav-mask-trigger inline-flex min-h-11 items-center text-[0.84375em] leading-[1.25] text-black/55 lg:min-h-0";

function MenuLink({ link, onNavigate, onEnter, onLeave, emphasis = false }: { link: NavLink; onNavigate: (href: string) => void; onEnter?: () => void; onLeave?: () => void; emphasis?: boolean }) {
  return (
    <Link href={link.href} onClick={() => onNavigate(link.href)} onMouseEnter={onEnter} onFocus={onEnter} onMouseLeave={onLeave} onBlur={onLeave} className={`${linkClass} ${emphasis ? "font-semibold text-black" : ""}`}>
      <TextMask label={link.label} copyClassName="text-black" />
    </Link>
  );
}

function Column({ heading, note, children, className = "", listClassName = "" }: { heading: string; note?: string; children: React.ReactNode; className?: string; listClassName?: string }) {
  return (
    <div className={`site-nav__column flex flex-col gap-[1em] lg:gap-[1.5em] ${className}`}>
      <p className="safe-kicker">
        {heading}
        {note && <span className="mt-[0.3em] block text-[0.9em] font-medium normal-case tracking-[.04em] text-black/45">{note}</span>}
      </p>
      <div className={`flex flex-col lg:gap-[0.75em] ${listClassName}`}>{children}</div>
    </div>
  );
}

/**
 * Painel do menu. Em ecra largo e um painel claro a 58% com tres colunas, um
 * painel visual preto a 42% com a marca 3D a sangrar pelo canto (trocada pela
 * capa do case sob o rato) e o wordmark gigante cortado pela base da janela.
 * Abaixo de 1024 pixels fica so o painel claro, a rolar se for preciso, sobre
 * um vidro escuro.
 */
export function MenuPanel({ id, open, content, year, onNavigate }: MenuPanelProps) {
  const [activeCase, setActiveCase] = useState<string | null>(null);
  // As capas so entram no DOM na primeira abertura: o menu fechado nao
  // descarrega imagens que ninguem pediu, e a coreografia de abertura esconde
  // o carregamento antes do primeiro hover.
  const [primed, setPrimed] = useState(false);

  useEffect(() => {
    if (open) setPrimed(true);
  }, [open]);

  return (
    <nav id={id} aria-label={content.toggle.menuLabel} aria-hidden={!open} inert={!open} className="site-nav__menu">
      <div className="site-nav__panel relative z-[5] max-h-dvh w-full overflow-y-auto overscroll-contain bg-[var(--safe-white)] pb-[1.5em] pt-[7.5em] shadow-[0_6px_10px_rgba(0,0,0,.08)] lg:min-h-[72dvh] lg:pb-[2em] lg:pt-[10em]">
        <div className="safe-edge">
          <div className="flex w-full flex-col gap-[2.25em] lg:w-[58%] lg:max-w-[46.8em] lg:gap-[4.5em]">
            <div className="grid grid-cols-2 gap-x-[1em] gap-y-[2em] sm:grid-cols-3 sm:gap-x-[0.75em] lg:max-w-[35.7em]">
              <Column heading={content.columns.navigation} className="max-sm:col-span-2" listClassName="max-sm:grid max-sm:grid-cols-2 max-sm:gap-x-6">
                {content.menuLinks.map((link) => (
                  <MenuLink key={link.href} link={link} onNavigate={onNavigate} />
                ))}
              </Column>
              <Column heading={content.columns.cases} note={content.casesNote}>
                {content.cases.map((study) => (
                  <MenuLink key={study.slug} link={study} onNavigate={onNavigate} onEnter={() => setActiveCase(study.slug)} onLeave={() => setActiveCase(null)} />
                ))}
                <MenuLink link={content.casesAll} onNavigate={onNavigate} emphasis />
              </Column>
              <Column heading={content.columns.solutions}>
                {content.solutions.map((link) => (
                  <MenuLink key={link.href} link={link} onNavigate={onNavigate} />
                ))}
              </Column>
            </div>

            {/* Em telemovel o CTA nao cabe na barra, por isso vive aqui, antes
                da linha legal, para a assinatura continuar a ser a ultima linha. */}
            <Link href={content.cta.href} onClick={() => onNavigate(content.cta.href)} className="site-nav__panel-cta nav-mask-trigger group inline-flex h-[3.385em] min-h-11 items-center justify-center gap-[0.77em] border border-black px-[1.54em] text-[0.8125em] font-semibold uppercase tracking-[.1em] text-black hover:border-[var(--safe-red)] hover:bg-[var(--safe-red)] hover:text-white sm:hidden">
              <TextMask label={content.cta.label} />
              <DiagonalArrow className="h-[0.92em] w-[0.92em] transition-transform duration-500 group-hover:rotate-45" />
            </Link>

            <div className="flex w-full flex-col gap-[1.5em]">
              <span aria-hidden className="site-nav__line block h-px w-full bg-black/10" />
              <div className="flex w-full flex-wrap items-center justify-between gap-x-[1.5em] gap-y-[0.75em]">
                <div className="overflow-hidden">
                  <p className="site-nav__signature text-[0.8125em] font-semibold tracking-[.04em] text-black">
                    Safe Group {year} ©
                  </p>
                </div>
                <ul className="-m-2 flex items-center gap-[2.33em] overflow-hidden p-2 text-[0.75em]">
                  {content.social.map((network) => (
                    <li key={network.label} className="site-nav__social">
                      {network.href ? (
                        <a href={network.href} target="_blank" rel="noreferrer noopener" className={linkClass}>
                          <TextMask label={network.label} copyClassName="text-black" />
                        </a>
                      ) : (
                        <span className="inline-flex min-h-11 items-center text-black/55 lg:min-h-0">{network.label}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div aria-hidden className="absolute inset-y-0 right-0 hidden w-[42%] overflow-hidden bg-[var(--safe-black)] lg:block">
          {primed && <SafeMark3DScene active={open} className="absolute inset-0" />}
          <SafeMark3D className="site-nav__flat-mark absolute -right-[9%] -top-[7%] h-[112%] w-auto text-white" />
          {primed &&
            content.cases.map((study) => (
              <Image key={study.slug} src={study.cover} alt="" fill sizes="42vw" data-active={activeCase === study.slug} className="site-nav__cover object-cover" />
            ))}
        </div>
      </div>

      <div aria-hidden className="absolute inset-x-0 bottom-[-32%] hidden overflow-hidden lg:block">
        <img src="/brand/safe-wordmark.svg" alt="" className="site-nav__wordmark block w-full" />
      </div>
    </nav>
  );
}
