# site-intro

Cortina de carregamento e revelacao da primeira dobra.

A cortina segue o desenho da entrada de [nyo.ia.br](https://nyo.ia.br): um bloco pequeno ao centro do ecra, em monoespacada, com a linha de estado por cima e, por baixo, o contador a esquerda e a marca Safe a direita. A barra branca entra pela esquerda em quatro tempos e e ela que revela a linha, escrita a preto sobre o preto da cortina. O contador nao conta, salta pelas mesmas quatro paragens (00, 23, 65, 100), cada salto uma volta do rolo. Os instantes e as curvas vieram da propria linha temporal Webflow IX3 da referencia e foram conferidos frame a frame.

- `components/SiteIntro.tsx`: script inline que escreve `data-intro="pending"` e `data-intro-at` no `<html>` antes da primeira pintura (so sem movimento reduzido), e a cortina em si. Monta-se como primeiro filho do `<body>` no layout.
- `data/timeline.ts`: os instantes da coreografia, em segundos. Unico sitio onde se mexe no ritmo.
- `data/content.ts`: a linha de estado e as quatro leituras do contador.
- `lib/stagger.ts`: atrasos de um grupo escalonado, no modelo do GSAP, com ordem baralhada estavel entre servidor e cliente.
- `hooks/useSiteIntro.ts`: so o estado. Decide o momento em que a primeira dobra comeca a entrar, corrigido pelo tempo que a hidratacao demorou e adiado enquanto a pagina ou as fontes nao estiverem prontas.
- `styles/site-intro.css`: estados no `<html>`, cortina e o vocabulario de revelacao (`.intro-mask`, `data-intro-step`, `data-intro-reveal`) que a Hero, o cabecalho e o `PageHero` usam sem importar nada deste modulo.

A coreografia e toda CSS e arranca na primeira pintura, sem esperar pela hidratacao. Cada elemento tem no maximo dois instantes, `--intro-in` e `--intro-out`, em dois envolucros encaixados, para nunca haver duas animacoes a disputar a mesma propriedade.

Para a cortina ficar mais rapida ou mais lenta mexe-se em `--intro-speed`, no CSS: multiplica atrasos e duracoes de uma vez, e o gancho le esse valor.

Sem JavaScript ou com `prefers-reduced-motion: reduce` nao existe atributo, nao existe cortina e a pagina nasce no estado final.
