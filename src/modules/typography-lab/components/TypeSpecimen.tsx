import type { TypeDirection } from "../types/direction";

const scale = [
  ["Display", "clamp(3.5rem, 7vw, 7.2rem)"],
  ["Secção", "clamp(2.25rem, 3.4vw, 3.75rem)"],
  ["Corpo", "1.125rem"],
  ["Etiqueta", ".72rem"],
] as const;

export function TypeSpecimen({ direction }: { direction: TypeDirection }) {
  const { headingClass, bodyClass, headingStyle, sectionStyle, bodyStyle, labelStyle } = direction;

  return (
    <section id={direction.id} className={`${bodyClass} border-b border-white/10 py-20 sm:py-28`}>
      <div className="safe-edge">
        <header className="flex flex-col gap-6 border-b border-white/10 pb-9 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
          <div>
            <p className="text-[.72rem] uppercase text-[var(--safe-red)]" style={labelStyle}>{direction.label}</p>
            <h2 className={`${headingClass} mt-4 text-4xl sm:text-5xl`} style={sectionStyle}>{direction.name}</h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-white/60" style={bodyStyle}>{direction.pitch}</p>
          </div>
          <p className="max-w-md text-sm leading-7 text-white/45 lg:text-right" style={bodyStyle}>{direction.tension}</p>
        </header>

        <div className="mt-16">
          <p className="flex items-center gap-4 text-[.72rem] uppercase text-white/65" style={labelStyle}>
            <span>Strategy</span><span className="h-1 w-1 rounded-full bg-[var(--safe-red)]" />
            <span>Systems</span><span className="h-1 w-1 rounded-full bg-[var(--safe-red)]" />
            <span>Growth</span>
          </p>
          <p className={`${headingClass} mt-7 max-w-2xl text-[clamp(3.5rem,7vw,7.2rem)] text-white xl:max-w-3xl 2xl:max-w-4xl`} style={headingStyle}>
            Crescimento<br />com<br />estrutura<span className="text-[var(--safe-red)]">.</span>
          </p>
          <p className="mt-8 max-w-xl text-base leading-7 text-white/75 sm:text-lg" style={bodyStyle}>
            Marketing, inteligência comercial e tecnologia integrados num sistema de crescimento.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <span className="inline-flex min-h-11 items-center justify-center border border-[var(--safe-red)] bg-[var(--safe-red)] px-[1.15rem] text-[.8125rem] uppercase text-white" style={labelStyle}>Fale com um especialista</span>
            <span className="inline-flex min-h-11 items-center justify-center border border-white/30 bg-black/20 px-[1.15rem] text-[.8125rem] uppercase text-white" style={labelStyle}>Conheça o nosso método</span>
          </div>
        </div>

        <div className="mt-20 grid gap-12 border-t border-white/10 pt-14 lg:grid-cols-[1.1fr_.9fr] lg:gap-20">
          <div>
            <p className="text-[.72rem] uppercase text-[var(--safe-red)]" style={labelStyle}>Diagnóstico 360</p>
            <h3 className={`${headingClass} mt-5 text-[clamp(2.25rem,3.4vw,3.75rem)] text-white`} style={sectionStyle}>
              O mesmo sintoma pode exigir estruturas diferentes.
            </h3>
            <p className="mt-7 max-w-2xl text-base leading-8 text-white/60" style={bodyStyle}>
              Duas empresas high ticket podem procurar crescimento por razões completamente distintas. A Safe começa por descobrir qual decisão move mais a operação, antes de escolher a ferramenta. A experiência atravessa os setores automóvel, financeiro e de software.
            </p>
          </div>
          <dl className="grid content-start gap-px bg-white/10">
            {scale.map(([name, size]) => (
              <div key={name} className="flex items-baseline justify-between gap-6 bg-[#0c0c0d] px-5 py-4">
                <dt className="text-[.72rem] uppercase text-white/45" style={labelStyle}>{name}</dt>
                <dd className="text-sm text-white/70" style={bodyStyle}>{size}</dd>
              </div>
            ))}
            <div className="bg-[#0c0c0d] px-5 py-5">
              <p className={`${headingClass} text-2xl text-white`} style={sectionStyle}>ABCDEFGHIJKLM</p>
              <p className={`${headingClass} mt-1 text-2xl text-white/70`} style={sectionStyle}>abcdefghijklm</p>
              <p className={`${headingClass} mt-1 text-2xl text-white/70`} style={sectionStyle}>0123456789 ãõçáêó</p>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
