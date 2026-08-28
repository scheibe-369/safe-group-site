import Image from "next/image";
import type { FaqItem } from "../types/faq";

type FaqItemBubbleProps = {
  item: FaqItem;
};

/**
 * Um item de FAQ em formato de conversa: a pergunta e um balao que abre, mostra
 * os pontinhos de "a escrever" por um instante e so depois revela a resposta ao
 * lado do selo da Safe. Tudo por CSS a partir do estado `[open]` do `<details>`
 * (classes `safe-faq-*`, definidas em `styles/faq.css`), sem JavaScript. O
 * `name="faq"` faz o navegador fechar sozinho qualquer outro item aberto
 * quando este abre, como na referencia: nunca dois balões abertos ao mesmo
 * tempo, sem precisar de JavaScript para isso.
 */
export function FaqItemBubble({ item }: FaqItemBubbleProps) {
  return (
    <details name="faq" className="group">
      <summary className="safe-faq-bubble inline-block w-fit max-w-lg cursor-pointer select-none rounded-2xl bg-white/[.06] px-5 py-3.5 text-base font-medium text-white/70 transition-colors duration-150 hover:bg-white/[.1] hover:text-white group-open:bg-white/[.1] group-open:text-white">
        {item.question}
      </summary>
      <div className="mt-3 flex items-end justify-end gap-3">
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
    </details>
  );
}
