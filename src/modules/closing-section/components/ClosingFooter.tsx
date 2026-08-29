"use client";

import Link from "next/link";
import { ArrowIcon } from "@/shared/ui/ArrowIcon";
import type { ClosingSectionContent } from "../types";

const columnHeader = "text-[11px] uppercase tracking-[.18em] text-white/45";
const columnItem = "block py-1.5 text-sm text-white/55 transition-colors duration-300 hover:text-white";

/**
 * Rodape da coluna direita. Fecha a Home, por isso carrega as redes, a
 * navegacao e a barra legal.
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

        <div>
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

      <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/10 pt-6 text-xs text-white/40">
        <p>
          © {year} {f.copyright}
        </p>
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="group ml-auto inline-flex items-center gap-1.5 py-1.5 transition-colors duration-300 hover:text-white"
        >
          {f.backToTop}
          <ArrowIcon className="h-3.5 w-3.5 -rotate-90 transition-transform duration-300 group-hover:-translate-y-0.5" />
        </button>
      </div>
    </footer>
  );
}
