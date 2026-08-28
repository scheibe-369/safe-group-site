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
      className="site-nav__toggle pointer-events-auto -mr-2 flex min-h-11 items-center gap-1 pl-2 pr-2 text-white"
    >
      <TextMask label={labels.open} swapLabel={labels.close} copyClassName="text-[var(--safe-red)]" className="text-right text-(length:--nav-size-small) font-medium uppercase tracking-[.12em]" />
      <span aria-hidden className="flex h-8 w-8 flex-col items-center justify-center gap-[3.25px]">
        <span className="site-nav__burger-line" />
        <span className="site-nav__burger-line" />
        <span className="site-nav__burger-line" />
      </span>
    </button>
  );
}
