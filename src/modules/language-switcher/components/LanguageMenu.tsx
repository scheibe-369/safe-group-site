"use client";

import { useEffect, useRef, useState } from "react";
import { useLocale } from "next-intl";
import type { Locale } from "@/shared/i18n/locales";
import { getLanguageSwitcherContent } from "../data/content";
import { GlobeIcon } from "./GlobeIcon";
import { rememberLocale, useLocaleLinks } from "./useLocaleLinks";

/**
 * Botao de idioma da barra: globo mais o codigo do idioma actual, e uma lista
 * que abre por cima do conteudo com os cinco por extenso.
 *
 * As opcoes sao `<a>` normais, e nao `Link` do Next, de proposito: trocar de
 * idioma tem de recarregar o documento. Com navegacao suave o React fica um
 * instante com o idioma antigo em contexto e o caminho novo no `usePathname`,
 * e nesse intervalo os enderecos saem com o prefixo a dobrar
 * (`/pt-br/es/cases`), que o Next chega a ir buscar e devolve 404. Uma recarga
 * inteira nao tem estado intermedio nenhum.
 */
export function LanguageMenu({ variant = "bar" }: { variant?: "bar" | "panel" }) {
  const [open, setOpen] = useState(false);
  const box = useRef<HTMLDivElement>(null);
  const button = useRef<HTMLButtonElement>(null);
  const links = useLocaleLinks();
  const content = getLanguageSwitcherContent(useLocale());
  const current = links.find((link) => link.active);
  const bar = variant === "bar";

  useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setOpen(false);
      button.current?.focus();
    };
    const onPointer = (event: PointerEvent) => {
      if (!box.current?.contains(event.target as Node)) setOpen(false);
    };

    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [open]);

  const tone = bar
    ? { trigger: "text-white/80 hover:text-white", panel: "border-white/15 bg-[#0b0b0b] text-white", item: "text-white/65 hover:bg-white/5 hover:text-white", active: "text-white" }
    : { trigger: "text-black/60 hover:text-black", panel: "border-black/10 bg-[var(--safe-white)] text-black shadow-[0_10px_30px_rgba(0,0,0,.12)]", item: "text-black/55 hover:bg-black/5 hover:text-black", active: "text-black" };

  return (
    <div ref={box} className="relative">
      <button
        ref={button}
        type="button"
        onClick={() => setOpen((was) => !was)}
        aria-expanded={open}
        aria-haspopup="true"
        aria-label={`${content.heading}: ${current?.label ?? ""}`}
        className={`inline-flex min-h-11 items-center gap-[0.5em] text-[0.75em] font-medium uppercase tracking-[.12em] transition-colors ${tone.trigger}`}
      >
        <GlobeIcon className="h-[1.35em] w-[1.35em]" />
        {current?.short}
      </button>

      {open && (
        <div
          className={`absolute right-0 z-20 mt-[0.5em] min-w-[11em] border py-[0.4em] ${tone.panel} ${bar ? "top-full" : "bottom-full mb-[0.5em] mt-0"}`}
        >
          <ul>
            {links.map((link) => (
              <li key={link.locale}>
                {link.active ? (
                  <span aria-current="true" className={`flex min-h-11 items-center px-[1.1em] text-[0.8125em] font-semibold ${tone.active}`}>
                    {link.label}
                  </span>
                ) : (
                  <a
                    href={link.href}
                    hrefLang={link.locale}
                    aria-label={`${content.switchTo} ${link.label}`}
                    onClick={() => rememberLocale(link.locale as Locale)}
                    className={`flex min-h-11 items-center px-[1.1em] text-[0.8125em] transition-colors ${tone.item}`}
                  >
                    {link.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
