import type { CSSProperties } from "react";
import { ButtonLink } from "@/shared/ui/ButtonLink";
import type { Solution } from "../../types/solution";
import { solutionSrcSet } from "../../utils/image-srcset";

type Props = {
  item: Solution;
  kicker: string;
  action: string;
  /** Endereco do diagnostico, ja resolvido para o idioma actual. */
  actionHref: string;
};

/**
 * O hero repete a imagem do painel da Home de propósito: é o que faz a
 * passagem do painel para a página parecer continuação e não salto.
 */
export function SolutionHero({ item, kicker, action, actionHref }: Props) {
  return (
    <header className="solution-hero">
      {/* Aqui a imagem é o LCP da página, por isso entra `eager` e com
          prioridade alta. `<img>` cru pela mesma razão dos painéis: o
          `/_next/image` não redimensiona nesta stack. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={item.image}
        srcSet={solutionSrcSet(item.image)}
        sizes="100vw"
        alt={item.imageAlt}
        className="solution-hero__image"
        fetchPriority="high"
        decoding="async"
      />
      <div className="solution-hero__fade" />

      <div className="solution-hero__inner">
        <div className="solution-hero__content">
          <div className="solution-hero__heading">
            <div className="solutions__mask">
              <p className="solution-hero__hat solution-rise">{kicker}</p>
            </div>
            <div className="solutions__mask">
              <h1
                className="solution-hero__title solution-rise"
                style={{ "--solutions-delay": "200ms" } as CSSProperties}
              >
                {item.name}
              </h1>
            </div>
          </div>

          <div className="solution-hero__aside">
            <div className="solutions__mask">
              <p
                className="solution-hero__pitch solution-rise"
                style={{ "--solutions-delay": "400ms" } as CSSProperties}
              >
                {item.pitch}
              </p>
            </div>
            <ButtonLink href={actionHref} variant="secondary">
              {action}
            </ButtonLink>
          </div>
        </div>
      </div>
    </header>
  );
}
