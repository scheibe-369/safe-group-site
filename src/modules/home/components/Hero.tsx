import { Fragment } from "react";
import { getLocale } from "next-intl/server";
import { ButtonLink } from "@/shared/ui/ButtonLink";
import type { Locale } from "@/shared/i18n/locales";
import { getPathname } from "@/shared/i18n/navigation";
import { getHome } from "../data/content";
import { HeroVideo } from "./HeroVideo";
import type { HeroAction } from "../types";

/**
 * A entrada do site (`modules/site-intro`) revela a Hero por mascaras: cada
 * bloco de texto vive dentro de um `.intro-mask` com o seu passo de atraso,
 * o video e o poster entram de 1.15 ate 1 e os filetes crescem. As margens
 * verticais ficam nas mascaras e nao no conteudo, senao o conteudo continua
 * visivel na margem enquanto esta escondido.
 *
 * A copy e os dois enderecos sao resolvidos aqui, no servidor, para a Home nao
 * ter de saber o idioma em que esta a ser vista.
 */
export async function Hero() {
  const locale = (await getLocale()) as Locale;
  const { hero } = getHome(locale);
  const href = (action: HeroAction) => getPathname({ href: action.href, locale });

  return (
    <section className="relative flex min-h-[760px] items-end overflow-hidden bg-black pb-16 pt-28 sm:min-h-[820px] lg:h-dvh lg:min-h-[760px] lg:items-start lg:pb-0 lg:pt-[clamp(11rem,22vh,16rem)]">
      {/* O poster e a camada de base e o elemento LCP da pagina: pinta a
          primeira dobra inteira mal chega, sem depender de JavaScript nem do
          video. O video entra por cima assim que estiver pronto, a partir
          deste mesmo fotograma, por isso a troca nao se ve. */}
      <img
        src="/media/safe-hero-poster.webp"
        alt=""
        aria-hidden="true"
        fetchPriority="high"
        decoding="async"
        data-intro-reveal="scale"
        className="hero-poster absolute inset-0 h-full w-full object-cover object-[67%_center] sm:object-[96%_center]"
      />
      <HeroVideo
        poster="/media/safe-hero-poster.webp"
        className="hero-video absolute inset-0 h-full w-full object-cover object-[67%_center] sm:object-[96%_center]"
      />
      <div aria-hidden className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.98)_0%,rgba(0,0,0,.88)_27%,rgba(0,0,0,.2)_67%,rgba(0,0,0,.3)_100%)]" />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/30" />

      <div className="safe-edge relative z-10">
        <div className="max-w-2xl xl:max-w-3xl 2xl:max-w-4xl">
          <div className="intro-mask" data-intro-step="0">
            <p className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[.65rem] font-medium uppercase tracking-[.18em] text-white/65 sm:text-xs">
              <span>{hero.kicker[0]}</span><span className="h-1 w-1 shrink-0 rounded-full bg-[var(--safe-red)]" /><span>{hero.kicker[1]}</span>
            </p>
          </div>
          <span aria-hidden data-intro-reveal="line" data-intro-step="1" className="mt-6 block h-[3px] w-[4.5rem] bg-[var(--safe-red)]" />
          <h1 className="mt-7 text-[clamp(2.75rem,6vw,6rem)] font-semibold uppercase leading-[1.14] tracking-[-.02em] text-white">
            <span className="intro-mask block" data-intro-step="1"><span className="block">{hero.title.first}</span></span>
            <span className="intro-mask block" data-intro-step="2"><span className="block">{hero.title.second}</span></span>
          </h1>
          <div className="intro-mask mt-8 max-w-xl" data-intro-step="3">
            <p className="text-base leading-7 text-white/75 sm:text-lg">{hero.lead}</p>
          </div>
          <div className="intro-mask mt-4" data-intro-step="4">
            <p className="text-[.65rem] font-medium uppercase tracking-[.15em] text-white/50 sm:text-xs">
              {hero.areas.map((area, index) => (
                <Fragment key={area}>
                  {index > 0 && <>{" "}<span className="mx-2 text-white/25">•</span>{" "}</>}
                  <span className="safe-shine safe-shine--silver">{area}</span>
                </Fragment>
              ))}
            </p>
          </div>
          <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-8">
            <span className="intro-mask intro-mask--loose inline-flex" data-intro-step="5"><ButtonLink href={href(hero.actions.primary)} arrow="none">{hero.actions.primary.label}</ButtonLink></span>
            <span className="intro-mask intro-mask--loose inline-flex" data-intro-step="6"><ButtonLink href={href(hero.actions.secondary)} variant="ghost" arrow="long">{hero.actions.secondary.label}</ButtonLink></span>
          </div>
        </div>
      </div>

      <div aria-hidden className="hero-signature safe-edge absolute inset-x-0 bottom-16 z-10">
        <div className="intro-mask" data-intro-step="7">
          <p className="text-[.7rem] font-medium uppercase tracking-[.28em] text-white/45">{hero.signature}</p>
        </div>
        <span data-intro-reveal="line" data-intro-step="8" className="mt-4 block h-[3px] w-[4.5rem] bg-[var(--safe-red)]" />
      </div>

      <div aria-hidden data-intro-reveal="beam" data-intro-step="4" className="absolute bottom-0 left-0 h-px w-full safe-red-line opacity-70" />
    </section>
  );
}
