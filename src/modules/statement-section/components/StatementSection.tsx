"use client";

import { useRef } from "react";
import { ButtonLink } from "@/shared/ui/ButtonLink";
import { statementContent } from "../data/content";
import { useLineWipeReveal } from "../hooks/useLineWipeReveal";

export function StatementSection() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  useLineWipeReveal(headingRef);

  return (
    <section className="safe-section bg-[var(--safe-black)]">
      <div className="safe-container">
        <h2 ref={headingRef} className="text-[clamp(2rem,4.4vw,5.5rem)] font-semibold leading-[1] tracking-[-.02em] text-white">
          {statementContent.heading}
        </h2>
        <div className="mt-10 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <p className="max-w-2xl text-xl leading-9 text-white/72 sm:text-2xl sm:leading-10">{statementContent.paragraph}</p>
          <ButtonLink href={statementContent.cta.href} className="shrink-0">
            {statementContent.cta.label}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
