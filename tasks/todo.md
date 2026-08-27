# Reestruturação de copy e conversão

- [x] Analisar a estrutura de conversão de Kyon Med, NYO, Tyvo e G4.
- [x] Definir a direcção de copy da Safe sem importar promessas, métricas ou prova social sem fonte.
- [x] Reescrever a copy pública da Home e das páginas institucionais.
- [x] Consolidar a análise e o inventário de copy em `copy.md`.
- [x] Executar validações de conteúdo, tipos, lint e build.
- [x] Iniciar o site em localhost e confirmar as rotas principais.

## Correção da Hero em portáteis e ecrãs amplos

- [x] Identificar a causa: margem lateral excessiva, headline demasiado alta e altura de ecrã sem limite.
- [x] Reequilibrar espaçamento, escala tipográfica, texto explicativo e CTAs da Hero.
- [x] Confirmar a Hero em 375, 768, 1024 e 1440 pixels e registar a revisão.

## Correção da compressão vertical da Hero

- [x] Identificar a regressão: altura máxima baixa, alinhamento vertical ao centro e mapa de áreas a competir pelo mesmo espaço.
- [x] Restaurar a cadência vertical da Hero sem reintroduzir os CTAs fora do primeiro ecrã.
- [x] Validar a rota Home no localhost depois da correção.

## Correção visual baseada em captura

- [x] Inspecionar `image copy 5.png` e separar o corte do vídeo do vão da secção seguinte.
- [x] Mostrar o vídeo completo em desktop e reduzir o espaço de transição para o posicionamento.
- [x] Validar a Home no localhost com a nova composição.

## Composição da Hero a partir da quebra observada

- [x] Identificar a headline em quatro linhas e a sobreposição demasiado escura sobre a arquitectura do vídeo.
- [x] Usar uma headline que mantenha duas linhas e preencher a transição visual entre conteúdo e símbolo.
- [x] Validar a Home no localhost.

### Revisão da composição

- Headline curta em duas linhas: "Encontre a prioridade." Evita a quebra de quatro linhas que dominava a coluna de texto.
- O gradiente revela mais da arquitectura do fundo a partir do centro da Hero, sem perder contraste sobre a copy.
- O método Diagnóstico, Prioridade e Execução ocupa a faixa visual entre a copy e o símbolo em ecrãs a partir de 1280px. Não aparece em larguras menores para não sobrepor os CTAs.
- `npm run lint` aprovou typecheck, conteúdo e skills. A Home responde HTTP 200 no localhost.

### Revisão baseada na captura

- A captura mostrou que a Hero usava `object-cover` para um vídeo 16:9 dentro de um ecrã ultralargo. Em desktop, passou para `object-contain object-right`, preservando todo o enquadramento do vídeo à direita.
- Em telemóvel mantém `cover`, porque `contain` criaria uma área vazia vertical excessiva num ecrã estreito.
- A secção "O ponto de partida" deixa de usar o `safe-section` genérico no topo. O espaço entre a Hero e o título é reduzido de até 9rem para no máximo 6rem, sem encurtar o conteúdo seguinte.
- `npm run lint` aprovou typecheck, conteúdo e skills. A Home responde HTTP 200 no localhost.
- A captura automática foi tentada pelo navegador integrado e por Edge headless. Ambos foram bloqueados por permissões do Windows neste ambiente, por isso não foi produzida uma imagem enganosa como se fosse uma renderização real.

### Revisão da correção de compressão

- A Hero volta a iniciar pelo topo em desktop, com mínimo de 760px e máximo de 860px. O bloco deixa de ser centrado verticalmente.
- O mapa em grelha foi removido. Procura, Comercial e Tecnologia ficam numa única linha leve, sem roubar altura aos CTAs.
- A escala menor do título e a margem lateral reduzida mantêm-se, pois tratam os problemas originais sem alterar a cadência vertical.
- `npm run lint` aprovou typecheck, conteúdo e skills. A Home responde HTTP 200 em `http://127.0.0.1:3000`.

### Revisão da Hero

- Espaço lateral: 16px em 375 e 768, 41px em 1024, 58px em 1440 e máximo de 120px em ecrãs maiores. A margem deixa de crescer com a área vazia de monitores ultralargos.
- Título: passa de um máximo de 96px para 76px, com 40px em telemóvel e portátil estreito. A frase ocupa duas linhas e não expulsa os CTAs do primeiro ecrã.
- Altura: a Hero deixa de usar altura de ecrã ilimitada. Em desktop tem no máximo 740px, mínimo de 640px e alinha o bloco de conversão ao centro.
- Clareza: o kicker identifica operações high ticket, o texto nomeia estratégia comercial, marketing, dados e tecnologia, e a grelha mostra as três áreas lidas no diagnóstico.
- Ação: os CTAs foram aproximados do texto, com intervalo de 12px em mobile e 24px em desktop. A assinatura inferior continua escondida abaixo de 900px de altura, sem competir com os botões.
- Validação: HTML local confirma título, explicação, mapa de áreas e ambos os CTAs. A instalação local perdeu dependências transitivas durante a sessão, foi reparada com `npm install --ignore-scripts --no-audit --no-fund`, e `npm run lint` voltou a aprovar typecheck, conteúdo e skills. A construção do Next continua bloqueada externamente por `spawn EPERM`. Playwright continua bloqueado pelo Windows com `PermissionError`.

