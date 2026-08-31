"use client";

import { useEffect, useRef, useState } from "react";

type RevealProps = {
  children: React.ReactNode;
  /** Atraso da entrada, em segundos. */
  delay?: number;
  className?: string;
};

/**
 * Entrada por scroll com IntersectionObserver e transicoes CSS.
 *
 * A animacao vive em `opacity` e `transform`, que correm sempre no compositor,
 * por isso mantem-se fluida mesmo com a thread principal ocupada. Dispara uma
 * vez e desliga o observador, para nao repetir a entrada em cada passagem.
 *
 * Em ecras ate 1024px a entrada e mais curta e percorre menos distancia: o
 * telemovel tem menos folga de main thread e um deslocamento longo le-se como
 * atraso, nao como animacao.
 */
export function Reveal({ children, delay = 0, className }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [isCompact, setIsCompact] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(max-width: 1024px)");
    setIsCompact(query.matches);
    const onChange = () => setIsCompact(query.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const duration = isCompact ? 480 : 600;
  const distance = isCompact ? 12 : 20;
  const delayMs = Math.round((delay + (isCompact ? 0.02 : 0.06)) * 1000);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translate3d(0,0,0)" : `translate3d(0,${distance}px,0)`,
        transition: `opacity ${duration}ms cubic-bezier(.22,1,.36,1) ${delayMs}ms, transform ${duration}ms cubic-bezier(.22,1,.36,1) ${delayMs}ms`,
        willChange: visible ? "auto" : "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
