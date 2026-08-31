import { solutions, solutionsKicker } from "../data/solutions";
import { SolutionsMenu } from "./SolutionsMenu";
import { SolutionsPanels } from "./SolutionsPanels";
import { SolutionsStage } from "./SolutionsStage";

/**
 * Secção de Soluções da Home. O palco é a única peça de cliente; o menu e os
 * painéis são renderizados no servidor e entregues por `children`, para a copy
 * e as imagens não atravessarem a fronteira.
 */
export function SolutionsSection() {
  return (
    <SolutionsStage count={solutions.length}>
      <SolutionsMenu items={solutions} />
      <SolutionsPanels items={solutions} kicker={solutionsKicker} />
    </SolutionsStage>
  );
}
