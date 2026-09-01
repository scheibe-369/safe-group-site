"use client";

import { useEffect, useRef, useState } from "react";
import type { MethodStep } from "../types/method";

const AUTO_ADVANCE_MS = 8000;
const TIMER_QUERY = "(min-width: 1280px) and (pointer: fine)";
const XL_QUERY = "(min-width: 1280px)";
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

export function MethodTimeline({ steps }: { steps: MethodStep[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [restartTick, setRestartTick] = useState(0);
  const [hasDesktopTimer, setHasDesktopTimer] = useState(false);
  const [isXlUp, setIsXlUp] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  const rootRef = useRef<HTMLOListElement>(null);
  const itemRefs = useRef<Array<HTMLLIElement | null>>([]);
  const restartTimerRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    const timerMql = window.matchMedia(TIMER_QUERY);
    const xlMql = window.matchMedia(XL_QUERY);
    const reducedMql = window.matchMedia(REDUCED_MOTION_QUERY);

    const syncTimer = () => setHasDesktopTimer(timerMql.matches);
    const syncXl = () => setIsXlUp(xlMql.matches);
    const syncReduced = () => setReducedMotion(reducedMql.matches);

    syncTimer();
    syncXl();
    syncReduced();

    timerMql.addEventListener("change", syncTimer);
    xlMql.addEventListener("change", syncXl);
    reducedMql.addEventListener("change", syncReduced);
    return () => {
      timerMql.removeEventListener("change", syncTimer);
      xlMql.removeEventListener("change", syncXl);
      reducedMql.removeEventListener("change", syncReduced);
    };
  }, []);

  // Auto-avanco em ecra largo com ponteiro fino, so enquanto a seccao esta visivel.
  useEffect(() => {
    restartTimerRef.current = null;
    if (!hasDesktopTimer || reducedMotion) return;
    const root = rootRef.current;
    if (!root) return;

    let intervalId: ReturnType<typeof setInterval> | null = null;
    let visible = false;

    const clear = () => {
      if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
      }
    };
    // Reinicia a contagem a partir do passo atual: usado tanto pela deteccao de
    // visibilidade quanto pelo hover, que deve "zerar" o tempo do passo escolhido.
    const restart = () => {
      clear();
      if (!visible) return;
      setRestartTick((tick) => tick + 1);
      intervalId = setInterval(() => {
        setActiveIndex((current) => (current + 1) % steps.length);
      }, AUTO_ADVANCE_MS);
    };
    restartTimerRef.current = restart;

    const io = new IntersectionObserver(
      (entries) => {
        visible = entries[0]?.isIntersecting ?? false;
        if (visible) restart();
        else clear();
      },
      { threshold: 0.2 },
    );
    io.observe(root);

    return () => {
      io.disconnect();
      clear();
      restartTimerRef.current = null;
    };
  }, [hasDesktopTimer, reducedMotion, steps.length]);

  // Abaixo de xl: sem temporizador, o passo ativo segue o scroll.
  useEffect(() => {
    if (isXlUp) return;
    const observers = itemRefs.current.map((el, index) => {
      if (!el) return null;
      const io = new IntersectionObserver(
        (entries) => {
          if (entries[0]?.isIntersecting) setActiveIndex(index);
        },
        { rootMargin: "-45% 0px -45% 0px" },
      );
      io.observe(el);
      return io;
    });
    return () => observers.forEach((io) => io?.disconnect());
  }, [isXlUp]);

  const handleMouseEnter = (index: number) => {
    if (!hasDesktopTimer) return;
    setActiveIndex(index);
    restartTimerRef.current?.();
  };

  const showProgress = hasDesktopTimer && !reducedMotion;

  return (
    <>
      <style>{`@keyframes method-progress { from { transform: scaleX(0); } to { transform: scaleX(1); } }`}</style>
      <ol
        ref={rootRef}
        className="mt-14 border-t border-white/15 xl:grid xl:grid-cols-5 xl:divide-x xl:divide-y-0 xl:divide-white/15"
      >
        {steps.map((step, index) => {
          const isActive = index === activeIndex;
          return (
            <li
              key={step.number}
              ref={(el) => {
                itemRefs.current[index] = el;
              }}
              onMouseEnter={() => handleMouseEnter(index)}
              className="relative grid gap-4 border-b border-white/15 py-7 sm:grid-cols-[5rem_.8fr_1.2fr] sm:items-start sm:gap-8 sm:py-9 xl:grid-cols-1 xl:gap-3 xl:border-b-0 xl:px-6 xl:py-10"
            >
              <span
                className={`font-display text-3xl font-medium transition-colors duration-300 ${
                  isActive ? "text-[var(--safe-red)]" : "text-white/35"
                }`}
              >
                {step.number}
              </span>
              <h3
                className={`text-2xl font-medium transition-colors duration-300 ${
                  isActive ? "text-white" : "text-white/70"
                }`}
              >
                {step.title}
              </h3>
              <p
                className={`max-w-2xl text-sm leading-7 transition-colors duration-300 ${
                  isActive ? "text-white/70" : "text-white/40"
                }`}
              >
                {step.description}
              </p>
              {isActive && showProgress && (
                <span
                  key={`${activeIndex}-${restartTick}`}
                  aria-hidden
                  className="absolute inset-x-0 bottom-0 hidden h-0.5 origin-left bg-[var(--safe-red)] xl:block"
                  style={{
                    animationName: "method-progress",
                    animationDuration: `${AUTO_ADVANCE_MS}ms`,
                    animationTimingFunction: "linear",
                    animationFillMode: "forwards",
                  }}
                />
              )}
            </li>
          );
        })}
      </ol>
    </>
  );
}
