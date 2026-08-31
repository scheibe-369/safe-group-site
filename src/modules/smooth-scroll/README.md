# Módulo `smooth-scroll`

Scroll com inércia em todo o site. Cada impulso da roda define um destino e a
página viaja até lá em 2 segundos com uma curva expo-out: arranca depressa e
passa quase todo o tempo a travar, em vez de parar seco quando se larga a roda.

Monta uma vez, em `src/app/layout.tsx`, e não desenha nada.

## Origem dos números

O site de referência (Tyvo) corre em Lenis, carregado com
`data-duration="2"` e
`data-easing="(t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t))"`. São esses os
dois valores em `data/config.ts`, não uma aproximação a olho.

## Porque não a biblioteca

O Lenis resolveria o mesmo, mas aqui não compensava:

- Esta base tem uma Hero presa com `ScrollTrigger`, uma pilha de 600vh em
  `position: sticky` e carrosséis Swiper. Escrevendo eu o `scrollTo`, os
  eventos de scroll nativos continuam a fluir e o `ScrollTrigger`, o
  `IntersectionObserver` e o `sticky` comportam-se exactamente como antes, sem
  precisar de ligar o Lenis ao ticker do GSAP.
- O `package.json` é partilhado com outras sessões. Acrescentar uma dependência
  obrigava a commitar trabalho alheio junto com o meu.

## Como funciona

- **Rola a janela de verdade**, com `window.scrollTo`. Não traduz um contentor,
  por isso nada do que depende da posição real do scroll muda de comportamento.
- **`behavior: "instant"` é obrigatório** na chamada. O `globals.css` declara
  `scroll-behavior: smooth` no `<html>`, e sem isso o browser abria a sua
  própria animação a cada frame, a competir com esta.
- **O impulso lê-se de duas maneiras, conforme continua ou contraria a viagem.**
  No mesmo sentido soma-se ao destino, e rodar a roda três vezes depressa anda o
  triplo. Em sentido contrário parte-se da posição actual e deita-se fora o que
  faltava percorrer. Somar sempre ao destino, como estava no início, fazia com
  que rodar para cima a meio de uma descida apenas encurtasse a descida: a
  página continuava a descer antes de inverter, e no vai e vem sentia-se como
  uma travada. Medido depois da correcção: inverte no primeiro frame, com zero
  pixels de excesso no sentido antigo.
- **O passo por frame tem um piso de um pixel físico.** A curva expo-out fecha
  cerca de 6 por cento da distância que falta em cada frame, por isso nos
  últimos ~14px o passo cai abaixo do que o ecrã consegue desenhar: a posição
  ficava presa um ou dois frames e depois saltava, e era isso que se sentia
  como engasgo no fim de cada gesto. Com o piso, o remate faz-se a velocidade
  constante. Medido antes e depois: 26 paragens num scroll contínuo de 2400px,
  contra zero.
- **O limite do documento fica em cache**, revisto por `ResizeObserver`. Lê-lo a
  cada evento da roda obrigava a um cálculo de layout síncrono por evento, com
  a pilha de 600vh e os painéis `sticky` lá dentro.
- **A tolerância da deriva acompanha o passo do último frame.** O evento de
  scroll chega depois de o frame seguinte já ter escrito, por isso uma
  tolerância fixa fazia qualquer deslize rápido matar-se a si próprio a meio.
- **Âncoras** (`/#metodo`, `#cases`) são animadas com a mesma curva e respeitam
  o `scroll-margin-top` que as secções já declaram (`scroll-mt-28`).
- **Teclado** (setas, PageUp/PageDown, Espaço, Home, End) passa pelo mesmo
  animador, para o toque ser uniforme. Não intercepta quando o foco está num
  campo de texto.

## Quando se desliga

| Situação | Comportamento |
|---|---|
| `(pointer: coarse)`, telemóvel e tablet | Desligado. O scroll nativo já tem inércia, e melhor do que qualquer imitação. |
| `prefers-reduced-motion: reduce` | Desligado. |
| Cortina de entrada aberta (`data-intro` em `pending` ou `loading`) | A roda é ignorada, porque o `<html>` está com `overflow: hidden`. |
| Ponteiro sobre uma caixa que rola por dentro | Cede-lhe o evento. Detecta `overflow-y: auto/scroll` que ainda tenha para onde rolar naquele sentido, o que já cobre o painel do MENU. |
| Barra de deslocamento, âncora do browser, `scrollTo` de outro componente | Abandona a animação em curso em vez de disputar, assim que a posição da janela deixa de bater certo com a última que escreveu. |

As duas primeiras são reavaliadas em `change`: ligar um rato a um híbrido, ou
mudar a preferência de movimento, não obriga a recarregar.

## Escapes

Qualquer elemento com `data-native-scroll` fica com o scroll nativo por dentro,
sem a página se mexer. O nome do atributo é exportado pelo barril como
`SMOOTH_SCROLL_OPT_OUT`.

## Estado no DOM

`<html data-smooth-scroll="on">` enquanto o módulo está activo. Serve para
depurar e para CSS que precise de saber, e desaparece quando o módulo se
desliga.
