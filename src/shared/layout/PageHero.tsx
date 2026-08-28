type PageHeroProps = { kicker: string; title: string; copy: string };

export function PageHero({ kicker, title, copy }: PageHeroProps) {
  return (
    <section className="safe-grid relative overflow-hidden border-b border-white/10 bg-[#080808] pb-20 pt-40 sm:pb-28 sm:pt-48">
      <div aria-hidden className="absolute right-[-12rem] top-14 h-96 w-96 rounded-full bg-[var(--safe-red)]/10 blur-[120px]" />
      {/* Mascaras da entrada do site (vocabulario CSS de `modules/site-intro`): as margens ficam nas mascaras. */}
      <div className="safe-container relative">
        <div className="intro-mask" data-intro-step="0">
          <p className="safe-kicker">{kicker}</p>
        </div>
        <div className="intro-mask intro-mask--loose mt-6 max-w-5xl" data-intro-step="1">
          <h1 className="text-5xl font-semibold leading-[.92] tracking-[-.055em] sm:text-7xl lg:text-8xl">{title}</h1>
        </div>
        <div className="intro-mask mt-8 max-w-2xl" data-intro-step="2">
          <p className="text-lg leading-8 text-white/60">{copy}</p>
        </div>
      </div>
    </section>
  );
}
