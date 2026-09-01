"use client";

import { usePathname } from "@/shared/i18n/navigation";

/**
 * A Home fecha na seccao de contacto, que ja traz redes, navegacao e copyright.
 * Mostrar tambem o rodape global nessa pagina dava dois rodapes seguidos e
 * copyright a dobrar, por isso aqui ele sai de cena.
 *
 * O rodape entra como `children` para continuar a ser server component.
 *
 * O `usePathname` e o do `@/shared/i18n/navigation`, que devolve o caminho ja
 * sem o prefixo do idioma. Com o de `next/navigation` a Home em `/en-us` daria
 * `"/en-us"`, nunca `"/"`, e os cinco idiomas menos o de origem ficavam com
 * rodape a dobrar.
 */
export function SiteFooterSlot({ children }: { children: React.ReactNode }) {
  return usePathname() === "/" ? null : <>{children}</>;
}
