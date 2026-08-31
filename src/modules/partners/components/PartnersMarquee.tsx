"use client";

import { useEffect, useRef } from "react";
import type { CSSProperties } from "react";

import { partners } from "../data/partners";
import { BrandMark } from "./BrandMark";

/**
 * Mecanica portada de `partners-marquee.tsx` da Growth Hub: loop em
 * `requestAnimationFrame` sobre uma faixa com 3 copias da lista, velocidade
 * que abranda com o cursor por cima e pausa total (cancela o rAF) fora do
 * ecra ou com o separador oculto. So a identidade (cores, tipografia, copy)
 * e da Safe; o mecanismo fica igual ao pedido.
 */
const SPEED_NORMAL = 60;
const SPEED_SLOW = 20;
const TRACK = [...partners, ...partners, ...partners];

const maskImage = "linear-gradient(to right, transparent, black 10%, black 90%, transparent)";

export function PartnersMarquee() {
  const trackRef = useRef<HTMLDivElement>(null);
  const hoveredRef = useRef(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let pos = 0;
    let speed = SPEED_NORMAL;
    let prev = performance.now();
    let rafId = 0;
    let visible = false;

    const loop = (now: number) => {
      const dt = Math.min(0.05, (now - prev) / 1000);
      prev = now;
      const target = hoveredRef.current ? SPEED_SLOW : SPEED_NORMAL;
      speed += (target - speed) * Math.min(1, dt * 3);
      pos -= speed * dt;
      const cycle = track.scrollWidth / 3;
      if (cycle > 0 && -pos >= cycle) pos += cycle;
      track.style.transform = `translate3d(${pos}px,0,0)`;
      rafId = requestAnimationFrame(loop);
    };

    const start = () => {
      if (rafId) return;
      prev = performance.now();
      rafId = requestAnimationFrame(loop);
    };
    const stop = () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = 0;
      }
    };

    const io = new IntersectionObserver(
      (entries) => {
        visible = entries[0]?.isIntersecting ?? false;
        if (visible) start();
        else stop();
      },
      { rootMargin: "200px" },
    );
    io.observe(track);

    const onVisibility = () => {
      if (document.hidden) stop();
      else if (visible) start();
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      io.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      stop();
    };
  }, []);

  return (
    <>
      <ul className="sr-only">
        {partners.map((partner) => (
          <li key={partner.id}>{partner.label}</li>
        ))}
      </ul>
      <div
        className="relative w-full overflow-hidden py-6"
        style={{ maskImage, WebkitMaskImage: maskImage }}
        onMouseEnter={() => {
          hoveredRef.current = true;
        }}
        onMouseLeave={() => {
          hoveredRef.current = false;
        }}
      >
        <div ref={trackRef} aria-hidden className="flex w-max will-change-transform">
          {TRACK.map((partner, index) => (
            <div key={`${partner.id}-${index}`} className="group flex h-24 shrink-0 flex-col items-center justify-center gap-3 px-10">
              <div
                style={{ "--brand": partner.brand, "--glow": partner.glow ?? `${partner.brand}8C` } as CSSProperties}
                className="flex h-16 items-center justify-center text-white/40 [filter:grayscale(1)] transition-all duration-[400ms] [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-2 group-hover:text-[var(--brand)] group-hover:[filter:grayscale(0)_drop-shadow(0_0_14px_var(--glow))]"
              >
                <BrandMark partner={partner} height={40} />
              </div>
              {partner.kind !== "image" && (
                <span className="text-[.65rem] font-medium uppercase tracking-[.12em] text-white/35">{partner.label}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
