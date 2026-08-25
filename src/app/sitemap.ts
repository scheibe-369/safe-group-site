import type { MetadataRoute } from "next";
import { caseStudies, casesAreDemo } from "@/modules/cases/data/cases";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://safegroup.pt";
  const pages = ["", "/sobre", "/solucoes", "/metodo", "/cases", "/contacto"];
  // Cases de demonstracao nao sao submetidos aos motores de busca.
  const published = casesAreDemo ? [] : caseStudies;
  return [...pages.map((path) => ({ url: `${base}${path}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: path === "" ? 1 : .8 })), ...published.map(({ slug }) => ({ url: `${base}/cases/${slug}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: .7 }))];
}
