import { SectionHeading } from "@/shared/ui/SectionHeading";
import { markets } from "../data/markets";

export function MarketsSection() {
  return (
    <section className="safe-section border-y border-white/10 bg-[#080808]">
      <div className="safe-container">
        <SectionHeading kicker="Operações high ticket" title="O contexto muda. A leitura mantém-se exigente." copy="A experiência atravessa operações automóvel, financeiras e de software. O diagnóstico parte do modelo de negócio, não de um sector pré-definido." />
        <div className="mt-14 grid gap-px border border-white/10 bg-white/10 lg:grid-cols-3">
          {markets.map(({ name, description, capabilities, icon: Icon }) => (
            <article key={name} className="bg-[#0c0c0d] p-7 sm:p-9">
              <Icon aria-hidden className="h-7 w-7 text-[var(--safe-red)]" strokeWidth={1.5} />
              <h3 className="mt-12 text-2xl font-medium">{name}</h3>
              <p className="mt-4 min-h-24 text-sm leading-7 text-white/55">{description}</p>
              <ul className="mt-6 border-t border-white/10 pt-5">
                {capabilities.map((capability) => <li key={capability} className="py-1.5 text-xs uppercase tracking-[.1em] text-white/45">{capability}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
