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
  /**
   * Classe aplicada ao trilho enquanto o arraste esta em curso, para suprimir
   * a transicao de hover da capa. Sem isto, cada slide que o cursor atravessa
   * a meio do arraste dispara a sua propria transicao de 500ms ao mesmo tempo
   * que o trilho esta a ser transformado, e o resultado sente-se travado.
   */
  draggingClass: string;
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
 * A escada de slidesPerView reproduz a densidade do original (1.5 no
 * telemovel, 4 em ecra largo), mas com um degrau intermedio em vez do salto
 * direto para 4 aos 480 pixels. O original usa uma margem fluida em vw; a
 * margem do `.safe-container` e mais estreita nesse intervalo, e 4 slides
 * aos 480px davam cartoes de menos de 100 pixels, ilegiveis.
 */
export function useCasesSwiper({ dragClass, draggingClass, itemCount }: UseCasesSwiperArgs) {
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
      slidesPerView: 1.5,
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
        640: { slidesPerView: 2.5 },
        1024: { slidesPerView: 4 },
      },
    });

    const startDragging = () => container.classList.add(draggingClass);
    const stopDragging = () => container.classList.remove(draggingClass);
    instance.on("sliderFirstMove", startDragging);
    instance.on("touchEnd", stopDragging);

    swiperRef.current = instance;

    return () => {
      instance.destroy(true, true);
      swiperRef.current = null;
    };
  }, [dragClass, draggingClass]);

  useEffect(() => {
    swiperRef.current?.update();
  }, [itemCount]);

  return { containerRef, prevRef, nextRef, scrollbarRef, swiperRef };
}