## Revisão da reestruturação de copy

- Pesquisa: Kyon Med, NYO, Tyvo e G4 foram analisados pela mecânica de conversão. A síntese e os links estão em `copy.md`.
- Copy: Home, Sobre, Soluções, Método, Contacto, formulário, metadados, cabeçalho, rodapé, FAQ, frentes, sectores e fechos agora usam a mesma narrativa: tensão, diagnóstico, prioridade, execução e CTA.
- Segurança editorial: não foram introduzidas promessas, métricas, clientes, testemunhos ou escassez artificial. IA, marketing e tecnologia permanecem meios dentro da estrutura Safe.
- Validação: `npm run typecheck` e `npm run lint` aprovados. O guard de conteúdo confirmou a regra de copy e o crédito de produção.
- Build: `npm run build` chegou à compilação optimizada, mas o sandbox bloqueou a criação do subprocesso do Next com `spawn EPERM`.
- Localhost: servidor de desenvolvimento activo em `http://127.0.0.1:3000`. As rotas `/`, `/sobre`, `/solucoes`, `/metodo`, `/cases` e `/contacto` responderam HTTP 200.
- Teste visual: o Playwright não pode abrir o browser no sandbox, por erro de permissão do Windows. A validação HTTP foi concluída; a conferência responsiva visual continua dependente de um ambiente com browser autorizado.

# Implementação inicial

## Publicação Cloudflare

- [x] Preparar scripts de build e deploy OpenNext.
- [ ] Gerar o bundle de produção para Cloudflare Workers.
- [ ] Publicar o Worker `safe-group-site` com o token de deploy.
- [ ] Validar o endereço público e os ativos principais.
- [x] Registar o fluxo de deploy automático do projeto.

Bloqueio local: duas tentativas de publicação falharam com `spawn EPERM`, e o terminal não alcança Cloudflare ou GitHub porque o proxy local em `127.0.0.1` recusa ligações. O navegador integrado também não está disponível. O fallback GitHub Actions está configurado, mas ainda precisa de um repositório remoto, do secret e de um push autorizado para executar.

## Reposicionamento multissetorial high ticket

- [x] Atualizar a memória permanente da marca e remover a definição exclusivamente automóvel.
- [x] Mapear e reescrever a copy enviesada para stands, viaturas e mercado automóvel.
- [x] Representar experiência nos setores automóvel, financeiro e software/SaaS sem inventar provas.
- [x] Tornar cases e formulário compatíveis com operações high ticket de vários setores.
- [x] Rever metadata, sitemap, conteúdo e TypeScript.

### Revisão do reposicionamento

- Home: nova secção multissetorial com Automóvel, Financeiro e Software/SaaS.
- Copy: diagnóstico, soluções, método, Sobre, FAQ, rodapé e metadados generalizados para operações high ticket.
- Cases: catálogo preparado para múltiplos setores, sem clientes ou resultados fictícios.
- Formulário: empresa, setor, dimensão e prioridades multissetoriais incluídos no esquema validado.
- Memória: relação histórica com a Growth Hub registada apenas como contexto interno, proibida na narrativa pública fora do crédito obrigatório.
- Verificação: `npm run lint` aprovado e seis rotas principais responderam com HTTP 200.

- [x] Estruturar as skills locais e a memória permanente do projeto.
- [x] Organizar os ativos sem sobrescrever os originais.
- [x] Criar a base Next.js, tokens e layout global.
- [x] Implementar a Home institucional.
- [x] Implementar páginas Sobre, Soluções, Método, Cases e Contacto.
- [x] Criar catálogo e template modular de cases.
- [x] Preparar o formulário para webhook sem ativar envio externo.
- [x] Configurar metadata, sitemap, robots, favicon e Cloudflare.
- [x] Executar typecheck, validações de conteúdo e testes HTTP locais.

## Próxima etapa

- [ ] Substituir o vídeo 720p por um master 1440p ou 4K.
- [ ] Receber e publicar cases reais com evidências aprovadas.
- [ ] Definir o webhook, proteção de frequência e política de privacidade antes de ativar o formulário.
- [ ] Executar a captura visual em 375, 768, 1024 e 1440 pixels num ambiente com navegador autorizado.
- [ ] Rever domínio final, dados de contacto, analytics, SEO e consentimento.
- [ ] Fazer deploy apenas após instrução explícita do utilizador.

## Revisão da entrega

