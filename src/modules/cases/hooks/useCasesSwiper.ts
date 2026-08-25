"use client";

import { useEffect, useRef } from "react";
import Swiper from "swiper";
import { FreeMode, Navigation, Scrollbar } from "swiper/modules";
import "swiper/css";

type UseCasesSwiperArgs = {
  /**
   * Classe aplicada ao elemento arrastavel da barra de progresso.
   * Vem do CSS Module, entao precisa de ser passada ao Swiper para ele
   * encontrar o elemento ja renderizado em vez de criar um novo.
   */
  dragClass: string;
  /** Reinicializa as medidas quando a lista de cases muda de tamanho. */
  itemCount: number;
};

/**
 * Inicializa o Swiper com a mecanica do carrossel de referencia: free mode,
 * setas e barra de progresso arrastavel.
 *
 * Navegacao e scrollbar sao ligadas por referencia de elemento e nao por
 * seletor de string, para nao vazar seletores globais nem partir quando ha
 * mais de um carrossel na mesma pagina, que e o caso da rota /cases.
 *
 * A escada de slidesPerView desvia do original de proposito. Ele saltava de
 * 1.5 para 4 ja aos 480 pixels, o que da slides de 120 pixels em tablet.
 */
export function useCasesSwiper({ dragClass, itemCount }: UseCasesSwiperArgs) {
  const containerRef = useRef<HTMLDivElement>(null);
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const scrollbarRef = useRef<HTMLDivElement>(null);
  const swiperRef = useRef<Swiper | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const instance = new Swiper(container, {
      modules: [FreeMode, Navigation, Scrollbar],

      loop: false,
      slidesPerView: 1.15,
      spaceBetween: 20,
      freeMode: true,
      grabCursor: true,

      scrollbar: {
        el: scrollbarRef.current,
        draggable: true,
        dragClass,
        snapOnRelease: true,
      },

      navigation: {
        nextEl: nextRef.current,
        prevEl: prevRef.current,
      },

      breakpoints: {
        640: { slidesPerView: 2.2 },
        1024: { slidesPerView: 3.2 },
      },
    });

    swiperRef.current = instance;

    return () => {
      instance.destroy(true, true);
      swiperRef.current = null;
    };
  }, [dragClass]);

  useEffect(() => {
    swiperRef.current?.update();
  }, [itemCount]);

  return { containerRef, prevRef, nextRef, scrollbarRef, swiperRef };
}
