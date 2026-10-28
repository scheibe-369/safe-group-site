# Especificação SEO e lançamento

Fonte de requisitos de SEO e GEO do site Safe Group, mantida com a skill `site-seo-release`
(`D:\Projetos-vibeocding\skill-seo\skills\site-seo-release\SKILL.md`). O fecho de cada entrega
fica em `tasks/site-release.md` e `tasks/site-release.json`.

<!-- site-seo-release:spec:start -->

## Contexto confirmado

- Projeto, negócio e oferta: site institucional da Safe Group (marca curta "Safe"), consultoria de
  operação para empresas high ticket. Seis frentes de execução (Website, Tráfego Pago, Funcionários IA,
  Software e SaaS, Estratégia, Estruturação Empresarial) e sete cases reais publicados.
- Público, região e idioma: decisores de operações high ticket em vários setores (automóvel,
  financeiro e software/SaaS são verticais de experiência, não lista fechada). Mercados: Brasil e
  Portugal (decisão D2, 28/10/2026). Cinco idiomas: pt-PT (origem, raiz sem prefixo), pt-BR
  (`/pt-br`), en-GB (`/en-gb`), en-US (`/en-us`), es (`/es`).
- Objetivo e conversão principal: pedido de diagnóstico pelo formulário da Home (`#diagnostico`),
  entregue por WhatsApp via Evolution API.
- Diferenciais e provas disponíveis: cases reais com contexto, desafio, intervenção e resultados;
  faixa de certificações aprovada na Home. Nada de métricas, depoimentos ou clientes inventados.
- Domínio final, ambiente e stack: produção em `https://safegroupia.com` (apex; `www` redireciona
  308). Preview em `https://safe.methodgrowthhub.com.br`, sempre `noindex`. Next.js 15 (App Router,
  next-intl) em Cloudflare Workers via OpenNext. Deploy pela Action "Deploy Cloudflare" a cada push
  para `main`. Só o build de produção define `NEXT_PUBLIC_SITE_URL`, e é isso que liga a indexação.
- Responsável pela entrega: sessões de agente (Claude Code ou Codex) com o utilizador como revisor.
- Dados faltantes, hipóteses e impacto:
  - Dados públicos de marca (cidade, fundadores, LinkedIn, ano): adiados pelo utilizador (D3). O
    schema `Organization` fica só com nome, logo, Instagram e mercados.
  - Termos de busca: hipóteses abaixo, sem dados de volume. Validar com o Search Console 4 a 8
    semanas depois da verificação do domínio.
  - Search Console e Bing Webmaster Tools: verificação em curso (28/10/2026).

## Matriz de páginas

Os títulos seguem o molde `%s | Safe Group` do layout raiz. Termos marcados como HIPÓTESE ainda
não foram validados com dados de busca.

| Rota | Indexar? Motivo | Intenção | Termo principal e origem | Termos de apoio | Title | Description | H1 | Canonical | CTA | Pergunta principal | Imagem social | Idioma |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `/`, `/pt-br`, `/en-gb`, `/en-us`, `/es` | Sim, página da marca | Navegacional (marca) e comercial | "Safe Group" (marca); HIPÓTESE "consultoria de operação" (copy da Hero) | "Safe", "safegroupia", "diagnóstico de operação" (HIPÓTESE) | `chrome.<idioma>.ts` metadata.titleDefault | metadata.description | "Encontre o gargalo que trava o seu crescimento." | própria por idioma, `x-default` na raiz | Fazer o diagnóstico | O que a Safe faz e por onde começa? | `/brand/safe-banner.png` | 5 |
| `/cases` e prefixados | Sim | Prova, investigação | HIPÓTESE "cases de consultoria de operação" | nomes de setor | "Cases \| Safe Group" | directory.metaDescription | hero do diretório | própria por idioma | abrir case | Que operações a Safe já estruturou? | banner | 5 |
| `/cases/[slug]` (7 cases, 35 URLs) | Sim, cases reais; demo nunca | Prova específica | nome do cliente + setor (conteúdo existente) | entregáveis do case | "{cliente} \| Safe Group" | summary do case | nome do cliente | própria por idioma | diagnóstico | O que foi feito e com que resultado? | banner | 5 |
| `/solucoes/[slug]` (6 frentes, 30 URLs; `/solutions`, `/soluciones`) | Sim | Comercial por serviço | HIPÓTESE por frente: "criação de site para empresas", "gestão de tráfego pago", "agentes de IA para atendimento", "desenvolvimento de software SaaS", "consultoria estratégica", "estruturação empresarial" | ofertas da página | "{frente} \| Safe Group" | metaDescription da frente | nome da frente | própria por idioma | Começar diagnóstico | O que entra nesta frente? | banner | 5 |
| `/solucoes`, `/metodo`, `/sobre`, `/contacto` (e traduções) | Não, 308 para âncoras da Home | n/a | n/a | n/a | n/a | n/a | n/a | n/a | n/a | n/a | n/a | 5 |
| `/marca-3d`, `/tipografia` | Não, páginas internas de decisão (`noindex`) | n/a | n/a | n/a | interno | interno | interno | n/a | n/a | n/a | n/a | pt-PT |
| `/api/diagnostic` | Não, API do formulário | n/a | n/a | n/a | n/a | n/a | n/a | n/a | n/a | n/a | n/a | n/a |
| 404 | Não, status 404 real para rastreadores | n/a | n/a | n/a | página 404 | n/a | "Esta página não existe." | n/a | Voltar ao início | n/a | n/a | 5 |

