import Link from "next/link";
import type { CSSProperties } from "react";
import type { Solution } from "../types/solution";
import { solutionSrcSet } from "../utils/image-srcset";

type Props = {
  items: Solution[];
  kicker: string;
  /** Rotulo do unico alvo focavel de cada painel. */
  action: string;
  /** Endereco do detalhe, ja resolvido para o idioma actual pela seccao. */
  detailHref: (slug: string) => string;
};

/** Cascata do reveal, medida no original: chapéu, título e teaser a 200ms. */
const DELAYS = ["0ms", "200ms", "400ms"];

export function SolutionsPanels({ items, kicker, action, detailHref }: Props) {
  return (
    <div className="solutions__stack" data-solutions-stack="">
      <ul className="solutions__list" data-solutions-list="">
        {items.map((item) => (
          <li key={item.slug} className="solutions__panel" data-panel="" data-revealed="false">
            {/* `<img>` cru em vez de `next/image`: nesta stack o `/_next/image`
                devolve o ficheiro original em qualquer largura, por isso o
                componente só acrescentava um salto de proxy e um `sizes` que
                não fazia nada. Ver `utils/image-srcset.ts`.
                Nenhum painel é `eager`: a secção fica cinco secções abaixo da
                dobra e o LCP da Home é o vídeo da Hero. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={item.image}
              srcSet={solutionSrcSet(item.image)}
              sizes="100vw"
              alt={item.imageAlt}
              className="solutions__image"
              loading="lazy"
              decoding="async"
            />
            <div className="solutions__scrim" />
            <div className="solutions__fade" />

            <div className="solutions__inner">
              <div className="solutions__content">
                <div className="solutions__mask">
                  <p
                    className="solutions__hat solutions__reveal"
                    style={{ "--solutions-delay": DELAYS[0] } as CSSProperties}
                  >
                    {kicker}
                  </p>
                </div>
                <div className="solutions__mask">
                  <h2
                    className="solutions__title solutions__reveal"
                    style={{ "--solutions-delay": DELAYS[1] } as CSSProperties}
                  >
                    {item.name}
                  </h2>
                </div>
                <div className="solutions__mask">
                  <p
                    className="solutions__teaser solutions__reveal"
                    style={{ "--solutions-delay": DELAYS[2] } as CSSProperties}
                  >
                    {item.teaser}
                  </p>
                </div>

                {/* O único alvo focável do painel. No telemóvel está sempre
                    visível, como no original. No desktop fica escondido, porque
                    lá o convite é o cursor, mas reaparece assim que recebe foco
                    por teclado: sem isso o único caminho para a página era um
                    link invisível por baixo do painel seguinte, que é uma falha
                    de "focus not obscured". */}
                <Link href={detailHref(item.slug)} className="solutions__button">
                  {action}
                </Link>
              </div>
            </div>

            {/* Conveniência de rato: o painel inteiro leva ao detalhe. Fora da
                ordem de tabulação e da árvore de acessibilidade, porque o botão
                acima já é o caminho de teclado para o mesmo sítio. */}
            <Link
              href={detailHref(item.slug)}
              className="solutions__link"
              tabIndex={-1}
              aria-hidden="true"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
