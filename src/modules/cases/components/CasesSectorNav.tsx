import type { CaseSector } from "../utils/group-by-sector";

/**
 * Barra de ancoras derivada dos setores presentes nos dados. Nada hardcoded:
 * cresce sozinha quando entrar um case de um setor novo.
 *
 * Com um unico setor a barra nao navega para lado nenhum, entao nao renderiza.
 */
export function CasesSectorNav({ sectors }: { sectors: CaseSector[] }) {
  if (sectors.length < 2) return null;

  return (
    <nav aria-label="Navegar por setor" className="border-y border-white/15 py-5">
      <ul className="flex flex-wrap items-center gap-x-2 gap-y-2">
        {sectors.map((sector) => (
          <li key={sector.id}>
            <a
              href={`#${sector.id}`}
              className="group flex items-center gap-2.5 border border-white/15 px-3.5 py-2.5 text-[11px] uppercase tracking-[.14em] text-white/55 transition-colors duration-300 hover:border-[var(--safe-red)] hover:text-white"
            >
              {sector.name}
              <span className="text-[10px] tabular-nums text-white/30 transition-colors duration-300 group-hover:text-[var(--safe-red)]">
                {String(sector.items.length).padStart(2, "0")}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
