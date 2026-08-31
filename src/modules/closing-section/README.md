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
  continuam com o rodape de sempre. Sao dois rodapes com o mesmo copyright,
  nunca os dois na mesma pagina.
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
  styles/closing-section.css   keyframes do carrossel (a varredura metalica do
                                titulo vive em shared/styles/metallic-shine.css)
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
- Abaixo de `lg` a janela tem racio proprio, `aspect-[19/10]`, e **o tecto em
  `cqw` nao se aplica**.
- **A regra da moldura: `janela >= 2 x marca + intervalo`.** As copias estao a um
  passo fixo umas das outras, por isso, se a folga (`janela - marca`) for menor
  do que um passo, existem instantes do ciclo em que nenhuma copia cai inteira e
  o lockup aparece cortado, com "SAFE" a vista e restos de "GROUP" em cima e em
  baixo. Nao chega a janela valer um passo: isso da uma copia inteira apenas numa
  fraccao do ciclo. Medido a 390 px com uma janela de 137 px: 3 instantes em 24.
- Abaixo de `lg` a copia ocupa `70%` da largura, nao a largura toda, e e essa
  reducao que faz a conta fechar num tamanho de banda razoavel: a largura toda
  pedia 247 px de moldura, a `70%` pede 180 px. O intervalo entre copias e `1.5%`
  da largura e as fitas de fade `10%` da altura (a partir de `lg`, `7%` e `18%`).
- **Nao verificado no ramo `lg`.** A 1440 a janela tem 303 px e a conta pedia
  385 px, por isso ha instantes sem lockup inteiro (medido: 7 em 24). Corrigi-lo
  obriga a subir o tecto de `64cqw`, que foi posto de proposito para a banda nao
  virar parede de logotipos, por isso fica em aberto.
- O carrossel aparece em **todas** as larguras. Abaixo de `lg` a coluna direita
  empilha por baixo do formulario e o wordmark fecha a pagina antes das listas de
  redes e navegacao.

## O telemovel foi medido contra a referencia

Os numeros do fecho da Nyo a 390 px, tirados com Playwright sobre o site em
producao, e o que o fecho da Safe faz hoje:

| a 390 px | Nyo | Safe |
| --- | --- | --- |
| passo entre campos | 42 px | 51 px |
| banda do wordmark | 131 px | 180 px |
| passo entre linhas das listas | 24 px | 28 px |
| cabecalho de grupo | 13 px, peso 700 | 13 px, peso 600 |

O que faz o fecho da referencia caber num ecra e o formulario ter as linhas
**coladas**, separadas so pelo filete de cada campo. Por isso `space-y-0
md:space-y-5`: no telemovel o intervalo de 20 px desaparece e sobra apenas a
altura do campo. O campo nao encolhe mais porque o texto tem de ficar em 16 px,
senao o Safari do iOS da zoom a pagina quando o campo recebe foco. E a unica
medida em que ficamos deliberadamente acima da referencia.

A banda fica acima da referencia porque o wordmark da Safe e um lockup de duas
linhas ("SAFE" sobre "GROUP") e o da Nyo e uma palavra so. Cortar uma palavra de
uma linha le-se como gesto de composicao; cortar o lockup deixa "GROUP" orfao e
le-se como defeito.

Os cabecalhos de grupo ("Informacoes de contacto" e "Informacoes sobre a
empresa") sao dois blocos evidentes, nao legendas de apoio: caixa alta, peso 600
e contraste cheio, com filete por baixo. Em `white/45` a 11 px desapareciam ao
lado dos campos e o formulario lia-se como uma lista unica de oito linhas.

O rodape segue o mesmo desenho: a coluna da navegacao alinha a direita (`text-right lg:text-left`), de forma a que as duas
listas encostem as margens da seccao, e a barra legal deixa de ser uma linha so.
O copyright fica a esquerda e o "voltar ao topo" ganha uma linha propria ao
centro, para o copyright nunca ser truncado em telemovel. A partir de `lg` volta
tudo a barra de uma linha, com o botao encostado a direita.

Nao repor alturas fixas aqui. Foi esse o defeito que obrigou a esta passagem: a
seccao so estava certa na largura do monitor onde tinha sido afinada, e num
portatil com o ecra escalado pelo Windows caia abaixo de `lg` e ficava sem
carrossel nenhum.
