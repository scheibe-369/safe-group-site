---
name: code-review-base
description: Faz revisão técnica de código (TypeScript, JavaScript, Python, SQL, fluxos n8n) com foco em qualidade, manutenibilidade e production readiness. Output severity-based (Critical/High/Medium/Nit) com sugestões acionáveis. Use SEMPRE que o usuário pedir para revisar, auditar, fazer code review, "olhar esse código", validar uma implementação, checar um handler/endpoint/componente, ou perguntar "isso tá certo?" / "tem algum problema?" / "o que tá errado nisso?" sobre código colado ou referenciado. Ativa também para "review desse PR", "valida essa entrega", "qa nesse código", "revisa o que o dev fez". É a skill DEFAULT de revisão - outras skills (code-review-sensitive, code-review-agents) complementam, não substituem. NÃO usar em código throw-away, scripts didáticos, ou material de curso.
---

# code-review-base - Revisão técnica genérica

## Princípio operacional

Esta skill é a revisão **default**. Roda sempre. Outras skills de review (`code-review-sensitive`, `code-review-agents`) **adicionam camadas** em cima desta, não substituem.

Filosofia anti-overengineering: **toda sugestão precisa caber no prazo do projeto.** Sugestão que exige refactor de 4h num sprint de 2 dias vai marcada como `[BACKLOG]`, não como `[FIX NOW]`.

## Quando ativar (gatilhos)

Ativa quando o usuário:
- Pede revisão / review / auditoria / QA de código
- Cola código e pergunta "tá certo?", "tem bug?", "o que melhoraria?"
- Pede pra "olhar", "validar", "checar" uma implementação
- Pede review de PR, de entrega, de feature
- Pede sanity check em código gerado por IA antes de commitar

Ativa em qualquer linguagem/contexto: TS, JS, Python, SQL, fluxo n8n, system prompt (mas pra prompt, ativar `code-review-agents` em conjunto).

## Quando NÃO ativar

- Código throw-away / spike / prototype não-merge
- Scripts didáticos, exemplos de curso, material educacional
- Code golf, snippets de Stack Overflow pra entender algo
- Quando o usuário pediu apenas "explica esse código" ou "o que isso faz"
- Em commit de typo, mudança trivial de copy
- Em código de terceiros que será apenas integrado

## Pré-requisitos antes de revisar

Antes de gerar o relatório, verificar se o usuário forneceu (perguntar **só** se faltar e for crítico):

1. **Stack/contexto** - Next.js? n8n? script standalone? Drizzle? Postgres direto?
2. **Blast radius** - afeta 1 cliente, 100, prod inteira?
3. **Foco da revisão** (opcional) - tem área específica de preocupação?

Se o código já vem com contexto óbvio (ex: arquivo `route.ts` com `export async function POST` é Next.js API route), não pergunta nada. Vai direto.

## As 6 dimensões de revisão

Roda mentalmente as 6 passadas. Reporta apenas o que tem achado real. Não inventa problema.

### 1. Arquitetura local
- Separação de concerns: a função/módulo faz **uma** coisa?
- Layer 3-tier respeitada? (web/handler → domain/service → data/repo)
- Dependências apontam pra direção certa? (web depende de domain, domain não depende de web)
- Boundaries de módulo claros, sem vazamento de detalhe interno

### 2. Error handling
- Toda Promise tem `try/catch` ou `.catch`?
- Erros são **tipados** (classes próprias, não string genérica)?
- Falha-rápido em validação de input (Zod/Joi/schema no topo do handler)?
- Erros assíncronos não são engolidos silenciosamente?
- Operações que podem falhar (rede, DB, fs) têm fallback ou propagação clara?

### 3. Naming & legibilidade
- Funções e variáveis são autoexplicativas? (regra: leu o nome, sabe o que faz)
- Booleanos começam com `is`/`has`/`should`/`can`?
- Nada de abreviação críptica (`usr`, `cfg`, `tmp` em domínio)
- Função tem mais de ~30 linhas ou 3 níveis de aninhamento? Sinal de fragmentar
- Comentário explica **por quê**, não **o quê**

### 4. Duplicação & abstração
- Código duplicado **3+ vezes**? Considerar extrair (regra dos 3, não dos 2)
- Abstração já existe e foi ignorada? Reusar
- **Cuidado com abstração prematura.** Se duplicou 2x e os usos têm semântica diferente, mantém duplicado

