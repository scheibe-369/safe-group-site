import type { SolutionFigure } from "../../types/solution";

type Props = {
  items: SolutionFigure[];
};

/**
 * Grelha de números do layout original.
 *
 * Só renderiza quando a solução traz números confirmados. O `AGENTS.md` proíbe
 * inventar métricas, por isso nenhuma solução preenche este campo por omissão:
 * a secção liga sozinha assim que existirem valores reais no ficheiro de dados.
 */
export function SolutionFigures({ items }: Props) {
  if (items.length === 0) return null;

  return (
    <section className="safe-section bg-[var(--safe-black)]">
      <div className="safe-container">
        <ul className="solution-figures__list">
          {items.map((figure, index) => (
            <li key={figure.label} className="solution-figures__card">
              <div className="solution-figures__head">
                <span>{figure.label}</span>
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>
              <div className="solution-figures__value">{figure.value}</div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
