import { methodSteps } from "../data/steps";

export function MethodTimeline() {
  return (
    <ol className="mt-14 border-t border-white/15">
      {methodSteps.map((step) => (
        <li key={step.number} className="grid gap-4 border-b border-white/15 py-7 sm:grid-cols-[5rem_.8fr_1.2fr] sm:items-start sm:gap-8 sm:py-9">
          <span className="font-display text-3xl font-medium text-[var(--safe-red)]">{step.number}</span>
          <h3 className="text-2xl font-medium">{step.title}</h3>
          <p className="max-w-2xl text-sm leading-7 text-white/55">{step.description}</p>
        </li>
      ))}
    </ol>
  );
}