- `npm run lint`: aprovado, inclui TypeScript, regra de copy, crédito obrigatório e 10 skills locais.
- Runtime local: rotas `/`, `/sobre`, `/solucoes`, `/metodo`, `/cases`, `/contacto`, `robots.txt`, `sitemap.xml`, vídeo e logo responderam com HTTP 200.
- Endpoint `/api/diagnostic`: respondeu HTTP 503 enquanto o webhook está vazio, como previsto.
- Vídeo: o hash SHA-256 do fluxo H.264 original e do ativo publicado é idêntico.
- Build: a compilação foi iniciada, mas a criação de subprocessos foi bloqueada pelo sandbox com `spawn EPERM`. O mesmo bloqueio impediu Chrome, Edge, Playwright e a captura responsiva. O typecheck e o runtime foram validados por caminhos independentes.
- Nenhum commit, push ou deploy foi realizado.

## Ajuste de botões e eixo de margem em ecrã grande

- [x] Reduzir a altura dos botões de 48 para 44 pixels e subir o texto de 12 para 13 pixels.
- [x] Alinhar cabeçalho, Hero e secções num único eixo de margem.
- [x] Verificar alinhamento e overflow em 7 larguras e 6 rotas.

### Revisão

Problema: em monitores acima de 1440 pixels a caixa central de 80rem empurrava o conteúdo para o meio do ecrã. Numa janela de 2000 pixels a Hero começava a 17,75 por cento da largura, quando a referência visual aprovada a coloca a 9,4 por cento. O bloco lia-se como uma ilha pequena num quadro grande.

Correção: nova regra `.safe-container, .safe-edge` em `src/app/globals.css`. Até 1024 pixels mantém a caixa centrada de 80rem. Acima disso passa a margem proporcional `max(clamp(3.5rem, 9.4vw, 15rem), calc((100vw - 106rem) / 2))`. O primeiro termo reproduz a proporção da referência, o segundo trava a largura útil em 106rem para o texto não esticar em ecrã ultralargo.

Botões: `ButtonLink`, o CTA do cabeçalho e o botão do formulário passaram a 44 pixels de altura, texto de 13 pixels, `tracking` de 0.1em, seta de 16 pixels e `padding` horizontal de 1.15rem. A altura mantém-se no mínimo de 44 pixels recomendado para alvo de toque.

Hero: bloco de texto passa a `max-w-3xl` em xl e `max-w-4xl` em 2xl para acompanhar a margem. Adicionada a barra vertical decorativa da referência na margem esquerda, visível a partir de 1024 pixels.

Verificação: `npm run lint` aprovado, `next build` com 13 rotas geradas. Em 2560, 2000, 1440, 1280, 1024, 768 e 375 pixels, nas 6 rotas principais, o logótipo e o `h1` partilham a mesma margem esquerda e nenhuma página tem overflow horizontal.

## Carrossel de cases na home e na rota /cases

- [x] Portar a mecânica do carrossel de referência para `src/modules/cases`.
- [x] Vestir com os tokens da Safe e remover a identidade da origem.
- [x] Substituir o rail da home pelo carrossel.
- [x] Expandir a rota /cases: barra de setores, um carrossel por setor e índice completo.
- [x] Verificar em 375, 768, 1024 e 1440 com fixture temporário, e reverter o fixture.

### Revisão

Origem: pasta `cases-carousel` trazida para o projeto, incompleta (faltava `src/`,
`package.json` e `public/`). O original completo estava em
`D:/Projetos-vibeocding/tyvo/cases-carousel` e serviu de fonte. A pasta parcial foi removida
do projeto no fim, por ser referência e não código do site.

Não foi uma cópia. O módulo de origem é Vite, React 18 e CSS Modules; o destino é Next 15,
React 19 e Tailwind v4. Mudaram o runtime de imagem (`next/image` com `fill`), o roteamento
(`next/link`), o contrato de dados (`CaseStudy` em vez do `CaseItem` da origem) e a identidade
visual (vermelho `--safe-red` no lugar do lime da origem, Inter e Space Grotesk no lugar da
NeueHaas). Ficaram as durações de 500ms e as duas curvas de easing, que são a mecânica.

Eixo de margem: o original escalava tudo a partir de `font-size: 1.111vw` na raiz da secção,
com margens próprias em `em`. Isso não coincide com o `.safe-container` e teria repetido o bug
de margens cruzadas já registado nas lições. Saíram as classes de padding e container da origem
e o carrossel passou a viver dentro do `.safe-container`, herdando o eixo. Para os slides
continuarem a sangrar até à borda direita, o trilho leva `width: 100vw` e a secção que o envolve
leva `overflow-x: clip`. Zero alterações em `globals.css` e zero duplicação do cálculo da margem.

Rota /cases: barra de âncoras derivada dos setores presentes nos dados, um carrossel por setor
com a sua âncora, e um índice completo em texto. O índice existe porque o carrossel navega bem
por impulso e mal por intenção, e esconde metade dos links do crawler atrás de JavaScript. As
instâncias são independentes porque o hook liga navegação e barra por referência de elemento e
não por seletor de string. Descartado um filtro com estado de cliente: com poucos cases esconde
conteúdo sem ganho e obriga a página a virar client component.

