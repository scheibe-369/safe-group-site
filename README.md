# Safe Group

Site institucional da Safe Group, empresa de crescimento, inteligência comercial e tecnologia aplicada a operações high ticket.

## Leitura obrigatória

No início de cada sessão, leia `AGENTS.md`, este documento, `tasks/todo.md`, `tasks/lessons.md` e a skill `safe-brand-context`.

## Posicionamento

A Safe analisa cada operação de forma 360, identifica o maior ponto de alavancagem de crescimento, lucro ou eficiência e estrutura a frente necessária para capturar essa oportunidade.

A Safe não é apenas uma agência de tráfego, marketing, automação, software, IA ou consultoria comercial. Essas disciplinas podem fazer parte da entrega, mas são combinadas conforme o problema real de cada operação.

A experiência da Safe atravessa os setores automóvel, financeiro e de software/SaaS. O mercado automóvel é uma vertical importante, mas não limita o posicionamento nem a oferta.

## Objetivo do site

- Explicar o posicionamento completo da Safe.
- Demonstrar capacidade de diagnóstico e execução integrada.
- Tornar clara a experiência multissetorial em operações high ticket.
- Apresentar soluções sem transformar a oferta num menu genérico de serviços.
- Construir prova com cases reais e verificáveis.
- Converter visitantes através de um diagnóstico comercial qualificado.

## Stack

Next.js 15, React 19, TypeScript, Tailwind CSS 4, Framer Motion, OpenNext e Cloudflare Workers.

## Arquitetura

O código segue arquitetura modular em `src/modules/<feature>`. A Home é composta pelos módulos `home`, `markets`, `solutions`, `method`, `cases` e `diagnostic`. Componentes globais não conhecem regras de negócio.

## Mapa do site

- `/`: Hero, posicionamento, diagnóstico 360, frentes, método, cases, sobre, FAQ e CTA.
- `/sobre`: visão, posicionamento e forma de atuação.
- `/solucoes`: frentes que a Safe pode estruturar.
- `/metodo`: processo de diagnóstico, priorização, implementação e otimização.
- `/cases`: catálogo visual inspirado na estrutura de navegação da Tyvo.
- `/cases/[slug]`: contexto, desafio, intervenção, estrutura e resultados de cada case.
- `/contacto`: formulário de diagnóstico.

## Direção visual

Preto profundo, grafite, branco metálico e vermelho Safe. Space Grotesk em títulos e Inter em interface e corpo. O vídeo de linhas vermelhas é o principal gesto de movimento. Evitar estética gamer, excesso de vidro e efeitos decorativos dispersos.

## Ativos

- `public/brand/safe-mark.png`: símbolo transparente.
- `public/brand/safe-banner.png`: assinatura completa e Open Graph provisório.
- `public/brand/safe-seal.png`: selo institucional.
- `public/brand/hero-reference.png`: referência visual.
- `public/media/safe-hero-lines.mp4`: vídeo Hero sem recompressão do fluxo visual.

O vídeo atual é 1280×720. Deve ser substituído por master 1440p ou 4K quando estiver disponível.

## Etapas

1. Fundação documental, skills, estrutura e ativos.
2. Home institucional funcional.
3. Páginas internas, catálogo e template de cases.
4. Integração do formulário por webhook.
5. Conteúdo real de cases, revisão, SEO e deploy.

## Desenvolvimento

```bash
npm install
npm run dev
npm run typecheck
npm run lint
npm run build
```

## Deploy Cloudflare

O workflow `.github/workflows/deploy.yml` publica automaticamente o Worker no push para `main`. O repositório deve ter o secret `CLOUDFLARE_API_TOKEN` configurado em `Settings > Secrets and variables > Actions`.

O fluxo executa instalação limpa, validações, build OpenNext e `wrangler deploy`. Depois do primeiro deploy aprovado, `git push` passa a ser o caminho padrão de publicação.

O webhook permanece vazio por padrão. Configure `SAFE_DIAGNOSTIC_WEBHOOK_URL` apenas quando o destino estiver aprovado.

Antes de ativar o envio em produção, configure proteção de frequência no Cloudflare e valide o destino do webhook. A rota já limita o tamanho do pedido, valida o esquema, verifica a origem, inclui honeypot e encerra chamadas lentas.

## Estado atual

A primeira versão institucional está implementada. A Home, as páginas internas, o catálogo e template de cases, o formulário bloqueado por configuração, os metadados e a base Cloudflare estão prontos.

Próximas decisões externas: fornecer cases reais, o master do vídeo em 1440p ou 4K, o destino aprovado do webhook e os dados finais de contacto.
