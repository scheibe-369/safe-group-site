import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/cases-carousel.module.css";
import type { CaseStudy } from "../../types/case-study";
import type { CasesCarouselLabels } from "../../types/content";
import { fill } from "../../utils/fill";

type CaseSlideProps = {
  item: CaseStudy;
  /** Endereco do detalhe ja resolvido para o idioma actual. */
  href: string;
  /** Texto do slot da direita. Setor na home, area na rota /cases. */
  meta: string;
  labels: CasesCarouselLabels;
};

export function CaseSlide({ item, href, meta, labels }: CaseSlideProps) {
  return (
    <div role="listitem" className={`swiper-slide ${styles.slide}`}>
      <div className={styles.imgWrapper}>
        {item.isDemo && (
          <span className="absolute left-3 top-3 z-10 border border-white/20 bg-black/70 px-2 py-1 text-[10px] uppercase tracking-[.14em] text-white/70">
            {labels.demoTag}
          </span>
        )}
        <Image
          src={item.cover}
          alt={fill(labels.coverAlt, { client: item.client })}
          fill
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 76vw"
          className={styles.img}
        />
      </div>

      <div className={styles.info}>
        <p className={styles.title}>{item.client}</p>

        {/* Mascara com overflow escondido: a meta sobe e o CTA entra por baixo. */}
        <div className={styles.mask}>
          <span className={styles.meta}>{meta}</span>
          <span className={styles.hoverLabel} aria-hidden="true">
            {labels.hoverLabel}
          </span>
        </div>
      </div>

      <Link
        href={href}
        aria-label={fill(labels.slideAriaLabel, { client: item.client, meta })}
        className={styles.openLink}
      />
    </div>
  );
}
