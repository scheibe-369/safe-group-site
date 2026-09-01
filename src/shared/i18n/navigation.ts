import { createNavigation } from "next-intl/navigation";
import { routing } from "./routing";

/**
 * Substitutos de `next/link` e `next/navigation` que conhecem o idioma actual.
 *
 * Em componentes e sempre `Link` daqui, nunca o de `next/link`: o `href` que se
 * escreve e o caminho interno (`/solucoes/[slug]`), e este resolve o prefixo e
 * a palavra traduzida do idioma em que a pagina esta a ser vista.
 *
 * `usePathname` devolve o caminho interno, ja sem o prefixo de idioma, por isso
 * comparacoes como `pathname === "/"` continuam a funcionar nos cinco idiomas.
 */
export const { Link, redirect, permanentRedirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
