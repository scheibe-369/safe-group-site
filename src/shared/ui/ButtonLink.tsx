import Link from "next/link";
import { ArrowIcon } from "./ArrowIcon";
import { LongArrowIcon } from "./LongArrowIcon";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  /** `short` mantém o comportamento anterior e continua a ser o valor por omissão. */
  arrow?: "short" | "long" | "none";
  className?: string;
};

const base = "group inline-flex min-h-[2.875rem] items-center justify-center gap-2.5 text-sm font-semibold uppercase tracking-[0.1em] transition-colors duration-300";

const variants = {
  primary: "border border-[var(--safe-red)] bg-[var(--safe-red)] px-5 text-white hover:bg-[#ff1734]",
  secondary: "border border-white/30 bg-black/20 px-5 text-white hover:border-white/70 hover:bg-white/5",
  ghost: "text-white hover:text-[var(--safe-red)]",
} as const;

export function ButtonLink({ href, children, variant = "primary", arrow = "short", className = "" }: ButtonLinkProps) {
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
      {arrow === "short" && <ArrowIcon className="h-[1.125rem] w-[1.125rem] transition-transform duration-300 group-hover:translate-x-1" />}
      {arrow === "long" && <LongArrowIcon className="ml-1.5 h-[.8125rem] w-[3.25rem] text-[var(--safe-red)] transition-transform duration-300 group-hover:translate-x-1" />}
    </Link>
  );
}
