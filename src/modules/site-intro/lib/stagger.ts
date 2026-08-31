/**
 * Gerador congruencial linear. Serve para baralhar a ordem de um grupo sempre
 * da mesma maneira: a cortina e pintada no servidor e reaproveitada no
 * cliente, por isso os atrasos tem de sair iguais dos dois lados, senao a
 * hidratacao encontra estilos diferentes dos que escreveu.
 */
function sequence(seed: number) {
  let state = seed;
  return () => (state = (state * 1103515245 + 12345) % 2147483648) / 2147483648;
}

/**
 * Atrasos de um grupo escalonado, no modelo do GSAP que a referencia usa:
 * `spread` e o tempo total repartido por todos os alvos, nao o intervalo entre
 * dois. Com `seed` a zero os alvos sao servidos por ordem; com uma semente
 * qualquer sao servidos por ordem baralhada, que e o que da a sensacao de
 * texto a acender caractere a caractere.
 *
 * Devolve segundos absolutos, ja somados a `start`, na ordem dos alvos.
 */
export function stagger(count: number, start: number, spread: number, seed = 0): number[] {
  const order = Array.from({ length: count }, (_, index) => index);

  if (seed) {
    const next = sequence(seed);
    for (let i = order.length - 1; i > 0; i -= 1) {
      const j = Math.floor(next() * (i + 1));
      [order[i], order[j]] = [order[j], order[i]];
    }
  }

  const step = count > 1 ? spread / (count - 1) : 0;
  const delays = new Array<number>(count);
  order.forEach((target, rank) => {
    delays[target] = Number((start + rank * step).toFixed(3));
  });

  return delays;
}
