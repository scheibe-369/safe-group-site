import Link from "next/link";
import { ArrowIcon } from "@/shared/ui/ArrowIcon";
import type { CaseStudy } from "../types/case-study";
import type { CasesContent } from "../types/content";

type CaseIndexProps = {
  items: CaseStudy[];
  /** Enderecos do detalhe por slug, ja resolvidos para o idioma actual. */
  hrefs: Record<string, string>;
  title: string;
  count: CasesContent["directory"]["indexCount"];
  demoTag: string;
};

/**
 * Indice completo em texto. Peca que falta no desenho de referencia.
 *
 * Um carrossel navega bem por impulso e mal por intencao: nao ha forma rapida
 * de chegar a um case especifico e metade dos links fica atras de transformacoes
 * de JavaScript. Este bloco resolve as duas coisas, com todos os slugs em
 * ligacoes diretas e um percurso de teclado linear que nao obriga a atravessar
 * o trilho.
 */
export function CaseIndex({ items, hrefs, title, count, demoTag }: CaseIndexProps) {
  return (
    <section aria-labelledby="indice-cases">
      <div className="flex items-baseline justify-between gap-6 border-b border-white/15 pb-5">
        <h2
          id="indice-cases"
          className="font-display text-2xl font-semibold tracking-[-.03em] sm:text-3xl"
        >
          {title}
        </h2>
        <span className="shrink-0 text-[11px] uppercase tracking-[.14em] text-white/40">
          {String(items.length).padStart(2, "0")} {items.length === 1 ? count.singular : count.plural}
        </span>
      </div>

      <ul>
        {items.map((item, index) => (
          <li key={item.slug}>
            <Link
              href={hrefs[item.slug] ?? ""}
              className="group grid grid-cols-[2.5rem_1fr_auto] items-center gap-x-4 gap-y-1 border-b border-white/10 py-6 transition-colors duration-300 hover:border-[var(--safe-red)] sm:grid-cols-[3rem_1fr_1fr_auto] sm:gap-x-8"
            >
              <span className="self-start text-[11px] tabular-nums text-white/30 transition-colors duration-300 group-hover:text-[var(--safe-red)] sm:self-center">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="min-w-0">
                <span className="flex items-center gap-2">
                  <span className="block truncate text-lg text-white sm:text-xl">{item.client}</span>
                  {item.isDemo && (
                    <span className="shrink-0 text-[10px] uppercase tracking-[.14em] text-white/35">
                      {demoTag}
                    </span>
                  )}
                </span>
                <span className="mt-1 block text-[11px] uppercase tracking-[.14em] text-white/40 sm:hidden">
                  {item.sector}
                </span>
              </span>

              <span className="hidden min-w-0 truncate text-[11px] uppercase tracking-[.14em] text-white/40 sm:block">
                {item.sector}
              </span>

              <span className="flex items-center gap-3 text-[11px] uppercase tracking-[.14em] text-white/40 transition-colors duration-300 group-hover:text-white">
                <span className="hidden lg:inline">{item.area}</span>
                <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
