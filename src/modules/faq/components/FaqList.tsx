"use client";

import { useState } from "react";
import type { FaqItem } from "../types/faq";
import { FaqItemBubble } from "./FaqItemBubble";

type FaqListProps = {
  items: readonly FaqItem[];
};

/**
 * Guarda qual pergunta esta aberta e controla o fecho por `data-open`, em vez
 * do `<details name>` nativo: o navegador fecha o balao anterior num salto
 * (troca pra `display: none` sem transicao), o que cortava a animacao a
 * meio. Com o estado em React, fechar usa a mesma `transition` do CSS que
 * abre, so que ao contrario, antes do balao sair da arvore.
 */
export function FaqList({ items }: FaqListProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="w-full max-w-2xl space-y-3">
      {items.map((item, index) => (
        <FaqItemBubble
          key={item.question}
          item={item}
          open={openIndex === index}
          onToggle={() => setOpenIndex((current) => (current === index ? null : index))}
        />
      ))}
    </div>
  );
}
