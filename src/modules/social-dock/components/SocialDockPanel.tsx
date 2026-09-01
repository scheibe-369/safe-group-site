"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { socialNetworks } from "../data/networks";
import type { SocialDockCopy, SocialNetwork } from "../types/social-network";
import { NetworkGlyph } from "./NetworkGlyph";

const row = "group flex items-center justify-end gap-3";

const chip =
  "pointer-events-none rounded-full border border-white/10 bg-[var(--safe-panel)]/95 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[.14em] text-white/70 opacity-0 shadow-[0_10px_24px_rgba(0,0,0,.5)] backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100";

const bubble =
  "flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-[var(--safe-panel)] text-white/70 shadow-[0_10px_28px_rgba(0,0,0,.55)] transition-colors duration-300 group-hover:border-[var(--dock-accent)] group-hover:text-[var(--dock-accent)] group-focus-within:border-[var(--dock-accent)] group-focus-within:text-[var(--dock-accent)] sm:h-12 sm:w-12";

// Mesmo tamanho do botao selo (h-14/w-14, sm:h-16/w-16): a bolinha da rede e
// mais pequena que o selo, entao centra-la sozinha desalinhava os dois
// circulos (a coluna alinha pela borda direita, e bordas iguais com
// diametros diferentes dao centros diferentes). Este slot fixa a mesma
// largura do selo e centra a bolinha dentro dele, os centros passam a
// coincidir.
const iconSlot = "flex h-14 w-14 items-center justify-center sm:h-16 sm:w-16";

function NetworkRow({ network }: { network: SocialNetwork }) {
  const content = (
    <>
      <span className={chip}>{network.label}</span>
      <span className={iconSlot}>
        <span className={bubble}>
          <NetworkGlyph id={network.id} className="h-[1.125rem] w-[1.125rem]" />
        </span>
      </span>
    </>
  );

  // Sem perfil confirmado o atalho fica sem `href`, tal como as redes do
  // rodape. Um `<a>` vazio anuncia-se como ligacao e nao leva a lado nenhum,
  // por isso o estado por confirmar sai como texto e imagem, nao como link.
  return network.href ? (
    <a href={network.href} target="_blank" rel="noreferrer noopener" className={row}>
      {content}
    </a>
  ) : (
    <span className={row}>{content}</span>
  );
}

/**
 * Atalho fixo no canto do ecra, no formato dos botoes de conversa que ficam
 * sempre visiveis. Em repouso mostra o selo da marca. Ao abrir, levanta as
 * redes numa coluna, a comecar pela que esta mais perto do dedo.
 *
 * A copy chega por prop, resolvida no `SocialDock`: sao tres rotulos, mas
 * importar o getter aqui dentro trazia os cinco idiomas para o pacote.
 */
export function SocialDockPanel({ copy }: { copy: SocialDockCopy }) {
  const [open, setOpen] = useState(false);
  const [atPageEnd, setAtPageEnd] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const sentinelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);

  // O dock e o ultimo filho do body, por isso a sentinela cai no fim do
  // documento. Quando ela se aproxima do ecra, o fim da pagina chegou e o
  // botao sai de cena: naquele canto esta a barra legal, com o credito de
  // producao e o voltar ao topo, e o dock tapava os dois. As redes nao se
  // perdem, o proprio rodape ja as lista.
  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setAtPageEnd(entry.isIntersecting);
        if (entry.isIntersecting) setOpen(false);
      },
      { rootMargin: "0px 0px 160px 0px" }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setOpen(false);
      triggerRef.current?.focus();
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      <div ref={sentinelRef} aria-hidden="true" className="h-px w-full" />
      <div
        ref={rootRef}
        className={`fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 transition-[opacity,transform] duration-300 sm:bottom-8 sm:right-8 ${atPageEnd ? "pointer-events-none translate-y-4 opacity-0" : "translate-y-0 opacity-100"}`}
      >
        <ul id="safe-social-dock" aria-label={copy.listLabel} aria-hidden={!open} inert={!open} className="flex flex-col items-end gap-3">
          {socialNetworks.map((network, index) => (
            <li
              key={network.id}
              style={
                {
                  "--dock-accent": network.accent,
                  // A que encosta ao selo abre primeiro, para a coluna crescer a
                  // partir do botao e nao cair sobre ele.
                  transitionDelay: open ? `${(socialNetworks.length - 1 - index) * 55}ms` : "0ms",
                } as CSSProperties
              }
              className={`transition-[opacity,transform] duration-300 ease-out ${open ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"}`}
            >
              <NetworkRow network={network} />
            </li>
          ))}
        </ul>

        <button
          ref={triggerRef}
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="safe-social-dock"
          aria-label={open ? copy.close : copy.open}
          className={`relative flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-[0_14px_36px_rgba(0,0,0,.6)] ring-1 transition-[transform,box-shadow] duration-300 hover:scale-105 sm:h-16 sm:w-16 ${open ? "ring-2 ring-[var(--safe-red)]" : "ring-white/20"}`}
        >
          {!open && <span aria-hidden="true" className="absolute inset-0 animate-ping rounded-full bg-[var(--safe-red)]/25 [animation-duration:3s] motion-reduce:hidden" />}
          <Image
            src="/brand/safe-seal-icon.webp"
            alt=""
            width={128}
            height={128}
            sizes="64px"
            className={`relative h-full w-full rounded-full object-contain transition-transform duration-500 ${open ? "rotate-[18deg]" : ""}`}
          />
        </button>
      </div>
    </>
  );
}
