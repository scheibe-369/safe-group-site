import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseDetail } from "@/modules/cases/components/CaseDetail";
import { caseStudies } from "@/modules/cases/data/cases";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() { return caseStudies.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = caseStudies.find((entry) => entry.slug === slug);
  return item ? { title: item.client, description: item.summary } : { title: "Case não encontrado" };
}

export default async function CasePage({ params }: Props) {
  const { slug } = await params;
  const item = caseStudies.find((entry) => entry.slug === slug);
  if (!item) notFound();
  return <CaseDetail item={item} />;
}
