import type { Metadata } from "next";
import { CasesDirectory } from "@/modules/cases/components/CasesDirectory";
import { casesAreDemo } from "@/modules/cases/data/cases";
import { PageHero } from "@/shared/layout/PageHero";

export const metadata: Metadata = {
  title: "Cases",
  description: "Cases da Safe Group apresentados com contexto, decisão, intervenção e resultados verificáveis.",
  // Enquanto os cases forem de demonstração, a rota fica fora dos motores de busca.
  ...(casesAreDemo ? { robots: { index: false, follow: false } } : {}),
};

export default function CasesPage() {
  return <><PageHero kicker="Cases" title="Antes do resultado, existe uma decisão bem estruturada." copy="Cada case mostra o contexto, a prioridade, a intervenção e a prova disponível. Sem métricas soltas e sem promessas sem fonte." /><CasesDirectory /></>;
}
