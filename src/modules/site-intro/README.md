# site-intro

Cortina de carregamento e revelacao da primeira dobra, no padrao da Home da Tyvo.

- `components/SiteIntro.tsx`: script inline que escreve `data-intro="pending"` no `<html>` antes da primeira pintura (so sem movimento reduzido) e a cortina em si: marca Safe, contador ate 100%, filete de progresso e assinatura. Monta-se como primeiro filho do `<body>` no layout.
- `hooks/useSiteIntro.ts`: linha temporal. Conduz o contador, espera pelo `load` e pelas fontes (com teto), tira a marca, desce a cortina e liberta as mascaras.
- `styles/site-intro.css`: estados no `<html>`, cortina e o vocabulario de revelacao (`.intro-mask`, `data-intro-step`, `data-intro-reveal`) que a Hero, o cabecalho e o `PageHero` usam sem importar nada deste modulo.
- `data/content.ts`: copy da cortina.

Sem JavaScript ou com `prefers-reduced-motion: reduce` nao existe atributo, nao existe cortina e a pagina nasce no estado final.
