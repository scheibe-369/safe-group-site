import createMiddleware from "next-intl/middleware";
import { routing } from "@/shared/i18n/routing";

export default createMiddleware(routing);

/**
 * Ficam de fora do encaminhamento por idioma: a API, os ficheiros do Next, os
 * ficheiros estaticos (qualquer caminho com ponto, o que apanha imagens, video,
 * `robots.txt` e `sitemap.xml`) e as duas paginas internas de decisao
 * (`/marca-3d` e `/tipografia`), que nao fazem parte do site publico e
 * continuam so em pt-PT.
 */
export const config = {
  matcher: ["/((?!api|_next|marca-3d|tipografia|.*\\..*).*)"],
};
