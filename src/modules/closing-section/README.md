# `closing-section`

Fecho da Home: sobretitulo, titulo com a linha de destaque metalica, beneficios,
formulario de diagnostico e carrossel vertical do wordmark Safe Group.

Adaptado de um bloco trazido de outro projeto. Ao entrar aqui perdeu a paleta
roxa, o rodape proprio, o envio por WhatsApp e as quatro dependencias de
formulario. Ficou so o que o site da Safe usa.

## Usar

```tsx
import { ClosingSection } from "@/modules/closing-section";

const diagnosticEnabled = Boolean(process.env.SAFE_DIAGNOSTIC_WEBHOOK_URL);
<ClosingSection enabled={diagnosticEnabled} />
```

`enabled` a falso desliga o botao e mostra o aviso de que os dados nao seguem,
tal como o painel do `/contacto`. A Home e server component, por isso le a
variavel e passa a prop para baixo.

## Regras que este modulo respeita

- **Sem rodape proprio.** O rodape do site e o `SiteFooter` global do layout.
  Renderizar os dois na mesma pagina dava rodape a dobrar.
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
    FormFields.tsx             rotulos flutuantes em CSS puro
    VerticalMarquee.tsx        carrossel do wordmark
    Reveal.tsx                 entrada por scroll
  styles/closing-section.css   keyframes do carrossel e do metalico
```

O wordmark do carrossel esta em `public/brand/safe-wordmark.svg`, extraido do
banner institucional sem o simbolo e sem o traco divisor.
