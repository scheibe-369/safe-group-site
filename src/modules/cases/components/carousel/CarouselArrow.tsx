import { forwardRef } from "react";
import styles from "../../styles/cases-carousel.module.css";

type CarouselArrowProps = {
  direction: "prev" | "next";
  label: string;
};

/** Setas do carrossel de referencia, redesenhadas como SVG inline. */
const PATHS = {
  prev: "M8.43817 6.49927L3.5 11.8471H15V13.1732H3.5L8.43817 18.4993H6.64274L1 12.4993L6.64275 6.49927H8.43817Z",
  next: "M7.56183 18.4993L12.5 13.1515H1V11.8254H12.5L7.56183 6.49927H9.35726L15 12.4993L9.35725 18.4993H7.56183Z",
} as const;

export const CarouselArrow = forwardRef<HTMLButtonElement, CarouselArrowProps>(
  function CarouselArrow({ direction, label }, ref) {
    return (
      <button ref={ref} type="button" aria-label={label} className={styles.arrowBtn}>
        <span className={styles.arrowIcon} aria-hidden="true">
          <svg width="100%" height="100%" viewBox="0 0 16 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d={PATHS[direction]} fill="currentColor" />
          </svg>
        </span>
      </button>
    );
  },
);
