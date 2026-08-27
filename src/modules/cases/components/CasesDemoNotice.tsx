import { caseStudies, hasDemoCases } from "../data/cases";

/**
 * Aviso mostrado enquanto existir pelo menos um case de demonstração entre os
 * publicados.
 *
 * Existe porque o site está no ar sob a marca da Safe e um visitante não tem
 * como distinguir um case inventado de um real. Desaparece assim que o
 * último `isDemo: true` sair do array, junto com o `noindex` da respetiva
 * página de case.
 */
export function CasesDemoNotice({ className }: { className?: string }) {
  if (!hasDemoCases(caseStudies)) return null;

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
      Alguns cases abaixo são conteúdo de demonstração, fictícios, para validar o formato.
    </p>
  );
}
