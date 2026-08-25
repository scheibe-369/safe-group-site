---
name: code-review-sensitive
description: Revisão de segurança especializada para código que toca dados sensíveis, autenticação, pagamentos, APIs externas ou multi-tenant. Cobre OWASP Top 10, OWASP API Security, validação de input, secrets management, SQL injection, prompt injection, idempotência de webhook e PII handling. Use SEMPRE que o código a revisar envolver: autenticação/autorização (login, session, JWT, better-auth), pagamento ou financeiro (boletos, Pix, cartão), webhook recebendo dado externo (Bradesco, Evolution API, Cal.com, Stripe, Mercado Pago), formulário coletando lead/cliente, integração com API de terceiro, dados de cliente/usuário (CRM, leads, conversas WhatsApp), schema de banco com PII (CPF, telefone, email), código multi-tenant (isolamento por empresa/cliente), ou rotas protegidas. Ativa também quando o usuário pede "audita segurança", "revisa essa rota de auth", "esse endpoint tá seguro?", "tem risco aqui?". COMPLEMENTA code-review-base, não substitui - rodar as duas em conjunto. NÃO usar em código sem rede, sem dados externos, ou puramente UI sem lógica.
---

# code-review-sensitive - Revisão de segurança & dados sensíveis

## Princípio operacional

Esta skill **complementa** `code-review-base`, não substitui. Quando ambas se aplicam, rodar as duas e apresentar output combinado (uma seção de cada).

Foco específico: **proteção de dado** (do cliente, do usuário final, do negócio) e **resistência a ataque** real (não teórico).

Filosofia: **paranoia calibrada.** Não toda preocupação de segurança vale o esforço - algumas são teatro. Esta skill foca no que **um atacante real exploraria** e no que **um auditor sério apontaria**.

## Quando ativar (gatilhos)

Ativa em código que toca:
- **Auth**: login, signup, recovery, session, JWT, OAuth, better-auth, Clerk, NextAuth
- **Pagamento/financeiro**: Pix, boleto (Bradesco, Itaú), cartão, Stripe, Mercado Pago, gateway
- **Webhook recebendo externo**: Evolution API, Bradesco, Cal.com, Stripe, qualquer endpoint público que recebe POST de terceiro
- **Formulário de lead/cliente**: qualquer form coletando dados pessoais
- **API de terceiro**: integrações que enviam ou recebem dado
- **Dados de cliente**: CRM, conversas WhatsApp/Instagram, leads, contratos
- **Schema com PII**: CPF, RG, telefone, email, endereço, dado bancário
- **Multi-tenant**: código com isolamento por `empresa_id`, `tenant_id`, `org_id`
- **Rotas protegidas**: middleware de auth, RBAC, scoping

Gatilhos textuais: "audita segurança", "esse endpoint tá seguro", "revisa rota de auth", "tem risco aqui", "isso tá protegido?", "proteção desse webhook", "valida esse handler de pagamento".

## Quando NÃO ativar

- Código puramente UI sem lógica de negócio (botão, layout, animação)
- Landing estática sem formulário
- Script local sem rede
- Código de teste/mock
- Migration de schema sem PII
- Componente de design system

## Pré-requisitos

Antes de revisar, identificar (perguntar **só** se faltar e for ambíguo):

1. **Que dado o código toca?** (PII? Credencial? Dado financeiro?)
2. **De onde vem o input?** (Usuário autenticado? Webhook público? Form anônimo?)
3. **Multi-tenant?** Se sim, qual o discriminator? (`empresa`, `tenant_id`, etc)
4. **Está em prod ou indo pra prod?** Se for spike, baixa rigor.

## As 8 dimensões de segurança

### 1. Authentication & Authorization
- **Toda rota sensível tem middleware de auth?** Não confiar em "está num path /admin/*"
- Token validado em **toda** request, não só na primeira?
- Escopo/role checado **antes** da operação, não depois?
- Multi-tenant: isolamento por tenant **no nível da query**, não só na UI?
- Logout invalida session real (não só client-side)?
- Recovery/reset não vaza se email existe ou não?
- Rate limit em login/signup/recovery contra brute force?

### 2. Input validation
- **Toda entrada externa** passa por schema (Zod, Joi, valibot)?
- Validação no **handler**, não só no client?
- Tipos primitivos (`string`, `number`) NÃO são validação suficiente
- Tamanho máximo definido em string/array (DoS por payload gigante)
- Whitelist > blacklist (lista do que é permitido, não do que é proibido)
- Coerção implícita (`Number(req.body.x)`) checada pra `NaN`?

### 3. Secrets & credentials
- **Zero hardcoded** (chave, token, senha, connection string)
- `.env` no `.gitignore` confirmado, sem commit prévio no histórico
- Env var validada no boot (Zod schema das envs), não na primeira request
- Secret rotation: dá pra trocar credencial sem redeploy?
- Logs **NÃO** imprimem env vars, payload com senha, ou token

### 4. SQL/NoSQL injection
- **Query parametrizada sempre.** Drizzle, Prisma, query builder OK. String concat NÃO
- ORM usado corretamente: `eq(table.id, userId)`, não `sql\`WHERE id = ${userId}\``
- Raw SQL (quando inevitável): `?` ou `$1` placeholders
- Nome de coluna/tabela vindo de input do usuário? **Whitelist obrigatório**
- Drizzle `sql` template tag é seguro pra valores, mas verificar uso de `sql.raw()`

