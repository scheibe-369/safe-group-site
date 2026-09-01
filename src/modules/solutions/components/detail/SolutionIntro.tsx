import { ButtonLink } from "@/shared/ui/ButtonLink";
import type { Solution } from "../../types/solution";

type Props = {
  item: Solution;
  action: string;
  /** Endereco do diagnostico, ja resolvido para o idioma actual. */
  actionHref: string;
};

export function SolutionIntro({ item, action, actionHref }: Props) {
  return (
    <section className="safe-section bg-[var(--safe-black)]">
      <div className="safe-container">
        <div className="solution-intro__grid">
          <div className="solution-intro__lead">
            <h2 className="solution-intro__title">{item.introHeading}</h2>
            <ButtonLink href={actionHref}>{action}</ButtonLink>
          </div>
          <p className="solution-intro__body">{item.introBody}</p>
        </div>
      </div>
    </section>
  );
}
