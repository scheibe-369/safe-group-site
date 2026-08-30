"use client";

import Link from "next/link";
import { ArrowIcon } from "@/shared/ui/ArrowIcon";
import type { ClosingSectionContent } from "../types";

const columnHeader = "text-[11px] uppercase tracking-[.18em] text-white/45";
const columnItem = "block py-1 text-sm text-white/55 transition-colors duration-300 hover:text-white lg:py-1.5";

/**
 * Rodape da coluna direita. Fecha a Home, por isso carrega as redes, a
 * navegacao e a barra legal com o credito de producao obrigatorio.
 *
 * As redes aparecem sem ligacao enquanto os perfis nao estiverem confirmados.
 * Um `href` a apontar para lado nenhum e pior do que texto: promete destino e
 * nao entrega. Assim que houver perfil, basta preencher o `href` no conteudo.
 */
export function ClosingFooter({ content, year }: { content: ClosingSectionContent; year: number }) {
  const f = content.footer;

  return (
    <footer>
      <div className="grid grid-cols-2 gap-8">
        <div>
          <h3 className={columnHeader}>{f.socialHeader}</h3>
          <ul className="mt-4">
            {f.socials.map((social) => (
              <li key={social.label}>
                {social.href ? (
                  <a href={social.href} target="_blank" rel="noreferrer noopener" className={columnItem}>
                    {social.label}
                  </a>
                ) : (
                  <span className={`${columnItem} cursor-default hover:text-white/55`}>{social.label}</span>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="text-right lg:text-left">
          <h3 className={columnHeader}>{f.navHeader}</h3>
          <ul className="mt-4">
            {f.navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={columnItem}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Barra legal. Abaixo de `lg` empilha os creditos a esquerda e o
          "voltar ao topo" ganha uma linha propria ao centro: a barra unica so
          cabe em telemovel se o copyright e o credito de producao forem
          truncados, e nenhum dos dois pode ser cortado. A partir de `lg` volta
          a ser a barra de uma linha, com o botao encostado a direita. */}
      <div className="mt-10 flex flex-col gap-y-2 border-t border-white/10 pt-6 text-xs text-white/40 lg:flex-row lg:flex-wrap lg:items-center lg:gap-x-6 lg:gap-y-3">
        <p>
          © {year} {f.copyright}
        </p>
        <a
          href={f.producedBy.href}
          target="_blank"
          rel="noopener"
          className="transition-colors duration-300 hover:text-white"
        >
          {f.producedBy.label}
        </a>
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="group mt-4 inline-flex items-center justify-center gap-1.5 self-center py-1.5 transition-colors duration-300 hover:text-white lg:mt-0 lg:ml-auto lg:self-auto"
        >
          {f.backToTop}
          <ArrowIcon className="h-3.5 w-3.5 -rotate-90 transition-transform duration-300 group-hover:-translate-y-0.5" />
        </button>
      </div>
    </footer>
  );
}
