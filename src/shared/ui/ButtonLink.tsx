import Link from "next/link";
import { ArrowIcon } from "./ArrowIcon";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export function ButtonLink({ href, children, variant = "primary", className = "" }: ButtonLinkProps) {
  const style = variant === "primary"
    ? "border-[var(--safe-red)] bg-[var(--safe-red)] text-white hover:bg-[#ff1734]"
    : "border-white/30 bg-black/20 text-white hover:border-white/70 hover:bg-white/5";

  return (
    <Link
      href={href}
      className={`group inline-flex min-h-11 items-center justify-center gap-2.5 border px-[1.15rem] text-[0.8125rem] font-semibold uppercase tracking-[0.1em] transition-colors duration-300 ${style} ${className}`}
    >
      {children}
      <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
    </Link>
  );
}
