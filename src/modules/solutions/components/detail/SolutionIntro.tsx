import { ButtonLink } from "@/shared/ui/ButtonLink";
import type { Solution } from "../../types/solution";

export function SolutionIntro({ item }: { item: Solution }) {
  return (
    <section className="safe-section bg-[var(--safe-black)]">
      <div className="safe-container">
        <div className="solution-intro__grid">
          <div className="solution-intro__lead">
            <h2 className="solution-intro__title">{item.introHeading}</h2>
            <ButtonLink href="/#diagnostico">Começar diagnóstico</ButtonLink>
          </div>
          <p className="solution-intro__body">{item.introBody}</p>
        </div>
      </div>
    </section>
  );
}
