import createNextIntlPlugin from "next-intl/plugin";
import type { NextConfig } from "next";

// A configuracao por pedido do next-intl vive em `src/shared/i18n`, junto do
// resto da infraestrutura transversal, e nao na pasta `src/i18n` por omissao.
const withNextIntl = createNextIntlPlugin("./src/shared/i18n/request.ts");

/**
 * Agentes que recebem os metadados dentro do `<head>` em vez de os receberem
 * em streaming no fim do `<body>`.
 *
 * O layout raiz resolve o idioma a partir do pedido, o que torna as rotas
 * dinamicas e liga o streaming de metadados do Next. Para um browser isso e
 * indiferente: o React poe as etiquetas no sitio durante a hidratacao. Para
 * quem nao corre JavaScript nao e, e a Home chegava sem `<title>`, sem
 * `description`, sem `canonical` e sem os seis `hreflang`.
 *
 * A lista comeca na de origem do Next e acrescenta o que faltava: a ferramenta
 * de auditoria (`Chrome-Lighthouse`, que e a que o PageSpeed Insights corre),
 * o inspetor do Google, os rastreadores de IA e os de SEO. O Googlebot fica de
 * fora de proposito, porque executa JavaScript e ganha com o streaming.
 *
 * Definir esta chave substitui a lista de origem do Next por inteiro (ver
 * `next/dist/server/config.js`), por isso a de origem esta aqui repetida.
 */
const htmlLimitedBots =
  /Mediapartners-Google|Slurp|DuckDuckBot|baiduspider|yandex|sogou|bitlybot|tumblr|vkShare|quora link preview|redditbot|ia_archiver|Bingbot|BingPreview|applebot|facebookexternalhit|facebookcatalog|Twitterbot|LinkedInBot|Slackbot|Discordbot|WhatsApp|SkypeUriPreview|Chrome-Lighthouse|Google-InspectionTool|GPTBot|ClaudeBot|PerplexityBot|Bytespider|CCBot|Amazonbot|meta-externalagent|AhrefsBot|SemrushBot|Screaming Frog|Pinterestbot|TelegramBot/i;

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  htmlLimitedBots,
};

export default withNextIntl(nextConfig);
