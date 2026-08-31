# Módulo `solutions`

Duas superfícies, um só conjunto de dados:

- **Secção da Home** (`SolutionsSection`), ancorada em `#solucoes`, entre a
  Metodologia e os Cases. Seis painéis de ecrã inteiro empilhados em scroll.
- **Páginas de detalhe** (`SolutionDetail`), servidas por
  `src/app/solucoes/[slug]/page.tsx`, uma por solução.

Tudo o que é texto e imagem vive em `data/solutions.ts`. Trocar copy, ordem ou
fotografia não obriga a tocar em nenhum componente.

## Origem do desenho

A mecânica é uma réplica da secção de serviços do template Webflow
[Tyvo](https://tyvo-athostudio.webflow.io), a pedido do utilizador. Os valores
foram medidos no CSS do original e no motor de interações IX2 do Webflow, não
estimados a olho. Os cabeçalhos de `styles/solutions.css` e
`styles/solution-detail.css` registam medida a medida o que foi reproduzido.

Três desvios deliberados, todos justificados em comentário no CSS:

1. **O sistema de escala não veio.** O original escala tudo a partir de
   `body { font-size: 1.111vw }` com as medidas em `em`. Importar isso criava
   uma segunda raiz de escala a competir com o `.safe-container` (lição já
   registada em `tasks/lessons.md`). Cada medida foi convertida para o `vw`
   equivalente e fechada num `clamp()`, o que preserva a proporção.
2. **A margem esquerda é a do site** (`clamp(2rem, 5vw, 7.5rem)`), não os
   2.78vw do original, para o título não desalinhar da barra de navegação.
3. **Há um véu horizontal que o original não tem.** As fotografias da Tyvo eram
   todas escuras; as da Safe não. A de Estratégia é um documento claro e apagava
   o menu branco encostado à direita.

## Como a secção funciona

O empilhamento é `position: sticky` no CSS, nunca `ScrollTrigger.pin`, pela
mesma razão documentada em `src/modules/hero-transition/hooks/useStripeWipe.ts`:
o sticky já faz o papel do pin sem o custo de reflow.

A secção tem `--solutions-count * 100vh` de altura, ou seja 100vh de scroll por
painel. Cada painel é `sticky; top: 0`, por isso o seguinte sobe por cima do
anterior em vez de o empurrar.

`SolutionsStage` é a **única** peça de cliente. Recebe o menu e os painéis já
renderizados no servidor por `children`, tal como `HeroTransition` faz com a
Hero. Sem isso, a copy das seis páginas de detalhe atravessava a fronteira e ia
parar ao payload da Home.

### Contrato de atributos

O estado vive no DOM, escrito pelos hooks, e não em `useState`: não há árvore
React deste lado para voltar a renderizar, e assim o scroll não provoca
re-renders dos seis `next/image`.

| Atributo | Onde | Escrito por | Para quê |
|---|---|---|---|
| `data-motion="on"` | `[data-solutions-list]` | `useSolutionsStack` | Arma o estado inicial escondido do reveal. Só entra por JavaScript: sem o bundle, ou com `prefers-reduced-motion`, o texto renderiza no sítio em vez de ficar preso fora da máscara. |
| `data-revealed` | cada `[data-panel]` | `useSolutionsStack` | Dispara o reveal do painel, uma vez. |
| `data-active` | cada `[data-menu-item]` | `useSolutionsStack` | Item aceso na coluna da direita. |
| `data-cursor` | `.solutions` | `useSolutionCursor` | Esconde o ponteiro do sistema quando o círculo "abrir" está montado. |
| `data-visible` | `.solutions__cursor` | `useSolutionCursor` | Escala o círculo de 0 para 1. |

Um único `IntersectionObserver` governa o reveal e o item aceso. Como os painéis
são `sticky`, os que já estão presos continuam a contar 100 por cento de
visibilidade mesmo tapados pelo seguinte (o observador não sabe de oclusão), por
isso o painel da frente é sempre o de maior índice acima do limiar. Isso mantém
o menu e o reveal em fase nos dois sentidos do scroll, sem contas de posição.

## Leituras estreitas

Abaixo de 992px, tal como no original: o menu desaparece, o link que cobre o
painel inteiro desaparece, e o convite passa a ser o botão "Mais detalhes". O
conteúdo sobe para o topo e o gradiente de leitura acompanha. Nunca há dois
alvos de clique activos ao mesmo tempo.

## Imagens

Os originais chegam como PNG a `serviços-fotos/` na raiz do projeto, fora do
controlo de versões. `node scripts/build-solution-images.mjs` converte-os para
WebP em `public/solucoes/`. Correr sempre que uma foto for trocada.

Nenhum painel leva `priority`: a secção fica muito abaixo da dobra e um
`<link rel="preload">` no cabeçalho disputava largura de banda com o verdadeiro
LCP da Home, que é o vídeo da Hero. Na página de detalhe é o contrário, o hero
ocupa o primeiro ecrã e leva `priority` e `fetchPriority="high"`.

## Dívida conhecida

`SolutionStatement` reutiliza `useLineWipeReveal` de `statement-section`. O hook
injeta `.line-mask` dentro de cada `.line`, e essas classes são estilizadas no
CSS daquele módulo, que chega aqui apenas por o `globals.css` o importar.
Nenhum import declara essa dependência: se `statement-section` sair, este bloco
parte em silêncio. A correção limpa é promover o hook e as duas classes para
`src/shared/`, como já acontece com `metallic-shine.css`.

`SolutionFigures` está pronto mas desligado. O `AGENTS.md` proíbe inventar
métricas, por isso nenhuma solução preenche o campo `figures`. Basta preencher
com números reais para a grelha acender, sem tocar em código.
