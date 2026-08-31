import Link from "next/link";
import { SectionHeading } from "@/shared/ui/SectionHeading";
import { solutions } from "../../data/solutions";
import { solutionSrcSet } from "../../utils/image-srcset";

type Props = {
  currentSlug: string;
};

export function OtherSolutions({ currentSlug }: Props) {
  const others = solutions.filter((item) => item.slug !== currentSlug);

  return (
    <section className="safe-section bg-[var(--safe-black)]">
      <div className="safe-container flex flex-col gap-10">
        <SectionHeading kicker="Soluções" title="As restantes frentes da Safe." />

        <ul className="solution-others__list">
          {others.map((item) => (
            <li key={item.slug}>
              <Link href={`/solucoes/${item.slug}`} className="solution-others__link">
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