Dados: `caseStudies` continua vazio. Home e /cases caem no `CasesEmptyState` e a barra de
setores e o índice não renderizam. Nada de conteúdo inventado e nada reaproveitado da origem.

Verificação com fixture temporário de 8 registos em 3 setores, revertido no fim:
- `overflow` horizontal igual a 0 nas 8 combinações de largura e rota, apesar do trilho em 100vw.
- Início do trilho igual ao início do `h1` em 375, 768, 1024 e 1440 (16, 16, 96 e 135 pixels).
- Três carrosséis na mesma página: o avanço de um não move os outros dois.
- Setas trancadas pelo Swiper quando os slides cabem no ecrã, com a linha de controlos escondida.
- Teclado: o foco no link revela o mesmo estado do hover e o rótulo acessível junta cliente e meta.
- `prefers-reduced-motion` colapsa as transições.
- `npm run lint` aprovado e `next build` com 14 rotas geradas.

Dependência nova: `swiper@11.2.10`. Precisou de `declare module "swiper/css"` em
`src/shared/types/assets.d.ts`, porque o pacote não publica tipos para as folhas de estilo e o
especificador não tem extensão, então o wildcard `*.css` existente não o apanhava.

Removidos por ficarem sem consumidor: `CaseCard.tsx` e `CaseGrid.tsx`.

Nota para quando chegarem as capas reais: mínimo de 1200x1500 e em WebP. O slide corta em 4:5 e
o `CaseDetail` corta a mesma imagem em 16/9, então uma capa apertada perde composição num dos dois.

Nenhum commit, push ou deploy foi realizado.

## Secção de fecho da Home com o módulo `closing-section`

- [x] Adotar `modules/closing-section` da raiz para `src/modules/closing-section`.
- [x] Limpar o que pertencia ao projeto de origem: rodapé próprio, envio por WhatsApp, paleta roxa.
- [x] Repintar na identidade Safe e remover o eixo de margem interno.
- [x] Extrair o wordmark SAFE GROUP do banner, sem símbolo e sem traço divisor.
- [x] Ligar o formulário ao pipeline de diagnóstico que já existe.
- [x] Substituir o `ClosingCta` apenas na Home.
- [x] Corrigir o padrão do `.gitignore` que escondia `src/modules` do Tailwind.
- [x] Verificar typecheck, guard de copy, build de produção e as quatro larguras.

### Revisão

Módulo adotado em `src/modules/closing-section` com quatro componentes, contrato de conteúdo,
copy pt-PT e um ficheiro de CSS com os dois keyframes. Não transitaram o handler de WhatsApp
(apontava para um número de outra empresa), o rodapé embutido, o `ShinyText` e o `cn`.

Zero dependências novas. O módulo pedia `react-hook-form`, `@hookform/resolvers`, `clsx` e
`tailwind-merge`. Os rótulos flutuantes são CSS puro (`peer` e `placeholder-shown`) e a
validação passou a ser um `safeParse` do zod, que já estava instalado, com as mensagens em
pt-PT no `data/content.ts`.

Formulário sem endpoint próprio: usa `POST /api/diagnostic`, o mesmo esquema e as mesmas opções
do painel do `/contacto`. O `fetch` saiu dos dois componentes para
`src/modules/diagnostic/api/submit-diagnostic.ts`.

Rodapé: o `SiteFooter` global manteve-se e a secção não traz rodapé próprio. O `ClosingCta`
continua a fechar `/metodo`, `/sobre` e `/solucoes`, só a Home trocou.

Wordmark: `public/brand/safe-wordmark.svg` extraído do traçado do banner. Dos 13 subcaminhos
ficaram os 9 das letras mais as 4 contra-formas, com `fill-rule="evenodd"` para as contra-formas
voltarem a ser buracos. Fora o retângulo de fundo, os dois subcaminhos do símbolo e o traço
divisor de 25 por 2730 unidades.

Bug encontrado pelo caminho, anterior a esta entrega: a linha `modules/` do `.gitignore`, sem
barra inicial, apanhava também `src/modules`. Como o Tailwind respeita o `.gitignore`, a camada
de domínio inteira ficava fora da varredura e qualquer utilitário usado só lá dentro nunca era
gerado. O `mt-16` do `PositioningSection` e o `mt-14` de cinco secções estavam em falta no CSS
publicado. Corrigido para `/modules/`, o CSS passou de 50 para 75 kilobytes.

Verificação:
- `npm run lint` aprovado, inclui TypeScript, regra do travessão e 10 skills.
- `npm run build` com 22 rotas geradas. Home em 22.2 kB e 158 kB de primeiro carregamento.
- `next start` com 200 em `/`, `/contacto`, `/solucoes`, `/metodo`, `/cases`, `/sobre` e no
  wordmark. O HTML de produção traz a secção, as 20 imagens do carrossel e o estado desligado.
