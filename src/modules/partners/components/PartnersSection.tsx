import { SectionHeading } from "@/shared/ui/SectionHeading";
import { PartnersMarquee } from "./PartnersMarquee";

/**
 * A faixa do carrossel fica fora do `.safe-container` de proposito: a
 * mascara de desvanecimento nas bordas ja e de borda a borda por natureza,
 * ao contrario do carrossel de cases (`CasesRail`), que precisa do truque de
 * `100vw` para sangrar so de um lado.
 */
export function PartnersSection() {
  return (
    <section className="bg-[var(--safe-black)] py-16 lg:py-20">
      <div className="safe-container">
        <SectionHeading kicker="Parceiros oficiais" title="Certificações e integrações que sustentam a operação." align="center" />
      </div>
      <div className="mt-12">
        <PartnersMarquee />
      </div>
    </section>
  );
}
