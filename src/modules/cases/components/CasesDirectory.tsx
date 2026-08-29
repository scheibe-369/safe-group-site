import { caseStudies } from "../data/cases";
import { groupBySector } from "../utils/group-by-sector";
import { CaseIndex } from "./CaseIndex";
import { CasesBySector } from "./CasesBySector";
import { CasesDemoNotice } from "./CasesDemoNotice";
import { CasesSectorNav } from "./CasesSectorNav";

/**
 * Composicao da rota /cases: barra de setores, um carrossel por setor e o
 * indice completo em texto.
 *
 * A seccao tem overflow-x: clip porque o trilho dos carrosseis sangra em
 * 100vw para fora do .safe-container. O clip corta o excesso sem criar um
 * contexto de scroll, ao contrario do hidden.
 */
export function CasesDirectory() {
  const sectors = groupBySector(caseStudies);

  return (
    <section className="safe-section overflow-x-clip bg-[var(--safe-black)]">
      <div className="safe-container">
        <CasesDemoNotice className="mb-6" />
        <CasesSectorNav sectors={sectors} />
      </div>

      <div className="safe-container mt-20 lg:mt-24">
        <CasesBySector sectors={sectors} />
      </div>

      <div className="safe-container mt-28 lg:mt-32">
        <CaseIndex items={caseStudies} />
      </div>
    </section>
  );
}
