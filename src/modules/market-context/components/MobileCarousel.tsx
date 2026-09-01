"use client";

import { Children, isValidElement, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { MarketContextContent } from "../types/market-stat";

type MobileCarouselProps = {
  children: React.ReactNode;
  /** Rotulos de acessibilidade, ja no idioma da pagina. */
  labels: MarketContextContent["carousel"];
  className?: string;
  cardWidthClass?: string;
};

/**
 * Trilho horizontal com `scroll-snap` para telemovel, com setas e pontos.
 *
 * Os cartoes chegam como `children` ja renderizados no servidor, por isso o
 * conteudo nao entra no pacote do cliente: aqui so vive a navegacao.
 */
export function MobileCarousel({
  children,
  labels,
  className,
  cardWidthClass = "w-[85vw] max-w-sm",
}: MobileCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const items = Children.toArray(children).filter(isValidElement);
  const count = items.length;
  const [index, setIndex] = useState(0);
  const tweenRef = useRef<number | null>(null);

  const scrollToIndex = (target: number) => {
    const track = trackRef.current;
    if (!track) return;

    const clamped = Math.max(0, Math.min(count - 1, target));
    const item = track.children[clamped] as HTMLElement | undefined;

    if (item) {
      const destination = item.offsetLeft - (track.clientWidth - item.clientWidth) / 2;
      // Interpolacao propria em vez de `scrollTo({behavior:"smooth"})`: o nativo
      // tem duracao variavel e no telemovel compete com o snap, ficando lento.
      if (tweenRef.current !== null) cancelAnimationFrame(tweenRef.current);
      const start = track.scrollLeft;
      const distance = destination - start;
      if (Math.abs(distance) < 0.5) return;

      const duration = 260;
      const startedAt = performance.now();
      const step = (now: number) => {
        const progress = Math.min(1, (now - startedAt) / duration);
        const eased = 1 - Math.pow(1 - progress, 3);
        track.scrollLeft = start + distance * eased;
        tweenRef.current = progress < 1 ? requestAnimationFrame(step) : null;
      };
      tweenRef.current = requestAnimationFrame(step);
    }

    setIndex(clamped);
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const center = track.scrollLeft + track.clientWidth / 2;
        let closest = 0;
        let shortest = Infinity;
        for (let i = 0; i < track.children.length; i += 1) {
          const item = track.children[i] as HTMLElement;
          const itemCenter = item.offsetLeft + item.clientWidth / 2;
          const distance = Math.abs(itemCenter - center);
          if (distance < shortest) {
            shortest = distance;
            closest = i;
          }
        }
        setIndex(closest);
      });
    };

    track.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      track.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => () => {
    if (tweenRef.current !== null) cancelAnimationFrame(tweenRef.current);
  }, []);

  const arrowClass =
    "flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-white transition-all duration-300 hover:border-[var(--safe-red)]/50 hover:bg-[var(--safe-red)]/10 active:scale-95 disabled:cursor-not-allowed disabled:opacity-30";

  return (
    <div className={className ? `relative ${className}` : "relative"}>
      <div
        ref={trackRef}
        className="-mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((child, i) => (
          <div key={i} className={`flex-shrink-0 snap-center ${cardWidthClass}`}>
            {child}
          </div>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => scrollToIndex(index - 1)}
          disabled={index === 0}
          aria-label={labels.previous}
          className={arrowClass}
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <div className="flex items-center gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-current={index === i}
              onClick={() => scrollToIndex(i)}
              aria-label={labels.goToCard.replace("{n}", String(i + 1))}
              // Alvo de toque de 44px de altura, largura curta para caberem
              // todos os pontos num ecra de 360px.
              className="group flex h-11 items-center justify-center px-1.5"
            >
              <span
                aria-hidden
                className={`block h-1.5 rounded-full transition-all duration-300 ${
                  index === i ? "w-6 bg-[var(--safe-red)]" : "w-1.5 bg-white/25 group-hover:bg-white/40"
                }`}
              />
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={() => scrollToIndex(index + 1)}
          disabled={index === count - 1}
          aria-label={labels.next}
          className={arrowClass}
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
