"use client";

import { useEffect, useRef } from "react";

const VIDEO_SRC = "/media/safe-hero-lines.mp4";

type HeroVideoProps = {
  poster: string;
  className: string;
};

/**
 * O video de fundo da Hero, com o carregamento adiado de proposito.
 *
 * O ficheiro tem 1.7 MB e e o elemento LCP da pagina. Com `preload="auto"` e o
 * `<source>` na marcacao, o browser pedia-o ao mesmo tempo que tudo o resto da
 * primeira dobra e o LCP so fechava quando o primeiro fotograma conseguia
 * pintar, 3.4s no telemovel do Lighthouse. Aqui o elemento nasce sem origem
 * nenhuma: o que se ve desde o primeiro instante e o poster, que e a imagem de
 * onde o video arranca, e a origem so entra depois do evento `load`.
 *
 * A troca nao se ve. A cortina de entrada (`modules/site-intro`) cobre o ecra
 * durante varios segundos, portanto quando a Hero aparece o video ja esta a
 * correr. Nenhum efeito muda, so deixa de disputar largura de banda com a
 * primeira pintura.
 *
 * Em movimento reduzido o video fica `display: none` e quem se ve e o
 * `.hero-poster` (ver `globals.css`), por isso nem se chega a pedir o ficheiro.
 */
export function HeroVideo({ poster, className }: HeroVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let cancelled = false;

    const start = () => {
      if (cancelled || video.src) return;
      video.src = VIDEO_SRC;
      video.load();
      // O `play()` devolve promessa e rejeita se a aba estiver em segundo
      // plano; o atributo `autoplay` reata sozinho quando ela volta.
      void video.play().catch(() => {});
    };

    if (document.readyState === "complete") {
      const frame = requestAnimationFrame(start);
      return () => {
        cancelled = true;
        cancelAnimationFrame(frame);
      };
    }

    window.addEventListener("load", start, { once: true });
    return () => {
      cancelled = true;
      window.removeEventListener("load", start);
    };
  }, []);

  return (
    <video
      ref={ref}
      data-intro-reveal="scale"
      className={className}
      autoPlay
      muted
      loop
      playsInline
      preload="none"
      poster={poster}
      aria-hidden="true"
    />
  );
}
