"use client";

import Image from "next/image";
import type { FaqItem } from "../types/faq";

type FaqItemBubbleProps = {
  item: FaqItem;
  open: boolean;
  onToggle: () => void;
};

/**
 * Um item de FAQ em formato de conversa: a pergunta e um balao, ao abrir
 * mostra os pontinhos de "a escrever" por um instante e so depois revela a
 * resposta ao lado do selo da Safe. O estado (`open`) vem de `FaqList`, que
 * so deixa uma pergunta aberta de cada vez.
 */
export function FaqItemBubble({ item, open, onToggle }: FaqItemBubbleProps) {
  return (
    <div className="safe-faq-item group" data-open={open ? "true" : "false"}>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="safe-faq-bubble block w-fit max-w-lg cursor-pointer select-none rounded-2xl bg-white/[.06] px-5 py-3.5 text-left text-base font-medium text-white/70 transition-colors duration-150 hover:bg-white/[.1] hover:text-white group-data-[open=true]:bg-white/[.1] group-data-[open=true]:text-white"
      >
        {item.question}
      </button>
      <div className="safe-faq-collapse">
        {/* O filho direto de `.safe-faq-collapse` so leva `overflow: hidden`
            (por CSS) e nao pode ter padding proprio: padding de caixa nao
            encolhe com overflow, so o conteudo que estoura encolhe. Por isso
            o respiro (`pt-3`) mora um nivel mais fundo, senao sobra uma
            fresta ao fechar. */}
        <div>
          <div className="flex items-end justify-end gap-3 pt-3">
            <div className="min-w-0 grow">
              <div className="safe-faq-typing" aria-hidden="true">
                <div>
                  <span className="ml-auto flex w-fit items-center gap-1.5 rounded-2xl bg-white/[.06] px-5 py-4">
                    <i className="h-1.5 w-1.5 rounded-full bg-white/40" />
                    <i className="h-1.5 w-1.5 rounded-full bg-white/40" />
                    <i className="h-1.5 w-1.5 rounded-full bg-white/40" />
                  </span>
                </div>
              </div>
              <div className="safe-faq-answer">
                <div>
                  <p className="ml-auto max-w-xl rounded-2xl bg-white/[.06] px-5 py-4 text-sm leading-7 text-white/55">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
            <span
              aria-hidden="true"
              className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white"
            >
              <Image
                src="/brand/safe-seal-icon.webp"
                alt=""
                width={64}
                height={64}
                sizes="36px"
                className="h-full w-full rounded-full object-contain"
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
