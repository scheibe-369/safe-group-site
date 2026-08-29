# statement-section

Secao logo a seguir a `hero-transition`, no padrao da segunda secao da Tyvo
(`design-source/image.png`). Efeito extraido do codigo real do site deles
(`D:/Projetos-vibeocding/tyvo/site/index.html`, script inline `.split-lines`):
titulo gigante cujas linhas sao reveladas da esquerda para a direita por uma
mascara preta que encolhe conforme o scroll passa por elas, mais um paragrafo
de apoio e um botao. Sem kicker, sem grelha.

- `data/content.ts`: titulo e paragrafo sao a copy exata da Tyvo (confirmada
  no DOM ao vivo em `tyvo-athostudio.webflow.io`), a pedido explicito do
  utilizador. So o botao muda: "CONTRATE A TYVO" virou "Contratar a Safe",
  a apontar para `/contacto`. O tamanho do titulo (`clamp(2rem,4.4vw,5.5rem)`
  no componente) tambem foi medido ao vivo: a Tyvo usa `font-size:4em` fixo
  a partir de ~992px (63.99px a 1440px de viewport), nao um `vw` fluido sem
  limite como a primeira versao daqui tinha.
- `components/StatementSection.tsx`: renderiza o titulo como texto simples
  (o `SplitType` parte em linhas/palavras no cliente) e chama
  `useLineWipeReveal`.
- `hooks/useLineWipeReveal.ts`: mesmo mecanismo do original da Tyvo. Carrega
  `split-type` (biblioteca real deles, `npm install split-type`) + GSAP +
  ScrollTrigger de forma dinamica; `SplitType` com `types: "lines, words"`
  envolve cada linha num `.line` e injeta um `.line-mask` (ver
  `styles/statement-section.css`); GSAP encolhe a largura dessa mascara de
  100% a 0% enquanto a linha atravessa o centro do ecra
  (`start: "top center", end: "bottom center", scrub: 1`), revelando o texto
  da esquerda para a direita. Reconstroi tudo no resize (a Tyvo faz o mesmo,
  porque a quebra de linha muda). So sai cedo em `prefers-reduced-motion:
  reduce`; sem restricao de breakpoint, tal como no original.
- `styles/statement-section.css`: `.line`/`.line-mask`, a mesma estrutura da
  Tyvo, so a cor da mascara trocada para `var(--safe-black)`.

Sem JavaScript, ou com `prefers-reduced-motion: reduce`, o `SplitType` nunca
corre, o titulo fica como texto normal e totalmente visivel.
