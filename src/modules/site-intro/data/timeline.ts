/**
 * Linha temporal da cortina, em segundos a contar da primeira pintura.
 *
 * Sao os instantes da referencia (nyo.ia.br), lidos da propria linha temporal
 * do Webflow IX3 da pagina e conferidos frame a frame. Aqui ficam so os
 * instantes que o componente precisa de escrever em cada elemento; as
 * duracoes, as curvas e o percurso da barra vivem em `styles/site-intro.css`,
 * ao lado dos fotogramas a que pertencem.
 *
 * Quem quiser a cortina mais rapida ou mais lenta mexe em `--intro-speed`, no
 * mesmo CSS: multiplica tudo, atrasos e duracoes, de uma vez. O gancho le esse
 * valor para o `ready` acompanhar.
 */
export const introTimeline = {
  /** As leituras nao entram todas ao mesmo tempo: a primeira aparece, as
   *  outras esperam por baixo da janela. Um instante por leitura. */
  enter: [0, 0.81, 1.86, 2.83],
  /** E saem: a primeira sobe quando a segunda entra, e assim por diante. A
   *  ultima nao sai, apaga-se com a marca. */
  leave: [0.81, 1.86, 2.83, 4.98],
  /** A linha da barra apaga-se caractere a caractere antes de a barra sair. */
  tagOut: 4.38,
  /** Tempo total repartido pelos caracteres de cada grupo escalonado. */
  spread: {
    /** Aparicao da primeira leitura e da marca, por ordem baralhada. */
    enter: 0.5,
    /** Volta do rolo, por ordem de leitura. */
    roll: 0.1,
    /** Apagar da linha, por ordem baralhada. */
    tagOut: 0.5,
    /** Apagar da ultima leitura e da marca, por ordem baralhada. */
    leave: 0.7,
  },
  /** Instante em que a primeira dobra comeca a entrar por baixo da cortina. */
  ready: 5.44,
  /** Quanto a revelacao da primeira dobra demora: o ultimo passo entra aos
   *  1.3s (`data-intro-step="9"`) e leva 0.8s. Com folga. */
  reveal: 2.3,
} as const;
