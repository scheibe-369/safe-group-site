"use client";

import { useCasesSwiper } from "../../hooks/useCasesSwiper";
import styles from "../../styles/cases-carousel.module.css";
import type { CaseStudy } from "../../types/case-study";
import { CarouselArrow } from "./CarouselArrow";
import { CaseSlide } from "./CaseSlide";

type CasesCarouselProps = {
  items: CaseStudy[];
  /**
   * Campo mostrado no slot da direita de cada slide. Por defeito o setor.
   * Na rota /cases os blocos ja estao agrupados por setor, entao la passa-se
   * a area para nao repetir a mesma informacao duas vezes.
   *
   * E uma chave de campo e nao um callback de proposito: este componente e um
   * client component e as props atravessam a fronteira do servidor, onde uma
   * funcao nao e serializavel.
   */
  metaField?: "sector" | "area";
  /** Rotulo revelado no hover, no lugar da meta. */
  hoverLabel?: string;
  /** Nome do conjunto, para o rotulo acessivel das setas. */
  label?: string;
  className?: string;
};

/**
 * Widget de carrossel. Nao desenha seccao nem cabecalho: quem o usa e que
 * decide a semantica e o espacamento a volta.
 *
 * Requisito de layout: o trilho tem width 100vw e sangra para fora do
 * .safe-container de proposito, entao o elemento de largura total que envolve
 * este widget precisa de overflow-x: clip.
 */
export function CasesCarousel({
  items,
  metaField = "sector",
  hoverLabel = "Ver case",
  label = "cases",
  className,
}: CasesCarouselProps) {
  const { containerRef, prevRef, nextRef, scrollbarRef } = useCasesSwiper({
    dragClass: styles.drag,
    draggingClass: styles.isDragging,
    itemCount: items.length,
  });

  return (
    <div className={[styles.root, className].filter(Boolean).join(" ")}>
      <div ref={containerRef} className={`swiper ${styles.track}`}>
        <div role="list" className={`swiper-wrapper ${styles.wrapper}`}>
          {items.map((item) => (
            <CaseSlide key={item.slug} item={item} meta={item[metaField]} hoverLabel={hoverLabel} />
          ))}
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.arrows}>
          <CarouselArrow ref={prevRef} direction="prev" label={`Anterior, ${label}`} />
          <CarouselArrow ref={nextRef} direction="next" label={`Seguinte, ${label}`} />
        </div>

        <div ref={scrollbarRef} className={styles.scrollbar}>
          <div className={styles.drag} />
        </div>
      </div>
    </div>
  );
}
