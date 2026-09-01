import { getLocale } from "next-intl/server";
import { SectionHeading } from "@/shared/ui/SectionHeading";
import { getPartnersContent } from "../data/content";
import { PartnersMarquee } from "./PartnersMarquee";

/**
 * A faixa do carrossel fica fora do `.safe-container` de proposito: a
 * mascara de desvanecimento nas bordas ja e de borda a borda por natureza,
 * ao contrario do carrossel de cases (`CasesRail`), que precisa do truque de
 * `100vw` para sangrar so de um lado.
 */
export async function PartnersSection() {
  const content = getPartnersContent(await getLocale());

  return (
    <section className="bg-[var(--safe-black)] py-16 lg:py-20">
      <div className="safe-container">
        <SectionHeading kicker={content.kicker} title={content.title} align="center" />
      </div>
      <div className="mt-12">
        {/* Os rotulos descem por prop: o carrossel corre no cliente e importar
            o getter la dentro arrastava os cinco idiomas para o pacote. */}
        <PartnersMarquee labels={content.labels} />
      </div>
    </section>
  );
}
