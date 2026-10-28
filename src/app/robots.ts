import type { MetadataRoute } from "next";
// Import por caminho profundo, para o robots nao arrastar componentes do modulo.
import { isIndexable, siteUrl } from "@/modules/seo/data/site";

/**
 * Rastreio aberto a todos os agentes, incluindo os de modelos de IA (GPTBot,
 * ClaudeBot, Google-Extended e afins).
 *
 * Ate 28/10/2026 os rastreadores de IA estavam bloqueados aqui. O utilizador
 * reverteu essa decisao nessa data: o objetivo passou a ser a Safe aparecer
 * nas respostas de assistentes de IA, e isso pede que eles possam ler o site.
 *
 * O preview tambem fica aberto ao rastreio, mas sem sitemap: as paginas dele
 * saem com `noindex`, e o motor de busca so ve essa marca se puder rastrear.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    ...(isIndexable ? { sitemap: `${siteUrl}/sitemap.xml` } : {}),
  };
}
