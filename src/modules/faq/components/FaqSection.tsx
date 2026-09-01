import { getLocale } from "next-intl/server";
import { getFaqContent } from "../data/faq";
import { FaqList } from "./FaqList";

export async function FaqSection() {
  const content = getFaqContent(await getLocale());

  return (
    <section id="faq" className="safe-section scroll-mt-28 bg-[#080808]">
      <div className="safe-container flex flex-col items-center">
        {/* Mesma escala de titulo das outras seccoes (SectionHeading), sem
            kicker e centrado, como na referencia. */}
        <h2 className="max-w-2xl text-center text-4xl font-semibold leading-[.98] tracking-[-.045em] text-white sm:text-5xl lg:text-6xl">
          {content.title}
        </h2>
        <div className="mt-10 sm:mt-14">
          <FaqList items={content.items} />
        </div>
      </div>
    </section>
  );
}
