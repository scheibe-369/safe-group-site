import type { Ref } from "react";
import { TextMask } from "./TextMask";

type HamburgerToggleProps = {
  ref?: Ref<HTMLButtonElement>;
  open: boolean;
  labels: { open: string; close: string; ariaOpen: string; ariaClose: string };
  controls: string;
  onToggle: () => void;
};

/**
 * Rotulo "Menu" mais tres tracos. O rotulo troca por "Fechar" a vermelho com a
 * mascara de texto e os tracos viram um X; as duas coisas sao CSS ligado a
 * `data-open` no cabecalho, aqui so vive o botao.
 */
export function HamburgerToggle({ ref, open, labels, controls, onToggle }: HamburgerToggleProps) {
  return (
    <button
      ref={ref}
      type="button"
      onClick={onToggle}
      aria-expanded={open}
      aria-controls={controls}
      aria-label={open ? labels.ariaClose : labels.ariaOpen}
      data-swap={open}
      className="site-nav__toggle pointer-events-auto -mr-[0.5em] flex min-h-11 items-center gap-[0.25em] px-[0.5em] text-white"
    >
      <TextMask label={labels.open} swapLabel={labels.close} copyClassName="text-[var(--safe-red)]" className="text-right text-[0.75em] font-medium uppercase tracking-[.12em]" />
      <span aria-hidden className="flex h-[2em] w-[2em] flex-col items-center justify-center gap-[0.2em]">
        <span className="site-nav__burger-line" />
        <span className="site-nav__burger-line" />
        <span className="site-nav__burger-line" />
      </span>
    </button>
  );
}
