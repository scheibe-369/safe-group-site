import type { Partner } from "../types/partner";

type BrandMarkProps = {
  partner: Partner;
  /** Rotulo do selo no idioma actual. Serve de `alt` quando a marca e imagem. */
  label: string;
  height?: number;
  className?: string;
};

/**
 * Desenha a marca de um parceiro a partir da sua proporcao natural: a
 * largura sai do viewBox (traçado próprio) ou das dimensões do ficheiro
 * (selo pronto), a altura é o único número fixo, ajustável por selo com
 * `scale`. Evita repetir a conta que a origem (Growth Hub) fazia a mão só
 * para o wordmark da Asaas.
 */
export function BrandMark({ partner, label, height = 40, className }: BrandMarkProps) {
  if (partner.kind === "image") {
    const scaled = height * (partner.scale ?? 1);
    const width = (scaled * partner.width) / partner.height;
    return (
      <img
        src={partner.src}
        alt={label}
        width={width}
        height={scaled}
        loading="lazy"
        decoding="async"
        className={className}
      />
    );
  }

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
