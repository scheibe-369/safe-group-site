import Image from "next/image";
import { ButtonLink } from "@/shared/ui/ButtonLink";
import type { CaseStudy } from "../types/case-study";

export function CaseDetail({ item }: { item: CaseStudy }) {
  return (
    <article className="pb-24 pt-32">
      <div className="safe-container">
        <p className="safe-kicker">{item.sector}</p>
        <h1 className="mt-5 text-6xl font-semibold tracking-[-.055em] sm:text-8xl">{item.client}</h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-white/60">{item.summary}</p>
        <div className="relative mt-12 aspect-[16/9] overflow-hidden bg-[#111]"><Image src={item.cover} alt={`Case ${item.client}`} fill priority className="object-cover" /></div>
        <dl className="grid border-b border-white/15 md:grid-cols-3">
          <div className="border-b border-white/15 py-7 md:border-b-0 md:border-r md:pr-7"><dt className="safe-kicker">Cliente</dt><dd className="mt-3 text-lg">{item.client}</dd></div>
          <div className="border-b border-white/15 py-7 md:border-b-0 md:border-r md:px-7"><dt className="safe-kicker">Área</dt><dd className="mt-3 text-lg">{item.area}</dd></div>
          <div className="py-7 md:pl-7"><dt className="safe-kicker">Entregas</dt><dd className="mt-3 text-lg">{item.deliverables.join(", ")}</dd></div>
        </dl>
        <div className="mt-20 grid gap-14 lg:grid-cols-2">
          {[["Contexto", item.context], ["Desafio", item.challenge], ["Intervenção", item.intervention], ["Estrutura", item.structure]].map(([title, copy]) => <section key={title}><p className="safe-kicker">{title}</p><p className="mt-5 text-xl leading-9 text-white/70">{copy}</p></section>)}
        </div>

        {item.results.length > 0 && (
          <section className="mt-24 border-t border-white/15 pt-16">
            <p className="safe-kicker">Resultados verificados</p>
            <div className="mt-8 grid gap-px bg-white/15 sm:grid-cols-2 lg:grid-cols-3">
              {item.results.map((result, index) => (
                <div key={result} className="bg-[var(--safe-black)] p-7">
                  <span className="text-xs text-[var(--safe-red)]">{String(index + 1).padStart(2, "0")}</span>
                  <p className="mt-5 text-lg leading-7 text-white/75">{result}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {item.gallery.length > 0 && (
          <section className="mt-24" aria-label={`Galeria do case ${item.client}`}>
            <div className="grid gap-5 md:grid-cols-2">
              {item.gallery.map((image, index) => (
                <div key={image} className="relative aspect-[4/3] overflow-hidden bg-[#111]">
                  <Image src={image} alt={`${item.client}, imagem ${index + 1}`} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
                </div>
              ))}
            </div>
          </section>
        )}

        <ButtonLink href="/cases" variant="secondary" className="mt-20">Voltar aos cases</ButtonLink>
      </div>
    </article>
  );
}
