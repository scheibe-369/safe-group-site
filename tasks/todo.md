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
