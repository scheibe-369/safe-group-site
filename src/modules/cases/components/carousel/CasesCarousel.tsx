"use client";

import { useCasesSwiper } from "../../hooks/useCasesSwiper";
import styles from "../../styles/cases-carousel.module.css";
import type { CaseStudy } from "../../types/case-study";
import type { CasesCarouselLabels } from "../../types/content";
import { fill } from "../../utils/fill";
import { CarouselArrow } from "./CarouselArrow";
import { CaseSlide } from "./CaseSlide";

type CasesCarouselProps = {
  items: CaseStudy[];
  /** Enderecos do detalhe por slug, ja resolvidos para o idioma actual. */
  hrefs: Record<string, string>;
  /**
   * Copy do widget. Chega por prop porque este e um client component: importar
   * o getter aqui dentro arrastaria os cinco idiomas para o bundle do browser.
   */
  labels: CasesCarouselLabels;
  /** Nome do conjunto, para o rotulo acessivel das setas. */
  label: string;
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
  hrefs,
  labels,
  label,
  metaField = "sector",
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
            <CaseSlide
              key={item.slug}
              item={item}
              href={hrefs[item.slug] ?? ""}
              meta={item[metaField]}
              labels={labels}
            />
          ))}
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.arrows}>
          <CarouselArrow ref={prevRef} direction="prev" label={fill(labels.previous, { label })} />
          <CarouselArrow ref={nextRef} direction="next" label={fill(labels.next, { label })} />
        </div>

        <div ref={scrollbarRef} className={styles.scrollbar}>
          <div className={styles.drag} />
        </div>
      </div>
    </div>
  );
}
