# `faq`

Seccao de perguntas frequentes da Home. Titulo unico centrado ("Perguntas
antes de começar"), sem kicker, com os balões numa coluna estreita por baixo.
Cada pergunta abre um balao de conversa: mostra os pontinhos de "a escrever"
por meio segundo e so depois revela a resposta ao lado do selo da Safe, como
se a marca estivesse a responder. So um balao fica aberto de cada vez.

Extraido de `modules/home` (onde vivia como `FaqSection.tsx` com um accordion
simples, kicker e linhas divisorias) e reconstruido no formato de conversa,
adaptado de um padrao de interacao visto noutro projeto do grupo. Sem linhas
entre os itens: cada balao ja se distingue pelo proprio fundo. O titulo usa a
mesma escala tipografica das outras seccoes (`SectionHeading`), so sem o
kicker.

`FaqList` guarda em React qual pergunta esta aberta e troca via `data-open`,
em vez do `<details name="faq">` nativo da primeira versao: o navegador fecha
o balao anterior num salto (`display: none` sem transicao), o que cortava a
animacao de fecho a meio. Com o estado em React, o cartao inteiro colapsa por
uma `transition` de `grid-template-rows` em `.safe-faq-collapse`
(`styles/faq.css`), que anima igual nos dois sentidos: o fecho fica tao
fluido quanto a abertura. A coreografia interna (pontinhos, depois resposta)
continua em `animation` de um sentido so, gatilhada por `[data-open="true"]`.

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
    FaqList.tsx          estado: qual pergunta esta aberta (uma de cada vez)
    FaqItemBubble.tsx    um item: balao da pergunta + "a escrever" + resposta
  data/faq.pt-PT.ts      titulo e as 7 perguntas, copy da lingua de origem
  data/faq.ts            mapa por idioma, `getFaqContent`
  types/faq.ts           contratos `FaqItem` e `FaqContent`
  styles/faq.css          transition do colapso, keyframes do balao e da resposta
```

## Avatar da resposta

O circulo ao lado da resposta usa `/brand/safe-seal-icon.webp` (o mesmo selo
ja usado no `social-dock`). Trocar o icone e so trocar essa referencia em
`FaqItemBubble.tsx`.
