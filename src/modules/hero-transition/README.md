# hero-transition

Envolve a `Hero` real (`<HeroTransition><Hero /></HeroTransition>`, ver
`src/app/page.tsx`): listras diagonais pretas cobrem a propria Hero em
cascata durante o scroll, seguram um instante a preto e depois a proxima
seccao sobe pelo scroll natural. Nao duplica a Hero nem o seu video, o
overlay fica por cima do conteudo real. Corre em qualquer largura, mas com
duas leituras da mesma coreografia.

- `components/HeroTransition.tsx`: recebe a Hero como `children`, poe um
  `.hero-transition__stage` a volta dela e um `.hero-transition__hold` a
  seguir. O `hold` e o espaco de scroll que o sticky precisa para segurar no
  telemovel e tem de ser um irmao real do palco: o sticky so se desloca
  dentro da content box do wrapper, por isso dar essa folga por
  `padding-bottom` nao prendia nada (custou uma iteracao inteira a perceber).
- `hooks/useStripeWipe.ts`: carrega GSAP + ScrollTrigger de forma dinamica,
  arma o palco pelo `data-wipe` do wrapper e liga o `scaleX` das listras ao
  progresso do scroll, so em modo `scrub` (sem pin). Sai cedo em
  `prefers-reduced-motion: reduce`. Usa `gsap.matchMedia`, nao um `if`, para
  que rodar o telemovel ou redimensionar o browser troque de leitura e
  reverta os estilos inline da leitura antiga.
- `styles/hero-transition.css`: geometria das 9 listras (skew + overflow
  hidden do stage escondem a folga do skew nas bordas) e o filete
  `--safe-red` na aresta que avança. O overlay das listras leva
  `pointer-events: none` para nunca tapar os cliques nos CTAs da Hero antes
  de a cobertura la chegar, e `z-index: 20` obrigatorio: a Hero e so
  `position: relative` sem z-index proprio, nao cria o seu proprio contexto
  de empilhamento, e o `z-10` do texto/CTAs da Hero escapa para competir
  directamente ao nivel do stage. Sem esse z-index maior aqui, o texto da
  Hero ficava por cima do overlay mesmo entrando depois no DOM.

## As duas leituras (`data-wipe`)

- `pinned` (>= 1024px): a Hero cabe no ecra, o wrapper ganha 220vh e o stage
  vira `sticky` a 100vh, prendendo a Hero durante o scroll extra. O sticky
  faz o papel de "pin" sem o custo de reflow do `ScrollTrigger.pin`; como a
  seccao seguinte tambem e quase preta, cobrir a preto e deixar o sticky
  soltar ja basta como revelacao.
- `compact` (< 1024px): a Hero passa dos 760px e nao cabe no ecra. O stage
  fica com a altura real dela e o `top` negativo encosta o **fundo** da Hero ao
  fundo do ecra enquanto esta presa: e la que estao o CTA e a assinatura, e um
  pin pelo topo escondia-os. O scroll extra vem do `hold` (85svh), menos que no
  desktop para nao pesar no telemovel.

  Esse `top` e `min(0px, calc(100dvh - var(--hero-transition-stage)))`, e a
  parte do `dvh` e o ponto todo: quando a barra de endereco do telemovel se
  esconde, o ecra cresce uns 80px, e um pin medido uma vez em JavaScript fica
  curto, deixando a seccao seguinte a espreitar numa faixa por baixo da
  cobertura (foi exatamente o defeito reportado). Do hook vai so a altura do
  palco, que e medida de layout e nao muda com a barra; o resto e o browser a
  reavaliar o `dvh`. Pela mesma razao o `min-height` do palco usa `lvh` (o ecra
  na medida maior, sem barra): garante `top` sempre <= 0, ou seja, cobertura de
  ecra inteiro em qualquer estado da barra, incluindo em ecras mais altos que a
  Hero (tablet em retrato, onde o palco estica).

O `data-wipe` so entra por JavaScript, de proposito: sem JS, sem GSAP, ou com
`prefers-reduced-motion: reduce`, nao ha listras para correr e o scroll extra
ficaria a mostrar preto parado. Sem o atributo o wrapper fica com altura
automatica (a da propria Hero) e nao ha efeito nenhum: a Hero renderiza
exatamente como sem este modulo.
