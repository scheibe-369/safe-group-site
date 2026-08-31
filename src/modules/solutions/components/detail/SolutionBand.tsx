/**
 * Faixa de respiração entre a introdução e o acordeão. No original é um objecto
 * 3D da marca sobre fundo quase preto; aqui entra a marca 3D da Safe, que já
 * existe em `public/brand/safe-mark-3d.svg`.
 *
 * SVG servido cru: o optimizador do `next/image` não trata vetores, e é o mesmo
 * padrão já usado no menu e nas marcas dos parceiros.
 */
export function SolutionBand() {
  return (
    <div className="solution-band" aria-hidden="true">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/brand/safe-mark-3d.svg"
        alt=""
        className="solution-band__mark"
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}
