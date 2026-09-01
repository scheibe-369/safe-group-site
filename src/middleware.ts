import { NextResponse, type NextRequest } from "next/server";
import createMiddleware from "next-intl/middleware";
import { isCrawler, localeForCountry } from "@/shared/i18n/geo";
import { localePrefixes } from "@/shared/i18n/locales";
import { localizePathname, routing } from "@/shared/i18n/routing";

const handleI18n = createMiddleware(routing);

/** Escrito pelo seletor de idioma quando o visitante escolhe a lingua a mao. */
const LOCALE_COOKIE = "NEXT_LOCALE";

/**
 * Manda o visitante para o idioma do pais dele, uma vez, e so quando ha razao
 * para isso. Devolve `null` quando nao se mexe.
 *
 * As quatro condicoes existem todas por um motivo:
 *
 * 1. So caminhos sem prefixo. Quem escreveu ou recebeu `/es/cases` ja disse em
 *    que idioma quer estar, e nao e o pais que o vai contrariar.
 * 2. So sem o cookie. A escolha feita no seletor vale mais do que o IP, e vale
 *    para sempre; sem esta condicao um portugues em viagem nunca conseguia
 *    ficar em portugues.
 * 3. Nunca rastreadores. Um motor de busca que indexa a partir dos Estados
 *    Unidos veria a Home inglesa no endereco da portuguesa e indexava o site
 *    trocado. Cada idioma ja tem endereco proprio e `hreflang` a liga-los.
 * 4. So paises que mapeamos para um idioma diferente do de origem.
 *
 * O redireccionamento e temporario (307) e sai com `no-store`: depende de quem
 * pede, e nao pode ficar guardado numa cache partilhada a servir o mesmo
 * idioma ao pais seguinte.
 */
function geoRedirect(request: NextRequest): NextResponse | null {
  const { pathname } = request.nextUrl;

  const hasPrefix = Object.values(localePrefixes).some((prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`));
  if (hasPrefix) return null;
  if (request.cookies.has(LOCALE_COOKIE)) return null;
  if (isCrawler(request.headers.get("user-agent"))) return null;

  // `CF-IPCountry` e escrito pela Cloudflare a entrada, a partir do IP. Fora
  // dela (em `next dev`, por exemplo) nao existe e ninguem e redirecionado.
  const locale = localeForCountry(request.headers.get("cf-ipcountry"));
  if (!locale) return null;

  const url = request.nextUrl.clone();
  url.pathname = localizePathname(pathname, locale);
  if (url.pathname === pathname) return null;

  const response = NextResponse.redirect(url, 307);
  response.headers.set("cache-control", "private, no-store");
  return response;
}

export default function middleware(request: NextRequest) {
  return geoRedirect(request) ?? handleI18n(request);
}

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
