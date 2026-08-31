import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SolutionDetail, findSolution, solutions } from "@/modules/solutions";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return solutions.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = findSolution(slug);
  if (!item) return { title: "Solução não encontrada" };

  return {
    title: item.name,
    description: item.metaDescription,
    alternates: { canonical: `/solucoes/${item.slug}` },
    // Sem isto, as seis paginas herdavam o cartao de partilha da Home.
    openGraph: {
      title: `${item.name} | Safe Group`,
      description: item.metaDescription,
      url: `/solucoes/${item.slug}`,
      type: "article",
    },
  };
}

export default async function SolutionPage({ params }: Props) {
  const { slug } = await params;
  const item = findSolution(slug);
  if (!item) notFound();

  return <SolutionDetail item={item} />;
}
