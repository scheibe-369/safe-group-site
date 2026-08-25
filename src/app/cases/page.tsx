import type { Metadata } from "next";
import { CasesDirectory } from "@/modules/cases/components/CasesDirectory";
import { casesAreDemo } from "@/modules/cases/data/cases";
import { PageHero } from "@/shared/layout/PageHero";

export const metadata: Metadata = {
  title: "Cases",
  description: "Cases multissetoriais da Safe Group com contexto, intervenção e resultados verificáveis.",
  // Enquanto os cases forem de demonstração, a rota fica fora dos motores de busca.
  ...(casesAreDemo ? { robots: { index: false, follow: false } } : {}),
};

export default function CasesPage() {
  return <><PageHero kicker="Cases" title="A estrutura por trás do resultado." copy="Automóvel, financeiro, software e SaaS: cada case será apresentado com contexto, desafio, intervenção e prova. Sem métricas soltas e sem promessas sem fonte." /><CasesDirectory /></>;
}
