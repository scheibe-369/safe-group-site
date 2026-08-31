"use client";

import { useEffect, type RefObject } from "react";

/**
 * Dois limiares, porque o original também tem dois momentos distintos.
 *
 * O `SCROLL_INTO_VIEW` do Webflow, com `scrollOffsetValue: 40`, testa a
 * interseccao do painel com a banda central do ecra, o que num painel de 100vh
 * dá o reveal com 40 por cento de cobertura. O `SCROLLING_IN_VIEW` que acende o
 * menu tem os keyframes a fazer crossfade entre os 60 e os 80 por cento. O
 * texto entra, portanto, antes de o menu mudar, e é essa a cadência do
 * original.
 */
const REVEAL = 0.4;
const ACTIVE = 0.7;

/**
 * Um único `IntersectionObserver` governa as duas coisas que o original tinha
 * separadas em duas interacções: o reveal do conteúdo de cada painel e o item
 * aceso no menu.
 *
 * Os painéis são `sticky`, por isso os que já estão presos continuam a contar
 * 100 por cento de visibilidade mesmo tapados pelo painel seguinte (o
 * observador não sabe de oclusão). O painel da frente é, portanto, sempre o de
 * maior índice acima do limiar. Isto mantém o menu e o reveal em fase, e
 * funciona nos dois sentidos do scroll sem contas de posição.
 *
 * O estado vive em atributos no DOM e não em `useState`: a marcação toda é
 * renderizada no servidor e entregue por `children`, por isso não há árvore
 * React deste lado para voltar a renderizar. Escrever `data-*` directamente
 * evita seis re-renders com seis `next/image` a cada passo do scroll.
 */
export function useSolutionsStack(rootRef: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const list = root.querySelector<HTMLElement>("[data-solutions-list]");
    const panels = Array.from(root.querySelectorAll<HTMLElement>("[data-panel]"));
    const items = Array.from(root.querySelectorAll<HTMLElement>("[data-menu-item]"));
    if (!list || panels.length === 0) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce) {
      // O reveal é movimento e fica de fora, mas o item aceso do menu é só uma
      // mudança de cor: não há razão de acessibilidade para o desligar, por
      // isso o observador continua a correr.
      panels.forEach((panel) => {
        panel.dataset.revealed = "true";
      });
    } else {
      // O estado inicial escondido só entra por JavaScript. Sem isto, uma falha
      // a carregar o bundle deixava o texto preso fora da máscara.
      list.dataset.motion = "on";
    }

    const ratios = new Array<number>(panels.length).fill(0);
    const position = new Map(panels.map((panel, index) => [panel, index]));
    let active = -1;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const index = position.get(entry.target as HTMLElement);
          if (index === undefined) continue;
          ratios[index] = entry.intersectionRatio;

          if (!reduce && entry.intersectionRatio >= REVEAL) {
            (entry.target as HTMLElement).dataset.revealed = "true";
          }
        }

        let front = 0;
        for (let i = 0; i < ratios.length; i += 1) {
          if (ratios[i] >= ACTIVE) front = i;
        }
        if (front === active) return;
        active = front;
        items.forEach((item, index) => {
          item.dataset.active = index === front ? "true" : "false";
        });
      },
      { threshold: [0, REVEAL, ACTIVE, 1] },
    );

    panels.forEach((panel) => observer.observe(panel));

    return () => {
      observer.disconnect();
      delete list.dataset.motion;
    };
  }, [rootRef]);
}
