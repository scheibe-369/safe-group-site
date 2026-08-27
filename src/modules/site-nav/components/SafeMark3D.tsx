import { SAFE_MARK_G, SAFE_MARK_S, SAFE_MARK_VIEWBOX } from "./safe-mark-paths";

/**
 * Marca Safe (o monograma S+G) a duas cores, vectorizada por separação de
 * canal a partir de `design-source/logo-semfundo.png`, a referência oficial
 * da marca. Substitui a versão anterior, um recorte de `logo3d.svg` (traço de
 * um render 3D) que só capturava o lado branco em bloco sólido: o lado
 * vermelho sobrevivia à extração como linhas finas, sem a massa do "G".
 * O "G" é sempre vermelho Safe; o "S" pinta-se com `currentColor`, para ser
 * branco sobre o site e sobre o painel visual, e preto na barra quando o menu
 * abre e ela fica sobre o painel claro.
 */
export function SafeMark3D({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden viewBox={SAFE_MARK_VIEWBOX} fill="none" className={className}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d={SAFE_MARK_S}
      />
      <path
        fill="var(--safe-red)"
        fillRule="evenodd"
        d={SAFE_MARK_G}
      />
    </svg>
  );
}
