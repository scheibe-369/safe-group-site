# hero-transition

Envolve a `Hero` real (`<HeroTransition><Hero /></HeroTransition>`, ver
`src/app/page.tsx`): listras diagonais pretas cobrem a propria Hero em
cascata durante o scroll, seguram um instante a preto e depois a proxima
seccao sobe pelo scroll natural. Nao duplica a Hero nem o seu video, o
overlay fica por cima do conteudo real.

- `components/HeroTransition.tsx`: recebe a Hero como `children` e poe um
  `.hero-transition__stage` a volta dela. So a partir do `lg` e fora de
  `prefers-reduced-motion: reduce` e que o wrapper ganha 220vh de altura e o
  stage vira `sticky`, prendendo a Hero no ecra durante o scroll extra
  enquanto as listras (`.hero-transition__stripes`, sibling da Hero dentro do
  stage) a cobrem por cima. O sticky faz o papel de "pin" sem o custo de
  reflow do `ScrollTrigger.pin`; como a Partners tambem e quase preta, cobrir
  a preto e deixar o sticky soltar ja basta como revelacao.
- `hooks/useStripeWipe.ts`: carrega GSAP + ScrollTrigger de forma dinamica e
  liga o `scaleX` das listras ao progresso do scroll do wrapper, so em modo
  `scrub` (sem pin). Sai cedo em `prefers-reduced-motion: reduce` ou abaixo
  de `1024px`.
- `styles/hero-transition.css`: geometria das 9 listras (skew + overflow
  hidden do stage escondem a folga do skew nas bordas) e o filete
  `--safe-red` na aresta que avança. O overlay das listras leva
  `pointer-events: none` para nunca tapar os cliques nos CTAs da Hero antes
  de a cobertura la chegar, e `z-index: 20` obrigatorio: a Hero e so
  `position: relative` sem z-index proprio, nao cria o seu proprio contexto
  de empilhamento, e o `z-10` do texto/CTAs da Hero escapa para competir
  directamente ao nivel do stage. Sem esse z-index maior aqui, o texto da
  Hero ficava por cima do overlay mesmo entrando depois no DOM.

Sem JavaScript, sem `gsap` carregado, abaixo de `1024px`, ou com
`prefers-reduced-motion: reduce`, o wrapper fica com altura automatica (a da
propria Hero) e nao ha efeito nenhum: a Hero renderiza exatamente como sem
este modulo.
