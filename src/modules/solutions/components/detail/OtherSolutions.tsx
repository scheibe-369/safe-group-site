import Link from "next/link";
import { SectionHeading } from "@/shared/ui/SectionHeading";
import type { Solution } from "../../types/solution";
import { solutionSrcSet } from "../../utils/image-srcset";

type Props = {
  /** As restantes solucoes, ja sem a que esta aberta. */
  items: Solution[];
  kicker: string;
  title: string;
  /** Endereco do detalhe, ja resolvido para o idioma actual. */
  detailHref: (slug: string) => string;
};

export function OtherSolutions({ items, kicker, title, detailHref }: Props) {
  return (
    <section className="safe-section bg-[var(--safe-black)]">
      <div className="safe-container flex flex-col gap-10">
        <SectionHeading kicker={kicker} title={title} />

        <ul className="solution-others__list">
          {items.map((item) => (
            <li key={item.slug}>
              <Link href={detailHref(item.slug)} className="solution-others__link">
                {/* `<img>` cru pela mesma razão dos painéis: o `/_next/image`
                    não redimensiona nesta stack. Ver `utils/image-srcset.ts`. */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.image}
                  srcSet={solutionSrcSet(item.image)}
                  sizes="(min-width: 768px) 50vw, 100vw"
                  alt=""
                  className="solution-others__img"
                  loading="lazy"
                  decoding="async"
                />
                <span className="solution-others__fade" />
                <span className="solution-others__label">{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
