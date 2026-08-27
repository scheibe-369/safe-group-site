import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/cases-carousel.module.css";
import type { CaseStudy } from "../../types/case-study";

type CaseSlideProps = {
  item: CaseStudy;
  /** Texto do slot da direita. Setor na home, area na rota /cases. */
  meta: string;
  /** Rotulo revelado no hover, no lugar da meta. */
  hoverLabel: string;
};

export function CaseSlide({ item, meta, hoverLabel }: CaseSlideProps) {
  return (
    <div role="listitem" className={`swiper-slide ${styles.slide}`}>
      <div className={styles.imgWrapper}>
        {item.isDemo && (
          <span className="absolute left-3 top-3 z-10 border border-white/20 bg-black/70 px-2 py-1 text-[10px] uppercase tracking-[.14em] text-white/70">
            Demonstração
          </span>
        )}
        <Image
          src={item.cover}
          alt={`Case ${item.client}`}
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
            {hoverLabel}
          </span>
        </div>
      </div>

      <Link
        href={`/cases/${item.slug}`}
        aria-label={`${item.client}, ${meta}`}
        className={styles.openLink}
      />
    </div>
  );
}
