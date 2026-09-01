# CLAUDE.md, site Safe Group

Instruções para sessões de agente neste repositório. Ler também `AGENTS.md` (regras de
contribuição, arquitetura e copy) e `tasks/lessons.md` no início da sessão.

## Internacionalização: cinco idiomas, uma língua de origem

O site existe em cinco idiomas:

| Idioma | Código | Endereço | `lang` |
|---|---|---|---|
| Português de Portugal (origem) | `pt-PT` | sem prefixo, `/` | `pt-PT` |
| Português do Brasil | `pt-BR` | `/pt-br` | `pt-BR` |
| Inglês britânico | `en-GB` | `/en-gb` | `en-GB` |
| Inglês americano | `en-US` | `/en-us` | `en-US` |
| Espanhol | `es` | `/es` | `es` |

`pt-PT` é a **língua de origem**: toda a copy nova é escrita primeiro em português de
Portugal e traduzida a partir daí. É também o idioma por omissão, o único sem prefixo no
endereço, o que mantém intactos os URLs já indexados.

A infraestrutura é o `next-intl`, mas **só para encaminhamento e resolução de idioma**
(`src/shared/i18n/`, `src/middleware.ts`). A copy não vive em catálogos globais de
mensagens: vive dentro de cada módulo, como manda a regra `modular-arch` do projeto.

### O padrão de conteúdo

Cada módulo com copy tem, dentro do seu `data/`:

```
data/content.pt-PT.ts     <- baseline, a fonte de verdade. É aqui que se escreve.
data/content.pt-BR.ts     <- traduções, um ficheiro por idioma
data/content.en-GB.ts
data/content.en-US.ts
data/content.es.ts
data/content.ts           <- o getter, junta os cinco com `localeContent`
```

Um ficheiro por idioma, e não um objeto com cinco chaves, é deliberado: permite que os
quatro agentes tradutores trabalhem em paralelo sem nunca tocarem no mesmo ficheiro.

Quem consome:

- **Server component** (quase todos): `const c = getX(await getLocale())`, com o
  `getLocale` de `next-intl/server`.
- **Client component**: recebe o conteúdo por prop, resolvido no server pai. Importar o
  getter dentro de um client component arrasta os cinco idiomas para o bundle do browser.

Endereços internos resolvem-se com `getPathname` de `@/shared/i18n/navigation`, que devolve
já o prefixo e a palavra traduzida do idioma (`/solucoes` em pt-PT, `/solutions` em inglês,
`/soluciones` em espanhol). Ids de âncora (`#metodo`, `#diagnostico`) e slugs de case ou de
solução **não** são traduzidos: identificam, não descrevem.

Referências para copiar o padrão: `src/shared/layout/data/chrome.pt-PT.ts` (caso simples) e
`src/modules/site-nav/data/nav-content.ts` (caso com dados derivados e endereços).

### Regra obrigatória: copy nova exige tradução na mesma entrega

**Sempre que acrescentares ou alterares copy em qualquer módulo, a entrega só está
completa depois de os cinco idiomas estarem a par.** Não deixes para depois, não deixes
texto português a aparecer numa página inglesa, e não traduzas à mão: há agentes
especializados por idioma, e é o trabalho deles.

O processo, por ordem:

1. Escreve ou altera a copy em `data/<nome>.pt-PT.ts`.
2. Se o módulo é novo, ou se acrescentaste campos, gera os quatro ficheiros irmãos:
   ```
   node scripts/i18n-scaffold.mjs src/modules/<modulo>/data/<nome>.pt-PT.ts
   ```
   Isto cria as cópias com um marcador `// TODO(i18n)` no topo, e é esse marcador que
   assinala o que falta traduzir.
3. Aciona os quatro agentes tradutores **em paralelo, numa só mensagem** (uma chamada da
   ferramenta Agent por idioma), indicando a cada um a lista de ficheiros `*.pt-PT.ts` a
   traduzir:

   | Agente | Idioma |
   |---|---|
   | `translator-pt-br` | português do Brasil |
   | `translator-en-gb` | inglês britânico |
   | `translator-en-us` | inglês americano |
   | `translator-es` | espanhol |

   Estão definidos em `.claude/agents/`. Cada um só escreve o ficheiro do seu idioma, por
   isso podem correr todos ao mesmo tempo sem conflito.

   Se os agentes não aparecerem na lista de tipos disponíveis (acontece quando foram
   criados ou alterados na própria sessão, porque a lista é lida no arranque), lança-os
   como agentes genéricos a mandar cada um ler o seu ficheiro de definição primeiro:
   "Lê `.claude/agents/translator-es.md` na íntegra, é a tua definição de função, e
   segue-a à risca". O resultado é o mesmo.
4. Confirma que não sobrou nada por traduzir:
   ```
   grep -rn "TODO(i18n)" src/
   ```
   Tem de devolver zero linhas.
5. `npm run lint` (typecheck, regra de copy e skills) antes de commitar.

Se acrescentares um idioma novo à lista em `src/shared/i18n/locales.ts`, o TypeScript passa
a falhar em todos os módulos até o novo ficheiro existir em cada um. É de propósito: é a
rede que impede uma página meia traduzida de chegar a produção.

### O que nunca se traduz

Nomes de marca (Safe Group, Method Growth Hub, redes sociais), slugs, ids de âncora,
caminhos de imagem, campos `value` das opções de formulário (viajam para o webhook), e a
linha de crédito de produção "Desenvolvido por Method Growth Hub" com o link para
`https://methodgrowthhub.com.br`, que é assinatura e fica literal em português nos cinco
idiomas.

## Regras de copy que valem para os cinco idiomas

- **Nunca usar travessão nem hífen longo (— ou –)**, em copy ou em comentários. Validado
  por `npm run check:content`, que faz falhar a entrega.
- Sem promessas, métricas, clientes ou testemunhos sem fonte confirmada. Ver `AGENTS.md`.
- Registo de consultoria B2B: direto, sóbrio, sem hype.

## Sessões em paralelo

Outras sessões trabalham nesta mesma pasta ao mesmo tempo, sem branches. Antes de commitar,
`git status --short` e `git log --oneline -8`, e commitar só os ficheiros da própria
mudança, por caminho explícito. Nunca `git add -A`.
