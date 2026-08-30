import type { Metadata } from "next";
import { CasesDirectory } from "@/modules/cases/components/CasesDirectory";
import { caseStudies, hasDemoCases } from "@/modules/cases/data/cases";
import { PageHero } from "@/shared/layout/PageHero";

export const metadata: Metadata = {
  title: "Cases",
  description: "Cases da Safe Group apresentados com contexto, decisão, intervenção e resultados verificáveis.",
  // A rota só fica fora dos motores de busca se todos os cases ainda forem demonstração.
  ...(caseStudies.every((item) => item.isDemo) && hasDemoCases(caseStudies)
    ? { robots: { index: false, follow: false } }
    : {}),
};

export default function CasesPage() {
  return (
    <>
      <PageHero
        kicker="Cases"
        title={<>Antes do resultado, existe uma <span className="safe-shine safe-shine--silver">decisão</span> bem estruturada.</>}
        copy="Cada case mostra o contexto, a prioridade, a intervenção e a prova disponível. Sem métricas soltas e sem promessas sem fonte."
      />
      <CasesDirectory />
    </>
  );
}
