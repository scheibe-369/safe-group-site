import { copy, kicker, marketStats, sourceLabel, titleA, titleB, titleC } from "../data/content";
import type { MarketStat } from "../types/market-stat";
import { MobileCarousel } from "./MobileCarousel";
import { Reveal } from "./Reveal";

function Wordmark({ id }: { id: MarketStat["id"] }) {
  if (id === "gartner") {
    return <span className="font-serif text-4xl font-normal tracking-tight text-white">Gartner</span>;
  }
  if (id === "mckinsey") {
    return (
      <span className="font-serif text-3xl font-normal tracking-tight text-white">
        McKinsey<span className="text-white/70">&amp;Company</span>
      </span>
    );
  }
  return <span className="font-sans text-4xl font-black tracking-tight text-white">IBM</span>;
}

function StatCard({ stat }: { stat: MarketStat }) {
  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/15 bg-white/[0.04] p-6 shadow-[0_8px_32px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.12),inset_0_-1px_0_rgba(255,255,255,0.04)] md:p-8">
      <div aria-hidden className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-[var(--safe-red)]/25 blur-[40px] lg:blur-[80px]" />
      <div aria-hidden className="pointer-events-none absolute -bottom-20 -right-16 h-56 w-56 rounded-full bg-[var(--safe-red-dark)]/20 blur-[40px] lg:blur-[80px]" />
      <div aria-hidden className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      <div aria-hidden className="pointer-events-none absolute inset-0 rounded-[inherit] bg-gradient-to-br from-white/[0.06] via-transparent to-transparent" />

      <div className="relative mb-8 flex h-16 items-center">
        <Wordmark id={stat.id} />
      </div>

      <h3 className="relative mb-4 text-3xl font-light leading-tight text-white md:text-4xl">
        <span className="font-normal text-[var(--safe-red)]">{stat.highlight}</span> {stat.statText}
      </h3>

      <p className="relative mb-8 flex-grow text-sm leading-relaxed text-white/55">{stat.detail}</p>

      <div className="relative border-t border-white/10 pt-6">
        <p className="font-mono text-xs uppercase tracking-widest text-white/55">
          {sourceLabel} <span className="text-white">{stat.source}</span>
        </p>
      </div>
    </div>
  );
}

export function MarketContextSection() {
  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-black py-32 lg:py-16 2xl:py-32">
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="safe-kicker">{kicker}</p>
            <h2 className="mt-5 text-3xl font-light leading-[1.05] tracking-tight text-white md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
              {titleA}
              <span className="safe-shine safe-shine--silver">{titleB}</span>
              {titleC}
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-white/60">{copy}</p>
          </div>
        </Reveal>

        <MobileCarousel className="mt-12 md:hidden">
          {marketStats.map((stat) => (
            <StatCard key={stat.id} stat={stat} />
          ))}
        </MobileCarousel>

        <div className="mt-20 hidden gap-6 md:grid md:grid-cols-3 lg:mt-10 2xl:mt-20">
          {marketStats.map((stat, i) => (
            <Reveal key={stat.id} delay={i * 0.15} className="h-full">
              <StatCard stat={stat} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