### 5. Testabilidade & "quebra silenciosa"
Pergunta crítica: **se essa função quebrar, alguém vai saber?**
- Tem log estruturado em pontos críticos?
- Erro vai pra observability (Sentry, logger), não só `console.log`?
- Função pura é fácil de testar? Se sim, vale 1 teste rápido. Se não, vale considerar refatorar pra ser testável
- **Não exige cobertura.** Sugere teste apenas em ponto onde quebra silenciosa é provável

### 6. Production readiness
- Env vars carregadas com fallback ou validação no boot?
- Sem `console.log` esquecido com dados sensíveis?
- Sem `TODO`/`FIXME` deixado em código que vai pra prod sem issue associada?
- Operações longas têm timeout?
- Código tem comentário "temporário"? Provavelmente vai ficar pra sempre - vira issue ou remove

## Estrutura do output

```
🔍 Code Review - [arquivo/função/módulo]
Stack: [stack identificada]
Escopo: [linha X-Y / função X / módulo X]

━━━ CRITICAL ━━━
Quebra prod ou vaza dado. Resolver antes de merge.

[#1] [título curto]
   Problema: [descrição em 1-2 linhas]
   Localização: [linha/função]
   Sugestão: [ação concreta]
   Por quê: [razão técnica em 1 linha]

━━━ HIGH ━━━
Bug certo ou risco real. Resolver no sprint.

[mesmo formato]

━━━ MEDIUM ━━━
Bug provável ou tech debt acionável.

━━━ NIT ━━━
Preferência ou polish. Pode ignorar se prazo apertar.

━━━ RESUMO ━━━
[X Critical, Y High, Z Medium, W Nit]
[Recomendação geral em 1 linha: "merge ok após Critical+High" ou "reescrever módulo X" ou "ok pra merge"]
```

## Regras de severity (anti-inflation)

- **Critical** = quebra produção, vaza dado, perde dado, ou expõe vulnerabilidade. Se não cabe nesses 4 verbos, não é Critical.
- **High** = bug certo em fluxo que vai rodar. Não é hipotético.
- **Medium** = bug provável OU tech debt que vai cobrar juros em 1-2 sprints.
- **Nit** = preferência, estilo, naming melhor, polish.

**Se mais de 5 itens forem High/Critical:** parar de listar item-a-item e recomendar **reescrever o módulo**. Listar 12 problemas estruturais é pior que dizer "essa abordagem não vai funcionar, vamos repensar".

## Anti-padrões da própria skill

NÃO fazer:
- ❌ Sugerir refactor que excede o prazo do projeto
- ❌ Inventar problema pra parecer útil ("considere extrair pra hook" sem motivo real)
- ❌ Pedir cobertura de testes em código que não vai pra prod crítica
- ❌ Sugerir abstração baseada em "e se no futuro..."
- ❌ Apontar 30 nits e 0 críticos (ruído > sinal)
- ❌ Recomendar mudança de stack/lib em PR de feature
- ❌ Replicar comentários do ESLint/TS - eles já fazem isso, é redundância

SEMPRE fazer:
- ✅ Citar linha/função específica
- ✅ Justificar **por quê** em 1 linha (não só "isso tá errado")
- ✅ Dar a correção concreta, não abstrata
- ✅ Reconhecer quando o código está bom - relatório vazio é resultado válido
- ✅ Se a stack/contexto força um trade-off, mencionar (ex: "n8n não tem error workflow nesse fluxo, mas pode ser intencional pra MVP")

## Boas práticas de uso (referência rápida)

**Pré-uso:**
1. Definir escopo (módulo X, função Y) ao invés de "revisa tudo"
2. Rodar lint + tests antes - skill é 3ª camada
3. Decidir nível de severity que vai agir (só Critical+High? Ou inclui Medium?)

**Durante:**
1. Skill sugere, dev decide. Discordar é válido se contexto justifica
2. Não rodar 3 skills de review juntas no mesmo turno - confunde output

**Pós-uso:**
1. Itens não-aplicados viram tech debt no Kanban com label `from-review`
2. Padrão repetido em 3+ PRs do mesmo dev = vira regra escrita pro time
3. Falso positivo recorrente = atualizar a própria SKILL.md
