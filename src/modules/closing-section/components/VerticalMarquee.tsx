type VerticalMarqueeProps = {
  /** Caminho publico do wordmark repetido. */
  imageSrc?: string;
  /** Duracao de um ciclo completo, em segundos. Maior é mais lento. */
  speed?: number;
  /** Copias por metade. O array é duplicado para fechar o ciclo. */
  count?: number;
};

/**
 * Carrossel vertical do wordmark Safe Group.
 *
 * O wordmark ocupa a largura toda da coluna e o espaco entre copias é maior do
 * que a altura de cada uma, por isso a janela mostra um de cada vez, em vez de
 * uma coluna de logotipos pequenos. Entra a branco cheio, o mesmo peso do
 * exemplo aprovado: quem suaviza a entrada e a saida sao os dois gradientes,
 * nao a opacidade da imagem. As fitas de fade ficam curtas de proposito: a 80
 * pixels comiam mais de metade da janela e apanhavam as letras quase sempre.
 *
 * O ciclo fecha porque o array é duplicado e o keyframe desloca exatamente
 * metade da coluna, de 0 a -50%: quando a primeira metade sai de cena, a
 * segunda esta na posicao inicial e o corte fica invisivel. Anima apenas
 * `transform`, por isso corre no compositor e nao forca layout.
 */
export function VerticalMarquee({
  imageSrc = "/brand/safe-wordmark.svg",
  speed = 30,
  count = 6,
}: VerticalMarqueeProps) {
  const items = Array.from({ length: count * 2 }, (_, index) => index);

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 select-none overflow-hidden">
      <div className="absolute inset-x-0 top-0 z-10 h-14 bg-gradient-to-b from-[#070707] to-transparent" />
      <div className="absolute inset-x-0 bottom-0 z-10 h-14 bg-gradient-to-t from-[#070707] to-transparent" />
      <div
        className="safe-marquee absolute inset-x-0 top-0 flex flex-col items-center"
        style={{ ["--safe-marquee-duration" as string]: `${speed}s` }}
      >
        {items.map((index) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={index}
            src={imageSrc}
            alt=""
            aria-hidden
            loading="lazy"
            decoding="async"
            className="block w-full py-16"
          />
        ))}
      </div>
    </div>
  );
}
