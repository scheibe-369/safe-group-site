import { solutions } from "../data/solutions";

export function SolutionsGrid() {
  return (
    <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3">
      {solutions.map(({ id, icon: Icon, title, description, capabilities }) => (
        <article id={id} key={id} className="group bg-[#0c0c0d] p-7 transition-colors duration-300 hover:bg-[#131316] sm:p-9">
          <div className="flex items-center justify-between">
            <Icon aria-hidden className="h-7 w-7 text-[var(--safe-red)]" strokeWidth={1.5} />
            <span className="text-[10px] uppercase tracking-[.18em] text-white/25">Estrutura</span>
          </div>
          <h3 className="mt-12 text-2xl font-medium text-white">{title}</h3>
          <p className="mt-4 min-h-24 text-sm leading-6 text-white/55">{description}</p>
          <ul className="mt-6 border-t border-white/10 pt-5">
            {capabilities.map((item) => <li key={item} className="flex items-center gap-3 py-1.5 text-xs uppercase tracking-[.1em] text-white/45"><span className="h-px w-4 bg-[var(--safe-red)]" />{item}</li>)}
          </ul>
        </article>
      ))}
    </div>
  );
}
