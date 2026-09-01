import type { MetadataRoute } from "next";

/**
 * Rastreadores de modelos de IA, bloqueados por decisao do cliente.
 *
 * Ate 31/08/2026 esta lista vinha do bloco "Managed Content" que a Cloudflare
 * injectava a cabeca do ficheiro. Esse bloco trazia com ele uma linha
 * `Content-Signal: search=yes,ai-train=no,use=reference` que nao faz parte do
 * protocolo do robots.txt, e que qualquer validador (o do Lighthouse incluido)
 * recusa como diretiva desconhecida. O bloco foi desligado na zona e a
 * politica passou para aqui, escrita em diretivas que toda a gente entende.
 */
const aiCrawlers = [
  "Amazonbot",
  "Applebot-Extended",
  "Bytespider",
  "CCBot",
  "ClaudeBot",
  "CloudflareBrowserRenderingCrawler",
  "Google-Extended",
  "GPTBot",
  "meta-externalagent",
];

export default function robots(): MetadataRoute.Robots {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://safegroup.pt";
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: aiCrawlers, disallow: "/" },
    ],
    sitemap: `${base}/sitemap.xml`,
  };
}
