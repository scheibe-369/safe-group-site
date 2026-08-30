# `closing-section`

Fecho da Home em duas colunas. A esquerda leva o discurso e o formulario de
diagnostico. A direita leva o wordmark Safe Group em carrossel vertical, as
redes, a navegacao e a barra legal, ou seja, faz o trabalho do rodape na Home.

Adaptado de um bloco trazido de outro projeto. Ao entrar aqui perdeu a paleta
roxa, o rodape proprio, o envio por WhatsApp e as quatro dependencias de
formulario. Ficou so o que o site da Safe usa.

## Usar

```tsx
import { ClosingSection } from "@/modules/closing-section";
import { whatsappNotificationEnabled } from "@/modules/diagnostic/api/send-whatsapp-notification";

const diagnosticEnabled = whatsappNotificationEnabled();
<ClosingSection enabled={diagnosticEnabled} year={new Date().getFullYear()} />
```

O `year` vem do servidor de proposito. Calcular o ano dentro de um client
component daria anos diferentes no servidor e no cliente na viragem do ano, e a
hidratacao reclamava.

`enabled` a falso desliga o botao e mostra o aviso de que os dados nao seguem,
tal como o painel do `/contacto`. A Home e server component, por isso le a
variavel e passa a prop para baixo.

## Regras que este modulo respeita

- **Rodape so na Home.** A coluna direita fecha a pagina, por isso o `SiteFooter`
  global fica escondido em `/` pelo `SiteFooterSlot`. As restantes paginas
  continuam com o rodape de sempre. Sao dois rodapes com o mesmo credito de
  producao, nunca os dois na mesma pagina.
- **Redes sem ligacao enquanto nao houver perfil.** No conteudo, `href: null`
  mostra o nome sem link. Um `href` para lado nenhum promete destino e nao
  entrega.
- **Sem eixo de margem proprio.** As margens saem de `safe-section` e
  `safe-container`, o eixo unico do site. Nada de `px-*` a competir.
- **Sem string fixa em JSX.** Toda a copy vive em `data/content.ts`, tipada por
  `types.ts`. Trocar copy nunca obriga a abrir um componente.
- **Sem endpoint proprio.** O formulario usa `POST /api/diagnostic`, o mesmo do
  `/contacto`, com o mesmo esquema, as mesmas opcoes e o mesmo honeypot. A rota
  envia a lead por WhatsApp via Evolution API (instancia `helio-forms`), ver
  `src/modules/diagnostic/api/send-whatsapp-notification.ts`.

## Estrutura

```
src/modules/closing-section/
  index.ts                     barrel, importar daqui
  types.ts                     contrato de conteudo
  data/content.ts              copy pt-PT
  components/
    ClosingSection.tsx         a seccao
    ClosingFooter.tsx          redes, navegacao e barra legal
    FormFields.tsx             rotulos flutuantes em CSS puro
    VerticalMarquee.tsx        carrossel do wordmark
    Reveal.tsx                 entrada por scroll
  styles/closing-section.css   keyframes do carrossel e do metalico
```

O wordmark do carrossel esta em `public/brand/safe-wordmark.svg`, extraido do
banner institucional sem o simbolo e sem o traco divisor. Ocupa a largura toda da
coluna e a janela mostra um de cada vez, em vez de uma fila de logotipos pequenos.

## Como o fecho se adapta ao ecra

Regra unica: **as medidas do carrossel sao proporcoes, nunca pixeis fixos**.

- A janela sai de um racio, nunca de alturas fixas, por isso acompanha a largura
  da coluna. Nao ha `h-*` por breakpoint.
- A partir de `lg` o racio e o do proprio wordmark (`aspect-[622/266]`), a janela
  cresce (`grow`) para absorver o espaco livre da coluna, porque ai a coluna do
  formulario e bastante mais alta, e o tecto e uma vez e meia a altura natural,
  em `cqw`, ou seja medido pela largura da propria coluna
  (`.safe-marquee-window` no CSS do modulo). Sem tecto, nas larguras de portatil
  a janela chegava a quatro wordmarks empilhados.
- Abaixo de `lg` a janela e propositadamente mais alta do que o wordmark
  (`aspect-[622/500]`) e **o tecto em `cqw` nao se aplica**. Ao racio nativo so
  cabia um pedaco do lockup: via-se "SAFE" inteiro e restos de "GROUP" em cima e
  em baixo, como se o logotipo estivesse cortado. Em `622/500` a janela vale
  sempre mais do que um passo do carrossel mais uma copia, por isso ha um lockup
  completo a vista em qualquer momento do ciclo.
- O espaco entre copias e `7%` da largura, as fitas de fade `18%` da altura.
- O carrossel aparece em **todas** as larguras. Abaixo de `lg` a coluna direita
  empilha por baixo do formulario e o wordmark fecha a pagina antes das listas de
  redes e navegacao.

No telemovel o rodape segue o mesmo desenho da referencia aprovada: a coluna da
navegacao alinha a direita (`text-right lg:text-left`), de forma a que as duas
listas encostem as margens da seccao, e a barra legal deixa de ser uma linha so.
O copyright e o credito de producao empilham a esquerda e o "voltar ao topo"
ganha uma linha propria ao centro. Em barra unica, as duas frases nao cabem numa
largura de telemovel sem cortar texto, e nenhuma das duas pode ser cortada. A
partir de `lg` volta tudo a barra de uma linha, com o botao encostado a direita.

Nao repor alturas fixas aqui. Foi esse o defeito que obrigou a esta passagem: a
seccao so estava certa na largura do monitor onde tinha sido afinada, e num
portatil com o ecra escalado pelo Windows caia abaixo de `lg` e ficava sem
carrossel nenhum.