- Larguras 375, 768, 1024 e 1280 conferidas em iframes de largura fixa, porque o ambiente não
  permite redimensionar a janela. O carrossel só aparece a partir de `lg`, tudo empilha abaixo
  disso e não há segundo eixo de margem contra o `.safe-container`. 1440 não foi capturado: o
  ecrã disponível não chega lá. Acima de 1024 a única variação é a margem proporcional, já
  validada a 1280.
- Sem webhook: botão desligado, aviso visível, igual ao `/contacto`.
- Com webhook de teste local: submissão vazia devolveu os 7 erros por campo em pt-PT, e a
  submissão completa chegou ao destino com os oito campos, o honeypot vazio, `source` e
  `submittedAt`, com o estado de sucesso a substituir o formulário. O painel do `/contacto`
  repetiu o mesmo resultado depois do refactor.
- `prefers-reduced-motion` desliga o carrossel, o metálico e a entrada do `Reveal`.

A avaliar antes de publicar: `enabled` é lido em build, porque a Home é estática. A variável
`SAFE_DIAGNOSTIC_WEBHOOK_URL` tem de existir no momento do build, não só como segredo de
runtime. O `/contacto` já tinha esta característica.

Nenhum commit, push ou deploy foi realizado.

## Cases de demonstração publicados

- [x] Preencher o catálogo com 8 cases fictícios em 3 setores.
- [x] Gerar capas WebP 1200x1500 abstratas na paleta da Safe.
- [x] Ligar salvaguardas à constante `casesAreDemo`.
- [x] Publicar e verificar no site.

### Revisão

O utilizador pediu para publicar com conteúdo fictício, depois de eu levantar a objeção de que
as regras do projeto proíbem inventar clientes. A decisão é dele e foi executada.

Salvaguardas, todas ligadas a `casesAreDemo` em `src/modules/cases/data/cases.ts`:
- aviso visível de conteúdo de demonstração na home e na rota /cases;
- `noindex, nofollow` em /cases e /cases/[slug];
- slugs de case fora do sitemap.

Escolhas de conteúdo, para o material não poder ser confundido com trabalho real: nomes
inventados que não correspondem a empresas existentes, resultados apenas qualitativos e sem
números inventados, e capas abstratas geradas por código, sem logótipos e sem texto.

Para reverter quando entrarem cases reais: substituir o array e pôr `casesAreDemo` a `false`.
As três salvaguardas e o aviso desaparecem juntos. Apagar também `public/cases/*.webp`.

Verificado no ar em https://safe.methodgrowthhub.com.br:
- /cases e /cases/[slug] respondem 200, com 8 slides e `noindex, nofollow` no cabeçalho;
- home responde 200 com 8 slides, aviso presente e `index, follow` intacto;
- sitemap.xml sem nenhum URL de case;
- sem overflow horizontal.

### Nota sobre trabalho em paralelo

Durante esta tarefa apareceram no working tree alterações de outra sessão: `src/app/globals.css`,
`src/app/page.tsx`, `src/modules/diagnostic/`, `src/modules/closing-section/` e
`public/brand/safe-wordmark.svg`. Não foram tocadas nem commitadas. O commit desta entrega ficou
limitado aos ficheiros dos cases.

Essa sessão corrigiu um erro meu no `.gitignore`: o padrão `modules/` não tinha barra inicial e
em git isso apanha `src/modules` a qualquer nível. A correção para `/modules/` foi incorporada.

### Ajuste: compactar a secção de fecho

O fluxo natural deixou a secção com 1471 pixels a 1280, quase dois ecrãs, quando a versão de
origem fechava tudo numa altura de ecrã. Comprimida para 979 pixels, menos 33 por cento, sem
lhe tirar conteúdo:

- Ritmo vertical próprio em vez do `safe-section`, que é generoso de mais para um bloco com
  formulário. `py-16 lg:py-20` contra os 128 pixels do clamp.
- Coluna do carrossel de 20 para 14 rem em `xl` e de 14 para 11 rem em `lg`. A largura que
  sobra faz o título caber em duas linhas em vez de três.
- Campo de contexto passou para dentro da coluna da operação, por baixo das três listas. Ficava
  numa linha própria a ocupar a largura toda enquanto a coluna direita acabava vazia. As duas
  colunas passaram a terminar à mesma altura e a secção poupou perto de 130 pixels.
- Espaçamento interno do formulário mais curto: `space-y-5` nos campos, `pt-5 pb-1.5` nos
  inputs, cabeçalhos de grupo com `mb-6`, textarea de 4 para 3 linhas.
- Descrição e benefícios reescritos mais curtos, para cada benefício caber numa linha.

Alturas por largura: 375 com 1508, 768 com 947, 1024 com 1122 e 1280 com 979 pixels. Sem
overflow horizontal em nenhuma, um só rodapé e o carrossel apenas a partir de `lg`.

