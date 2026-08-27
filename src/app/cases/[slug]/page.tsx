import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseDetail } from "@/modules/cases/components/CaseDetail";
import { caseStudies } from "@/modules/cases/data/cases";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() { return caseStudies.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = caseStudies.find((entry) => entry.slug === slug);
  if (!item) return { title: "Case não encontrado" };
  // Um case de demonstração fica fora do índice; um case real entra normalmente.
  const robots = item.isDemo ? { robots: { index: false, follow: false } } : {};
  return { title: item.client, description: item.summary, ...robots };
}

export default async function CasePage({ params }: Props) {
  const { slug } = await params;
  const item = caseStudies.find((entry) => entry.slug === slug);
  if (!item) notFound();
  return <CaseDetail item={item} />;
}
