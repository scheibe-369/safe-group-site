import { ButtonLink } from "@/shared/ui/ButtonLink";

export function ClosingCta() {
  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-black py-24 sm:py-32">
      <div aria-hidden className="absolute inset-x-0 top-0 h-px safe-red-line" />
      <div className="safe-container text-center">
        <p className="safe-kicker">Próximo passo</p>
        <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-semibold leading-[.98] tracking-[-.05em] sm:text-6xl">Antes de investir mais, encontre o ponto que muda a operação.</h2>
        <ButtonLink href="/contacto" className="mt-9">Começar diagnóstico</ButtonLink>
      </div>
    </section>
  );
}
