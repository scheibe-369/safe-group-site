"use client";

import { usePathname } from "next/navigation";

/**
 * A Home fecha na seccao de contacto, que ja traz redes, navegacao, copyright e
 * credito de producao. Mostrar tambem o rodape global nessa pagina dava dois
 * rodapes seguidos e copyright a dobrar, por isso aqui ele sai de cena.
 *
 * O rodape entra como `children` para continuar a ser server component.
 */
export function SiteFooterSlot({ children }: { children: React.ReactNode }) {
  return usePathname() === "/" ? null : <>{children}</>;
}
