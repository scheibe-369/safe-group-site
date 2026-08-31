/**
 * `srcset` escrito à mão para as fotografias das soluções.
 *
 * Nesta stack o `/_next/image` não redimensiona nada: o `wrangler.toml` não
 * declara binding `[images]` e o template do OpenNext devolve o ficheiro
 * original em qualquer `w`. Verificado em produção, `w=256`, `w=640` e `w=1920`
 * devolvem exactamente os mesmos bytes. Com `next/image` o `sizes` era
 * decorativo e um telemóvel descarregava sempre a versão de 1774px.
 *
 * As três larguras vêm de `scripts/build-solution-images.mjs`. Correr esse
 * script depois de trocar qualquer foto.
 */
const WIDTHS = [900, 1280, 1774] as const;

export function solutionSrcSet(image: string): string {
  const base = image.replace(/\.webp$/, "");
  return WIDTHS.map((width) =>
    width === 1774 ? `${base}.webp ${width}w` : `${base}-${width}.webp ${width}w`,
  ).join(", ");
}