## Requisitos de construção

- Descoberta: `src/app/robots.ts`, `src/app/sitemap.ts` e `src/app/llms.txt/route.ts`, todos a ler
  a URL e a decisão de indexação de `src/modules/seo/data/site.ts`. Robots aberto a todos os agentes,
  incluindo os de IA (D1). Sitemap só com páginas canónicas indexáveis, sem `lastmod` falso,
  `priority` ou `changefreq`, com `hreflang` e `x-default`. Preview: sitemap vazio, robots sem
  sitemap, `noindex` na meta e no `X-Robots-Tag`.
- Conteúdo: JSON-LD `Organization` e `WebSite` na Home; `Service` e `BreadcrumbList` nas frentes;
  `BreadcrumbList` nos cases reais. Só dados visíveis no site. Sem `meta keywords`.
- Mídia: logo de schema em `public/brand/safe-logo-square.png` (512x512, fundo `#050505`, gerado
  com sharp a partir de `src/app/icon.png`); favicon PNG 512 em `src/app/icon.png`; imagem social
  `public/brand/safe-banner.png` 1672x941 em todas as páginas via `openGraphFor`.
- Formulários: diagnóstico na Home, validado com zod, antispam por campo isca, envio por WhatsApp.
  Teste de entrega real fica para a revisão final.
- Conversão: sem pixel nem analytics de terceiros instalados nesta data.
- Acessibilidade: salto para o conteúdo, `lang` por idioma, alvos de 44px. Revalidar na revisão final.
- Privacidade: sem página de privacidade publicada. Pendência para a revisão final.
- E-mail: SPF em `safegroupia.com` inclui Cloudflare Email Routing e Brevo; DKIM e DMARC por confirmar.
- Operação: build e deploy pela Action; 404 real para rastreadores; HTTPS; `www` 308 para o apex.

## Plano de aceite

| ID da verificação | Obrigatório? | Critério de aceite contextual | Método e ambiente | Dependência | Responsável |
| --- | --- | --- | --- | --- | --- |
| robots | Sim | `/robots.txt` 200, `Allow: /` para todos, sitemap absoluto em produção | curl em produção | deploy | agente |
| sitemap | Sim | XML válido, 75 URLs canónicas com 200, sem `lastmod` | curl e parser em produção | deploy | agente |
| llms | Sim | `/llms.txt` 200, Markdown legível, links válidos | curl em produção | deploy | agente |
| indexing | Sim | produção `index, follow`; preview `noindex` na meta e no cabeçalho | curl nos dois hosts | deploy | agente |
| structured-data | Sim | JSON-LD parseável na Home, frentes e cases | curl e `JSON.parse` em produção; Rich Results Test | deploy | agente |
| metadata | Sim | title e description próprios por rota e idioma, canonical e `hreflang` com `x-default` | curl em produção | deploy | agente |
| search-console | Sim | domínio verificado, sitemap enviado | painel do Search Console | acesso Google | utilizador e agente |

## Histórico de decisões

| Data | Decisão | Evidência ou hipótese | Impacto e próximo teste |
| --- | --- | --- | --- |
| 15/10/2026 | Razão social e CNPJ saem do rodapé | commit `a05aec8` | HTML de produção sem CNPJ; snippet antigo no Google até novo rastreio |
| 28/10/2026 | Remoção do snippet antigo no Google e verificação do domínio no Search Console | Google mostrava nome e CNPJ numa leitura de 04/10 a 15/10 | pedidos de remoção de conteúdo desatualizado e reindexação |
| 28/10/2026 | D1: rastreadores de IA liberados, incluindo treino | objetivo de ser recomendado por assistentes de IA | robots aberto; zona Cloudflare sem bloqueio de bots de IA |
| 28/10/2026 | D2: mercados Brasil e Portugal | WhatsApp +55, CNPJ brasileiro, copy de origem pt-PT | `areaServed` com os dois países; termos a validar nos dois |
| 28/10/2026 | D3: dados públicos de marca adiados | decisão do utilizador | `Organization` sem cidade, fundadores, LinkedIn ou ano |
| 28/10/2026 | Preview sempre `noindex` | preview indexável com canonical para domínio inexistente | revalidar meta e cabeçalho no preview a cada mudança de deploy |

## Pendências para implementação

- Fase 2: validar os termos HIPÓTESE com o utilizador e com dados do Search Console; reescrever
  titles, descriptions e primeiro parágrafo nos cinco idiomas; parágrafo de entidade "o que é a
  Safe Group" na Home; avaliar uma página `/sobre` real.
- Fase 3: LinkedIn da empresa, bio do Instagram a apontar para o site, Perfil de Empresa no Google.
- D3: quando houver dados públicos aprovados, acrescentar ao `Organization` (`address` só da
  região, `founder`, `foundingDate`, `sameAs` com LinkedIn).
- Revisão final: privacidade, DKIM e DMARC, teste de entrega do formulário, Core Web Vitals.

<!-- site-seo-release:spec:end -->
