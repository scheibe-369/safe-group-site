import Link from "next/link";
import { SafeMark3D } from "./SafeMark3D";
import { SafeWordmark } from "./SafeWordmark";

/**
 * Marca da barra em vetor: o simbolo 3D vindo de `logo3d.svg`, um filete e o
 * wordmark "SAFE GROUP", tudo em `currentColor`. Assim a marca inteira passa de
 * branco a preto quando o menu abre e a barra fica sobre o painel claro, sem
 * segunda imagem nem filtro.
 */
export function BrandLogo({ label, onClick }: { label: string; onClick?: () => void }) {
  return (
    <Link href="/" aria-label={label} onClick={onClick} className="site-nav__brand pointer-events-auto flex min-h-11 shrink-0 items-center gap-[0.75em] text-white">
      <SafeMark3D className="h-[2.75em] w-auto" />
      <span aria-hidden className="h-[2.25em] w-px bg-current opacity-60" />
      <SafeWordmark className="h-[1.9em] w-auto" />
    </Link>
  );
}
