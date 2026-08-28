# `faq`

Seccao de perguntas frequentes da Home. Titulo unico centrado ("Perguntas
antes de começar"), sem kicker, com os balões numa coluna estreita por baixo.
Cada pergunta abre um balao de conversa: mostra os pontinhos de "a escrever"
por meio segundo e so depois revela a resposta ao lado do selo da Safe, como
se a marca estivesse a responder. So um balao fica aberto de cada vez, o
`name="faq"` no `<details>` fecha o anterior sozinho quando outro abre.

Extraido de `modules/home` (onde vivia como `FaqSection.tsx` com um accordion
simples, kicker e linhas divisorias) e reconstruido no formato de conversa,
adaptado de um padrao de interacao visto noutro projeto do grupo. Sem linhas
entre os itens: cada balao ja se distingue pelo proprio fundo. A logica toda
e CSS puro a partir do estado `[open]` do `<details>` (`styles/faq.css`), sem
JavaScript. O titulo usa a mesma escala tipografica das outras seccoes
(`SectionHeading`), so sem o kicker.

## Usar

```tsx
import { FaqSection } from "@/modules/faq/components/FaqSection";

<FaqSection />
```

## Estrutura

```
src/modules/faq/
  components/
    FaqSection.tsx      a seccao (titulo centrado e a lista)
    FaqItemBubble.tsx    um item: balao da pergunta + "a escrever" + resposta
  data/faq.ts            as 7 perguntas e respostas, copy pt sem travessao
  types/faq.ts           contrato `FaqItem`
  styles/faq.css          keyframes do balao, dos pontinhos e da resposta
```

## Avatar da resposta

O circulo ao lado da resposta usa `/brand/safe-seal-icon.webp` (o mesmo selo
ja usado no `social-dock`). Trocar o icone e so trocar essa referencia em
`FaqItemBubble.tsx`.
