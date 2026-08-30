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
 * O wordmark ocupa a largura toda da coluna e a janela mostra um de cada vez,
 * em vez de uma coluna de logotipos pequenos. Entra a branco cheio, o mesmo
 * peso do exemplo aprovado: quem suaviza a entrada e a saida sao os dois
 * gradientes, nao a opacidade da imagem.
 *
 * O espaco entre copias e as fitas de fade sao percentagens, nao pixeis, e essa
 * e a regra que faz o carrossel funcionar em qualquer ecra. Abaixo de `lg` sao
 * mais curtos (`2.5%` e `10%`, contra `7%` e `18%`): a banda do telemovel foi
 * medida pela referencia e tem cerca de metade da altura, por isso um intervalo
 * de `7%` empurrava o passo do carrossel para la da moldura e voltava a cortar
 * o lockup, e uma fita de `18%` comia quase toda a copia visivel. Em valores fixos so
 * havia uma largura onde as proporcoes batiam certo, a do monitor onde isto foi
 * afinado: no telemovel as fitas de 56 pixeis comiam quase toda a janela e o
 * intervalo de 64 pixeis entre copias esticava o ciclo. Em `7%` da largura e
 * `18%` da altura da janela valem o mesmo que antes no monitor e encolhem com a
 * coluna em todo o resto.
 *
 * O ciclo fecha porque o array é duplicado e o keyframe desloca exatamente
 * metade da coluna, de 0 a -50%: quando a primeira metade sai de cena, a
 * segunda esta na posicao inicial e o corte fica invisivel. Anima apenas
 * `transform`, por isso corre no compositor e nao forca layout.
 *
 * As imagens levam `width`/`height` HTML explicitos (nao so a classe
 * `w-full`) para o navegador reservar a altura pelo aspect-ratio intrinseco
 * antes de decodificar o SVG. Sem isso, cada copia altera a altura total da
 * coluna no momento em que carrega, e como a animacao desloca em `%` dessa
 * altura, o alvo do `-50%` muda a meio do ciclo, ja em curso: e o salto/
 * travao que se via de vez em quando.
 *
 * As imagens carregam eager, nao lazy: a heuristica nativa de `loading=lazy`
 * mede a distancia ate a viewport pela posicao de layout, que aqui fica
 * escondida atras de `overflow:hidden` e de um `transform` que so revela as
 * copias visualmente. O resultado e as 12 copias so comecarem a carregar
 * quando a seccao entra mesmo na viewport, ja com a animacao a meio,
 * aparecendo em pop-in escalonado. Como as 12 apontam para o mesmo URL, o
 * navegador so faz um pedido de rede de qualquer forma, eager nao custa mais.
 */
export function VerticalMarquee({
  imageSrc = "/brand/safe-wordmark.svg",
  speed = 30,
  count = 6,
}: VerticalMarqueeProps) {
  const items = Array.from({ length: count * 2 }, (_, index) => index);

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 select-none overflow-hidden">
      <div className="absolute inset-x-0 top-0 z-10 h-[10%] bg-gradient-to-b from-[#070707] to-transparent lg:h-[18%]" />
      <div className="absolute inset-x-0 bottom-0 z-10 h-[10%] bg-gradient-to-t from-[#070707] to-transparent lg:h-[18%]" />
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
            width={623}
            height={208}
            decoding="async"
            className="block w-full py-[2.5%] lg:py-[7%]"
          />
        ))}
      </div>
    </div>
  );
}
