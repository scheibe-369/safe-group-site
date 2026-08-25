import type { Metadata } from "next";
import { TypeSpecimen } from "@/modules/typography-lab/components/TypeSpecimen";
import { directions } from "@/modules/typography-lab/data/directions";

export const metadata: Metadata = {
  title: "Direções tipográficas",
  description: "Página interna de decisão. Não faz parte do site público.",
  robots: { index: false, follow: false },
};

export default function TypographyLabPage() {
  return (
    <>
      <section className="safe-grid border-b border-white/10 bg-[#080808] pb-16 pt-40">
        <div className="safe-edge">
          <p className="safe-kicker">Decisão interna</p>
          <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[.92] tracking-[-.055em] sm:text-7xl">Quatro direções tipográficas.</h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/60">
            Cada bloco aplica uma direção ao Hero real e a uma secção de conteúdo, na mesma paleta e no mesmo eixo de margem do site. Escolhe pelo bloco, não pelo nome da fonte.
          </p>
          <nav aria-label="Atalhos para as direções" className="mt-9 flex flex-wrap gap-2">
            {directions.map((direction) => (
              <a key={direction.id} href={`#${direction.id}`} className="inline-flex min-h-11 items-center border border-white/20 px-4 text-[.8125rem] uppercase tracking-[.1em] text-white/70 transition-colors hover:border-white/60 hover:text-white">
                {direction.label}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {directions.map((direction) => <TypeSpecimen key={direction.id} direction={direction} />)}
    </>
  );
}
