import { buildLlmsTxt } from "@/modules/seo/utils/llms";

// Gerado no build, como o sitemap: o conteudo so muda quando a copy muda.
export const dynamic = "force-static";

export function GET() {
  return new Response(buildLlmsTxt(), {
    headers: { "content-type": "text/markdown; charset=utf-8" },
  });
}