### Ajuste: estrutura em duas colunas, com o rodapé na direita

Referência visual enviada pelo utilizador. A secção passou a duas colunas separadas por uma
vertical, e a da direita fechou de vez a página:

- Coluna esquerda: sobretítulo, título, descrição, benefícios em grelha de dois por dois, uma
  linha horizontal e o formulário em duas colunas.
- Coluna direita: wordmark grande em carrossel, a ocupar a largura toda da coluna e com o
  espaço entre cópias maior do que a altura de cada uma, por isso vê-se um de cada vez. Por
  baixo, Redes e Navegação, e a barra legal com copyright, crédito de produção e voltar ao topo.
- O título divide em duas sub-colunas apenas a partir de `2xl`. Abaixo disso a coluna esquerda
  não dá largura para isso e o título partia em cinco linhas.
- Redes preenchidas com Instagram e LinkedIn, sem ligação, à espera dos perfis reais. No
  conteúdo é `href: null`, que mostra o nome sem link. Assim que houver perfil, é preencher.

Como a secção passou a trazer rodapé, o `SiteFooter` global fica escondido na Home pelo
`SiteFooterSlot`, um client component de três linhas que recebe o rodapé como `children` para
ele continuar a ser server component. As restantes páginas mantêm o rodapé de sempre. O crédito
de produção continua presente nas duas.

O ano do copyright vem do servidor, por prop. Calculá-lo dentro de um client component daria
anos diferentes no servidor e no cliente na viragem do ano.

Alturas por largura, já com o rodapé incluído: 375 com 1930, 768 com 1361, 1024 com 1152 e 1280
com 1091 pixels. Antes deste ajuste a secção pesava 979 mais um rodapé de perto de 300, ou seja,
o fecho da página ficou mais curto e não mais longo.

## Dock de redes no canto do ecra e remocao da seccao "Uma visao, varias alavancas"

- [x] Retirar a seccao `AboutSection` da Home e apagar o componente.
- [x] Gerar um icone circular do selo em WebP para o botao flutuante.
- [x] Criar o modulo `social-dock` com dados, tipos, marcas e componente.
- [x] Montar o dock no `layout`, para ficar presente em todas as paginas.
- [x] Impedir que o dock tape a barra legal do rodape.
- [x] Verificar em 375, 768, 1024 e 1440, na Home e numa pagina interna.

### Revisao

A seccao "Uma visao, varias alavancas" saiu da Home. Era o unico sitio onde o
`AboutSection` era usado, por isso o ficheiro foi apagado em vez de ficar orfao.
A tese que ela contava continua em `/sobre`, na seccao "A tese", com o mesmo selo.

O selo passou a ser o botao fixo no canto inferior direito, presente em todas as
paginas. Fechado mostra so o selo, com um halo vermelho lento por baixo, no
registo dos botoes de conversa que ficam sempre visiveis. Aberto levanta tres
atalhos numa coluna: Instagram, LinkedIn e WhatsApp, este ultimo encostado ao
selo por ser o mais perto do polegar e o primeiro a entrar na animacao.

O icone do botao nao usa o `safe-seal.png` de 908 KB. Foi gerado o
`public/brand/safe-seal-icon.webp`, com o fundo aparado, mascara circular e 256
pixels de lado, que pesa 15 KB. O PNG grande fica para `/sobre`, onde e mostrado
em tamanho real.

Os tres destinos ficam por confirmar, por indicacao do cliente, por isso o `href`
esta a `null` no `data/networks.ts` e cada atalho sai como `<span>` em vez de
`<a>`. E o mesmo criterio que ja regia as redes do rodape: uma ligacao vazia
anuncia-se como ligacao e nao leva a lado nenhum. Assim que houver perfil, e
preencher o `href` nesse ficheiro, sem tocar em componentes.

O dock desaparece no fim da pagina. Uma sentinela de um pixel, ultimo elemento
do `body`, avisa por `IntersectionObserver` que o fim do documento se aproxima, e
o botao sai com uma transicao. Sem isto tapava o "Voltar ao topo" na Home e o
credito de producao nas restantes paginas, confirmado a 375 e a 768. O teste de
`elementFromPoint` sobre o credito passou nas quatro larguras depois da correcao.

Acessibilidade: o gatilho leva `aria-expanded` e `aria-controls`, a lista fica
`inert` enquanto esta fechada, a tecla Escape fecha e devolve o foco ao botao, um
clique fora fecha, e a navegacao entre paginas fecha tambem. O halo respeita
`prefers-reduced-motion`.

## Publicacao da copy de `copy.md` e correcao da regressao na Hero

- [x] Aplicar e validar a copy de `copy.md`, ja escrita no working tree por outra sessao.
- [x] Commitar e publicar (commit `f83c038`).
- [x] Corrigir a regressao reportada pelo utilizador: Hero sem altura de ecra inteiro e vao visivel por baixo em monitor.
- [x] Identificar a causa exata por diff contra o ultimo commit anterior a copy.
- [x] Reverter as alteracoes estruturais nao pedidas, mantendo so o texto novo.
- [x] Validar em 5 larguras com um harness de iframes e publicar a correcao (commit `2bbf1e8`).

