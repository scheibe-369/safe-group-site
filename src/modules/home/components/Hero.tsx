import { ButtonLink } from "@/shared/ui/ButtonLink";

export function Hero() {
  return (
    <section className="relative flex min-h-[760px] items-end overflow-hidden bg-black pb-16 pt-28 sm:min-h-[820px] lg:h-dvh lg:min-h-[760px] lg:items-start lg:pb-0 lg:pt-[clamp(11rem,22vh,16rem)]">
      <video
        className="hero-video absolute inset-0 h-full w-full object-cover object-[67%_center] sm:object-center"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/media/safe-hero-poster.jpg"
        aria-hidden="true"
      >
        <source src="/media/safe-hero-lines.mp4" type="video/mp4" />
      </video>
      <div aria-hidden className="hero-poster absolute inset-0 bg-[url('/media/safe-hero-poster.jpg')] bg-cover bg-[67%_center] sm:bg-center" />
      <div aria-hidden className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.98)_0%,rgba(0,0,0,.88)_27%,rgba(0,0,0,.2)_67%,rgba(0,0,0,.3)_100%)]" />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/30" />

      <div className="safe-edge relative z-10">
        <div className="max-w-2xl xl:max-w-3xl 2xl:max-w-4xl">
          <p className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[.65rem] font-medium uppercase tracking-[.18em] text-white/65 sm:text-xs">
            <span>Operações high ticket</span><span className="h-1 w-1 shrink-0 rounded-full bg-[var(--safe-red)]" /><span>Diagnóstico Safe</span>
          </p>
          <span aria-hidden className="mt-6 block h-[3px] w-[4.5rem] bg-[var(--safe-red)]" />
          <h1 className="mt-7 text-[clamp(2.75rem,6vw,6rem)] font-semibold uppercase leading-[1.14] tracking-[-.02em] text-white">
            Encontre a<br />prioridade.
          </h1>
          <p className="mt-8 max-w-xl text-base leading-7 text-white/75 sm:text-lg">A Safe liga estratégia comercial, marketing, dados e tecnologia para encontrar o bloqueio prioritário e estruturar a resposta certa.</p>
          <p className="mt-4 text-[.65rem] font-medium uppercase tracking-[.15em] text-white/50 sm:text-xs">Procura <span className="mx-2 text-[var(--safe-red)]">•</span> Comercial <span className="mx-2 text-[var(--safe-red)]">•</span> Tecnologia</p>
          <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-8">
            <ButtonLink href="/contacto" arrow="none">Fazer o diagnóstico</ButtonLink>
            <ButtonLink href="/metodo" variant="ghost" arrow="long">Ver como funciona</ButtonLink>
          </div>
        </div>
      </div>

      <div aria-hidden className="hero-signature safe-edge absolute inset-x-0 bottom-16 z-10">
        <p className="text-[.7rem] font-medium uppercase tracking-[.28em] text-white/45">Intelligence. Strategy. Growth.</p>
        <span className="mt-4 block h-[3px] w-[4.5rem] bg-[var(--safe-red)]" />
      </div>

      <div aria-hidden className="absolute bottom-0 left-0 h-px w-full safe-red-line opacity-70" />
    </section>
  );
}
