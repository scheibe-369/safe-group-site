import { casesAreDemo } from "../data/cases";

/**
 * Aviso mostrado enquanto os cases publicados forem de demonstração.
 *
 * Existe porque o site está no ar sob a marca da Safe e um visitante não tem
 * como distinguir um case inventado de um real. Desaparece de todo o site
 * assim que `casesAreDemo` passar a `false`, junto com o `noindex` das rotas
 * de case.
 */
export function CasesDemoNotice({ className }: { className?: string }) {
  if (!casesAreDemo) return null;

  return (
    <p
      className={[
        "flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] uppercase tracking-[.14em] text-white/35",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <span aria-hidden="true" className="inline-block h-1.5 w-1.5 shrink-0 bg-[var(--safe-red)]" />
      Conteúdo de demonstração. Estes cases são fictícios e servem para validar o formato.
    </p>
  );
}
