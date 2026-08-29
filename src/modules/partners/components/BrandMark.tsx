import type { Partner } from "../types/partner";

type BrandMarkProps = {
  partner: Partner;
  height?: number;
  className?: string;
};

/**
 * Desenha o glifo de uma marca a partir do proprio viewBox: a largura sai da
 * proporcao original, a altura e o unico numero fixo. Evita repetir a conta
 * que a origem (Growth Hub) fazia a mao so para o wordmark da Asaas.
 */
export function BrandMark({ partner, height = 40, className }: BrandMarkProps) {
  const [, , vbWidthRaw, vbHeightRaw] = partner.viewBox.split(" ");
  const vbWidth = Number(vbWidthRaw);
  const vbHeight = Number(vbHeightRaw);
  const width = (height * vbWidth) / vbHeight;

  return (
    <svg
      width={width}
      height={height}
      viewBox={partner.viewBox}
      role="img"
      aria-hidden="true"
      focusable="false"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill={partner.kind === "mono" ? "currentColor" : "none"} transform={partner.transform}>
        {partner.paths.map((path, index) => (
          <path key={index} d={path.d} fill={partner.kind === "multicolor" ? path.fill : undefined} />
        ))}
      </g>
    </svg>
  );
}
