import type { MetadataRoute } from "next";
import { caseStudies } from "@/modules/cases/data/cases";
// Import por caminho profundo, e nao pelo barrel, para o grafo do sitemap nao
// arrastar os componentes do modulo. O mesmo criterio da linha acima.
import { solutions } from "@/modules/solutions/data/solutions";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://safegroup.pt";
  const pages = ["", "/cases"];
  // Cases de demonstracao nao sao submetidos aos motores de busca.
  const published = caseStudies.filter((item) => !item.isDemo);
  // `/solucoes` fica de fora: e um redirecionamento permanente para a ancora da
  // Home, nao uma pagina. As paginas de cada solucao entram uma a uma.
  return [...pages.map((path) => ({ url: `${base}${path}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: path === "" ? 1 : .8 })), ...solutions.map(({ slug }) => ({ url: `${base}/solucoes/${slug}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: .8 })), ...published.map(({ slug }) => ({ url: `${base}/cases/${slug}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: .7 }))];
}
