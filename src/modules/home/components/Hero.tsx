import { ButtonLink } from "@/shared/ui/ButtonLink";

export function Hero() {
  return (
    <section className="relative flex min-h-[760px] items-end overflow-hidden bg-black pb-16 pt-28 sm:min-h-[820px] lg:h-dvh lg:min-h-[760px] lg:items-center lg:pb-0">
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

      <div aria-hidden className="absolute left-[3.7vw] top-1/2 hidden h-44 w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-white/25 to-transparent lg:block" />

      <div className="safe-edge relative z-10">
        <div className="max-w-2xl xl:max-w-3xl 2xl:max-w-4xl">
          <p className="mb-7 flex items-center gap-4 text-xs font-medium uppercase tracking-[.18em] text-white/65">
            <span>Strategy</span><span className="h-1 w-1 rounded-full bg-[var(--safe-red)]" /><span>Systems</span><span className="h-1 w-1 rounded-full bg-[var(--safe-red)]" /><span>Growth</span>
          </p>
          <h1 className="text-[clamp(3.5rem,7vw,7.2rem)] font-semibold uppercase leading-[.82] tracking-[-.065em] text-white">
            Crescimento<br />com<br />estrutura<span className="text-[var(--safe-red)]">.</span>
          </h1>
          <p className="mt-8 max-w-xl text-base leading-7 text-white/75 sm:text-lg">Marketing, inteligência comercial e tecnologia integrados num sistema de crescimento.</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/contacto">Fale com um especialista</ButtonLink>
            <ButtonLink href="/metodo" variant="secondary">Conheça o nosso método</ButtonLink>
          </div>
        </div>
      </div>
      <div aria-hidden className="absolute bottom-0 left-0 h-px w-full safe-red-line opacity-70" />
    </section>
  );
}
