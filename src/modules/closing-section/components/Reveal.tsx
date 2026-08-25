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
 * A animacao fica em `opacity` e `transform`, que correm sempre no compositor,
 * por isso mantem-se fluida mesmo com a thread principal ocupada. Dispara uma
 * vez e desliga o observador, para nao repetir a entrada em cada passagem.
 */
export function Reveal({ children, delay = 0, className }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

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

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translate3d(0,0,0)" : "translate3d(0,20px,0)",
        transition: `opacity 600ms cubic-bezier(.22,1,.36,1) ${Math.round(delay * 1000)}ms, transform 600ms cubic-bezier(.22,1,.36,1) ${Math.round(delay * 1000)}ms`,
        willChange: visible ? "auto" : "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
