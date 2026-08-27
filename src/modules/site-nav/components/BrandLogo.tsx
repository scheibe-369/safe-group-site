import Image from "next/image";
import Link from "next/link";

/**
 * Lockup oficial em duas camadas: a clara serve a barra sobre o site escuro, a
 * escura faz cross-fade por cima quando o menu abre e a barra passa a ficar
 * sobre o painel claro. As duas partilham a mesma silhueta, por isso a de
 * cima cobre a de baixo por completo. A escura so e precisa com o menu
 * aberto, por isso pede prioridade baixa ao browser.
 */
export function BrandLogo({ label, onClick }: { label: string; onClick?: () => void }) {
  const size = "h-11 w-auto xl:h-12";
  const sizes = "(min-width: 1280px) 163px, 149px";
  return (
    <Link href="/" aria-label={label} onClick={onClick} className="pointer-events-auto relative flex min-h-11 shrink-0 items-center">
      <Image src="/brand/safe-lockup.webp" alt="" width={1064} height={314} sizes={sizes} priority className={size} />
      <Image src="/brand/safe-lockup-dark.webp" alt="" width={1064} height={314} sizes={sizes} fetchPriority="low" aria-hidden className={`site-nav__brand-dark absolute inset-0 ${size}`} />
    </Link>
  );
}