### 5. PII & dados sensíveis
- **Logs não vazam PII.** CPF, telefone, email, conversa de cliente - mascarados ou omitidos
- Dado bancário/cartão - nunca em log, nunca em error message
- Stack trace em produção não vai pra cliente
- Hash de senha: bcrypt/argon2 com cost adequado, **nunca** MD5/SHA1
- Dado em repouso: criptografado se for sensível-sensível (cartão, CPF em alguns contextos)
- LGPD: tem mecanismo de exclusão de dado a pedido?

### 6. Webhook & integração externa
- **Assinatura validada.** HMAC do header com secret compartilhado
- **Idempotência:** mesma requisição duas vezes não dispara efeito duas vezes (chave de idempotência, deduplicação por id externo)
- Replay protection: timestamp + janela de validade
- Origem validada: IP allowlist quando possível, ou domínio
- Falha em validação retorna 401/403 sem detalhe (não revelar por que falhou)
- Resposta rápida (< 5s) - processamento pesado vai pra fila (BullMQ no caso GH)

### 7. Rate limiting & abuse
- Endpoint público tem rate limit por IP **e** por user
- Operações caras (envio de email, geração de boleto, chamada LLM) têm limite por user/tenant
- Captcha/desafio em formulários expostos (recovery, signup)
- Detecção de abuso: log estruturado de falhas pra análise

### 8. Dependency security
- `npm audit` rodado, sem vulnerabilidade Critical/High não-mitigada
- Lockfile commitado (`package-lock.json`, `bun.lockb`)
- Dependências do projeto têm CVE conhecida? Mencionar quando relevante
- Lib de auth, crypto, validação: usa lib estabelecida ou implementação própria? (Própria = red flag)
- **Next.js**: versão >= patch da CVE-2025-29927 (middleware bypass)?

## Estrutura do output

```
🔒 Security Review - [escopo]
Stack: [stack]
Superfície: [auth / webhook / form público / multi-tenant / etc]
Dado tocado: [PII / financeiro / credencial / nenhum]

━━━ CRITICAL ━━━
Vulnerabilidade explorável agora.

[#1] [vulnerabilidade]
   Vetor: [como um atacante explora]
   Localização: [linha/função]
   Mitigação: [ação concreta]
   Referência: [OWASP/CVE quando aplicável]

━━━ HIGH ━━━
Risco real. Resolver antes de prod.

━━━ MEDIUM ━━━
Hardening recomendado. Resolver no próximo sprint.

━━━ NIT ━━━
Defesa em profundidade. Polish.

━━━ RESUMO ━━━
[X vulnerabilidades / Y hardening recomendado]
[Recomendação geral: "bloqueia deploy" / "deploy ok com mitigação" / "ok"]
```

## Regras de severity (calibrar paranoia)

- **Critical** = explorável **agora** com efeito real (RCE, vazamento de PII, bypass de auth, SQL injection real, secret exposto)
- **High** = vetor de ataque com pré-condição plausível (ex: "se atacante conseguir token de outro tenant, acessa dados - falta isolamento na query")
- **Medium** = hardening importante, sem ataque óbvio (ex: rate limit ausente, log com dado mascarado parcialmente)
- **Nit** = defesa em profundidade, boas práticas de OWASP que aumentam custo do ataque

**NÃO inflar severity.** "Deveria ter CSP header" não é Critical. "Senha em log" é.

## Anti-padrões da própria skill

NÃO fazer:
- ❌ Recomendar lib de segurança caríssima/complexa pra projeto pequeno (ex: WAF enterprise pra landing)
- ❌ Sugerir criptografia em repouso pra todo dado (só pra sensível-sensível)
- ❌ Listar item de OWASP que não se aplica ao contexto (ex: XXE em projeto sem XML)
- ❌ Confundir hardening com vulnerabilidade
- ❌ Pedir compliance complexo (SOC2, ISO) em projeto que não vende pra enterprise
- ❌ Apontar problema sem dar mitigação concreta

SEMPRE fazer:
- ✅ Citar OWASP quando o problema mapeia direto (ex: "OWASP API1: Broken Object Level Authorization")
- ✅ Dar vetor de ataque concreto ("um user logado pode mandar `tenantId` de outra empresa no body e ler dados alheios")
- ✅ Diferenciar "explorável agora" vs "boa prática"
- ✅ Considerar contexto: SaaS B2B com 10 clientes ≠ produto B2C com 1M users
- ✅ Mencionar quando algo já está mitigado por outra camada (CDN, framework, plataforma)

## Casos de uso típicos no GH

- **Sistema Motel**: handler de Evolution webhook, isolamento de moteleiro, prompts do agente que recebem mensagem de cliente
- **Preventiva**: webhook do Bradesco, Gmail Pub/Sub, query no SQL Server da RGB com filtro por `empresa`
- **FIDC SaaS**: multi-tenancy via `empresa`, dedução atômica de crédito, idempotência
- **AMS**: better-auth, RBAC de Pipeline/Contracts/Financial, integração Uazapi
- **Landings com form**: ION/Automators Club, qualquer captura de lead

## Boas práticas de uso

**Pré-uso:**
1. Identificar o que é "dado sensível" no contexto desse projeto específico
2. Saber se o projeto tem requisito de compliance (LGPD basicamente sempre, mas profundidade varia)
3. Distinguir MVP de produto em prod estabelecido - paranoia escalonada

**Durante:**
1. Combinar com `code-review-base` quando código tem ambas as facetas
2. Se achar Critical, **parar e alertar** antes de continuar listando os outros - Critical bloqueia deploy

**Pós-uso:**
1. Critical/High aplicados ANTES do merge, sem exceção
2. Medium agendado pra próximo sprint com label `security-debt`
3. Auditoria periódica (trimestral) em projeto em prod, mesmo sem mudança recente
4. Após CVE relevante na stack, rodar a skill no projeto afetado mesmo que ninguém pediu