### Revisao

O utilizador reportou que a Hero ficou "encurtada" em portatil e com um vao
grande mostrando a seccao seguinte em monitor, depois do commit da copy. Diff
contra `8df0e3e` (ultimo commit antes da copy) confirmou tres alteracoes
estruturais nao pedidas, escondidas dentro do mesmo diff que trazia o texto de
`copy.md`:

- `Hero.tsx`: `lg:h-dvh` (altura de ecra inteiro) tinha sido trocado por
  `lg:h-[min(860px,100svh)]`, um teto de 860px. Qualquer ecra mais alto do que
  isso mostrava a proxima seccao no vao. Um `<aside>` novo ("Metodo Safe") tinha
  sido adicionado a `left-[42%]`, sobrepondo-se ao botao "Ver como funciona" em
  qualquer largura de portatil entre 1280 e 1650px (contas em
  `tasks/lessons.md`).
- `globals.css`: a formula de `padding-inline` do eixo `.safe-container`/
  `.safe-edge` acima de 1024px tinha sido trocada, afetando a margem lateral em
  todo o site, nao so na Hero.
- `PositioningSection.tsx`: tinha deixado de usar `safe-section`, com
  `padding` proprio.

Nenhuma destas tres fazia parte de `copy.md`. Foram revertidas ao estado do
commit `8df0e3e`. O bloco "Metodo Safe" foi removido em vez de reposicionado,
porque o mesmo conteudo (Diagnostico, Prioridade, Execucao) ja existe na
seccao de Metodo da Home e na rota `/metodo`.

Validacao sem conseguir redimensionar a janela real do Chrome neste ambiente
(``resize_window`` falhou em qualquer tamanho, incluindo mais pequeno que o
atual) e sem Playwright disponivel (preso a outra sessao/projeto): harness
local com `<iframe>` de largura fixa em 375, 768, 1024, 1440 e 1920px, servido
por um `http.createServer` Node numa porta livre. A Hero preenche o primeiro
ecra sem vao e sem sobreposicao nas cinco larguras. `npm run lint` e
`npm run build` aprovados antes de cada commit.

Corrigida tambem a licao errada em `tasks/lessons.md` que recomendava limitar
a altura da Hero com `max-h`: essa recomendacao e a causa raiz desta
regressao, nao uma boa pratica.

## Site inteiro numa unica pagina (inspirado em tyvo-athostudio.webflow.io)

- [x] Mapear o conteudo exclusivo de `/metodo`, `/sobre`, `/solucoes` e `/contacto`
      contra o que a Home ja mostra.
- [x] Adicionar `id` + `scroll-mt-28` as quatro seccoes-ancora da Home
      (`PositioningSection` = `#sobre`, `SolutionsSection` = `#solucoes`,
      `MethodSection` = `#metodo`, `ClosingSection` = `#diagnostico`).
- [x] Repontar os CTAs de `SolutionsSection`/`MethodSection` de `/solucoes` e
      `/metodo` para `#diagnostico`, com o texto "Comecar diagnostico".
- [x] Repontar `SiteHeader` e `SiteFooter` (nav, CTA, menu movel) de rotas para
      ancoras `/#...`.
- [x] Trocar `/metodo`, `/sobre`, `/solucoes` e `/contacto` por
      `permanentRedirect` (308) para a ancora correspondente.
- [x] Apagar `ClosingCta.tsx`, `DiagnosticPanel.tsx` e `DiagnosticForm.tsx`
      (ficaram sem consumidor).
- [x] Atualizar `sitemap.ts` para so listar `/` e `/cases`.
- [x] `npm run lint`, `npm run build` e `curl -I` nos 4 redirects.

### Revisao

A Home ja tinha, antes desta entrega, as 9 seccoes que um site "tyvo" pediria
(Hero, Positioning, Markets, Diagnostic, Solutions, Method, CasesRail, Faq,
ClosingSection). O que faltava era parar de manter uma segunda copia desse
conteudo em rotas proprias. Investigacao confirmou que essa segunda copia era
quase toda redundante:

- `/sobre` repetia a tese de `PositioningSection`, e os seus 3 pilares
  (Leitura completa / Prioridade concreta / Execucao ligada) sao a mesma ideia
  dos 5 passos do `MethodTimeline`, ja presente na Home.
- `/solucoes` e `/metodo` renderizavam exatamente os mesmos componentes
  (`SolutionsGrid`/`MethodTimeline`) que a Home ja mostra, so com um paragrafo
  extra cada, que passou a viver dentro da propria seccao da Home.
- `/contacto` tinha um formulario de diagnostico proprio (`DiagnosticPanel` →
  `DiagnosticForm`), paralelo e duplicado ao formulario que ja vive dentro do
  `ClosingSection`, a seccao final protegida. Esse par de componentes ficou
  orfao e foi apagado; o resto do modulo `diagnostic` (schema, opcoes, api)
  continua em uso direto pelo `ClosingSection`.

