import { getLocale } from "next-intl/server";
import { ButtonLink } from "@/shared/ui/ButtonLink";
import { SectionHeading } from "@/shared/ui/SectionHeading";
import { getMethod } from "../data/steps";
import { MethodTimeline } from "./MethodTimeline";

// A seccao resolve o idioma sozinha, para a Home continuar a monta-la sem
// argumentos. A linha do tempo e cliente, por isso recebe os passos por prop:
// assim so o idioma actual atravessa a fronteira, e nao os cinco.
export async function MethodSection() {
  const content = getMethod(await getLocale());

  return (
    <section id="metodo" className="safe-section scroll-mt-28 border-y border-white/10 bg-[#090909]">
      <div className="safe-container">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            kicker={content.kicker}
            title={<>{content.titleLead} <span className="text-white/35">{content.titleAccent}</span></>}
            copy={content.copy}
          />
          <ButtonLink href="#diagnostico" variant="secondary" className="shrink-0">{content.action}</ButtonLink>
        </div>
        <MethodTimeline steps={content.steps} />
        <p className="mt-10 max-w-2xl text-sm leading-7 text-white/45">{content.note}</p>
      </div>
    </section>
  );
}
