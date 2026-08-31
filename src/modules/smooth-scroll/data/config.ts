/**
 * Parâmetros retirados da configuração do Lenis do site de referência (a Tyvo
 * carrega o wrapper "lenis-offbrand" com `data-duration="2"` e
 * `data-easing="(t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t))"`).
 */

/** Tempo, em milissegundos, que cada impulso leva a assentar. */
export const DURATION = 2000;

/** easeOutExpo: arranca depressa e passa quase todo o tempo a travar. */
export function easeOutExpo(t: number): number {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

/**
 * Uma linha de roda do rato em pixels, para normalizar `deltaMode`. O Firefox
 * reporta em linhas e não em pixels.
 */
export const LINE_HEIGHT = 16;

/**
 * Margem de tolerância, em pixels, para distinguir um scroll escrito por este
 * módulo de um scroll vindo de fora (barra de deslocamento, âncora do browser,
 * `scrollTo` de outro componente).
 */
export const DRIFT = 1.5;

/**
 * Elementos com este atributo ficam com o scroll nativo. Serve para qualquer
 * caixa que precise de rolar por dentro sem a página se mexer.
 */
export const OPT_OUT = "data-native-scroll";
