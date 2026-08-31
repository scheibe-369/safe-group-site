import type { Solution } from "../types/solution";

/**
 * Coluna vertical à direita, presa ao topo enquanto a secção passa. É
 * decorativa: repete os títulos dos painéis, não recebe clique e fica fora da
 * árvore de acessibilidade para não duplicar a lista de soluções para quem usa
 * leitor de ecrã. O item aceso é escrito pelo `useSolutionsStack`.
 */
export function SolutionsMenu({ items }: { items: Solution[] }) {
  return (
    <div className="solutions__menu" aria-hidden="true">
      <ul className="solutions__menu-list">
        {items.map((item, index) => (
          <li
            key={item.slug}
            className="solutions__menu-item"
            data-menu-item=""
            data-active={index === 0 ? "true" : "false"}
          >
            {item.menuLabel}
          </li>
        ))}
      </ul>
    </div>
  );
}
