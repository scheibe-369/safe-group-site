"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { SiteLogo } from "./SiteLogo";

const links = [
  { href: "/solucoes", label: "Soluções" },
  { href: "/metodo", label: "Método" },
  { href: "/cases", label: "Cases" },
  { href: "/sobre", label: "Sobre" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${scrolled || open ? "border-b border-white/10 bg-black/90 backdrop-blur-xl" : "bg-gradient-to-b from-black/80 to-transparent"}`}>
      <div className="safe-edge flex min-h-24 items-center justify-between gap-6">
        <SiteLogo priority />
        <nav aria-label="Navegação principal" className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className={`min-h-11 content-center text-xs font-medium uppercase tracking-[.12em] transition-colors ${pathname === link.href ? "text-white" : "text-white/60 hover:text-white"}`}>
              {link.label}
            </Link>
          ))}
        </nav>
        <Link href="/contacto" className="hidden min-h-[2.875rem] items-center border border-white/55 px-5 text-sm font-semibold uppercase tracking-[.1em] text-white transition-colors hover:border-[var(--safe-red)] hover:bg-[var(--safe-red)] lg:inline-flex">
          Fale com a Safe
        </Link>
        <button type="button" onClick={() => setOpen((value) => !value)} className="flex h-11 w-11 items-center justify-center border border-white/25 text-white lg:hidden" aria-expanded={open} aria-label={open ? "Fechar menu" : "Abrir menu"}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open && (
        <nav aria-label="Navegação móvel" className="border-t border-white/10 bg-black px-4 pb-8 pt-4 lg:hidden">
          {[...links, { href: "/contacto", label: "Contacto" }].map((link) => (
            <Link key={link.href} href={link.href} className="block min-h-12 border-b border-white/10 py-4 font-display text-2xl text-white">
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
