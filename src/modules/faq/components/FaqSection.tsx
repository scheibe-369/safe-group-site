import { SectionHeading } from "@/shared/ui/SectionHeading";
import { faqItems } from "../data/faq";
import { FaqItemBubble } from "./FaqItemBubble";

export function FaqSection() {
  return (
    <section className="safe-section bg-[#080808]">
      <div className="safe-container grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
        <SectionHeading kicker="Perguntas frequentes" title="Clareza antes da intervenção." />
        <div className="border-t border-white/15">
          {faqItems.map((item) => (
            <FaqItemBubble key={item.question} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
