/**
 * Rotulo com duas copias sobrepostas. O elemento que dispara a troca leva a
 * classe `nav-mask-trigger` (ou `data-swap="true"` para forcar o estado), e a
 * segunda copia pode ter texto e cor diferentes, como no alternador do menu.
 */
export function TextMask({ label, swapLabel, copyClassName = "", className = "" }: { label: string; swapLabel?: string; copyClassName?: string; className?: string }) {
  return (
    <span className={`nav-mask ${className}`}>
      <span className="nav-mask__base">{label}</span>
      <span aria-hidden className={`nav-mask__copy ${copyClassName}`}>{swapLabel ?? label}</span>
    </span>
  );
}
