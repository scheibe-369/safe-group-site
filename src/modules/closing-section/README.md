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

const diagnosticEnabled = Boolean(process.env.SAFE_DIAGNOSTIC_WEBHOOK_URL);
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
  `/contacto`, com o mesmo esquema, as mesmas opcoes e o mesmo honeypot.

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
coluna e o espaco entre copias e maior do que a altura de cada uma, por isso a
janela mostra um de cada vez em vez de uma fila de logotipos pequenos.
