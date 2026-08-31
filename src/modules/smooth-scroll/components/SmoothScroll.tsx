"use client";

import { useSmoothScroll } from "../hooks/useSmoothScroll";

/**
 * Não desenha nada. Existe só para o efeito viver no ciclo de vida do React em
 * vez de num script solto, e monta uma vez no `layout.tsx`, para o scroll ser
 * o mesmo em todas as rotas.
 */
export function SmoothScroll() {
  useSmoothScroll();
  return null;
}