Por instrucao explicita, Hero, `CasesRail` e `ClosingSection` nao foram
tocados no conteudo. O unico toque no `ClosingSection` foi um `id="diagnostico"`
+ `scroll-mt-28` no `<section>`, sem nenhuma mudanca visual, porque o
one-pager precisa de um alvo de ancora para os CTAs "Comecar diagnostico"
espalhados pelo site (nav, footer, Solutions, Method).

`/cases` e `/cases/[slug]` ficaram completamente intocados, incluindo como
rotas proprias, cobrindo tambem a estrutura de rotas e nao so o componente
`CasesRail`. `/tipografia` (ferramenta interna de QA) tambem ficou fora deste
trabalho.

As 4 rotas retiradas (`/metodo`, `/sobre`, `/solucoes`, `/contacto`) passaram
a `permanentRedirect` de uma linha cada, confirmados com `curl -I` a devolver
`308` e `Location: /#ancora`. O `sitemap.ts` deixou de as listar.

Verificacao visual em browser real nao foi possivel nesta sessao: o Chrome
controlado pela extensao esta na maquina real do utilizador, sem partilhar
rede com o sandbox onde o `npm run start` local correu, e ao navegar para
`localhost:4173` o Chrome mostrou uma aplicacao completamente diferente (um
login de "Financas" de outro projeto local do utilizador, ocupando essa porta
na maquina real). A verificacao ficou em `npm run lint`, `npm run build`
(producao, 22 rotas geradas sem erro) e `curl` contra o servidor de producao
local dentro do sandbox, confirmando os 4 redirects e os `id`/`href` corretos
no HTML de `/` e `/cases`.

## Barra de menu no padrão Tyvo (27/08/2026)

Referência: `https://tyvo-athostudio.webflow.io`. Código extraído por completo
(HTML da `nav.navbar`, CSS com medidas, JSON das interações IX2, capturas em
1440, 768 e 375) para o scratchpad da sessão antes de escrever uma linha.

- [x] Extrair a arquitetura real da Tyvo: DOM, CSS, coreografia IX2 com durações e delays, comportamento por breakpoint.
- [x] Mapear o cabeçalho atual, o eixo `.safe-edge`, os tokens e as lições que o limitam.
- [x] Converter `logo3d.svg` (recorte potrace) para um SVG positivo em `currentColor`.
- [ ] Criar o módulo `src/modules/site-nav/` (Feature-Sliced): dados, tipos, componentes, hook, estilos da coreografia.
- [ ] Barra: marca, ligações com máscara de texto, CTA com máscara e seta, alternador "Menu" com hambúrguer que vira X.
- [ ] Menu: painel claro que desce, três colunas (navegação, cases, soluções), linha e rodapé do painel, painel visual com a marca 3D e imagens dos cases ao passar o rato, wordmark gigante cortado em baixo.
- [ ] Estados: bloqueio de scroll, Escape, fecho ao navegar e ao clicar numa ligação, `aria-expanded`, `aria-controls`.
- [ ] Montar em `src/app/layout.tsx` no lugar de `SiteHeader`.
- [ ] Validar a 375, 768, 1024 e 1440 com Playwright, fechado e aberto, e comparar com a Tyvo.
- [ ] Revisão por subagentes (visual, interação/acessibilidade, código) e correções.
- [ ] Typecheck, lint, build limpo, commit só dos ficheiros do módulo, deploy e confirmação do CSS servido.

### Decisões

- A coreografia é feita com transições CSS conduzidas por `data-open` no `<header>`, com as mesmas durações, delays e curvas da Tyvo (`outCirc`, `swingTo`, `swingFrom`). Sem GSAP nem Framer Motion: o padrão da casa é CSS e o que a IX2 faz são tweens simples de `transform`, `opacity` e cor.
- Estrutura e comportamento vêm da Tyvo; identidade vem da Safe: botões quadrados de 44px com texto de 13px, caixa alta com tracking, vermelho Safe no lugar do verde-lima, painel em branco Safe com texto preto.
- O `.menu` vive dentro do `<header>` como na Tyvo, para a barra ficar por cima do painel aberto sem novo `z-index`. Por isso o `<header>` não pode ter `backdrop-filter` nem `transform`, senão o `fixed` do painel deixa de ser relativo à janela.
- O logótipo na barra continua a ser o lockup oficial (`safe-lockup.webp`); para escurecer sobre o painel claro gera-se uma variante escura com o vermelho preservado e faz-se cross-fade. A `logo3d.svg` entra em grande no painel visual da direita, no lugar do render 3D da Tyvo.
- As ligações usam as âncoras do one-page que outra sessão deixou no working tree (`/#solucoes`, `/#metodo`, `/cases`, `/#sobre`, `/#diagnostico`).
