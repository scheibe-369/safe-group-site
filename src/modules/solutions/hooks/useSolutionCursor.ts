"use client";

import { useEffect, type RefObject } from "react";

/** Suavização do seguimento. Mais baixo, mais arrasto. */
const LERP = 0.18;

/**
 * O círculo com a palavra "abrir" que substitui o ponteiro por cima dos
 * painéis, como no original.
 *
 * Só existe em ponteiro fino e sem `prefers-reduced-motion`. Em toque, o painel
 * não é um alvo de clique inteiro: o convite passa a ser o botão visível, que é
 * a leitura que o original também usa abaixo dos 768. As duas leituras são
 * reavaliadas em `change`, porque ligar um rato a um híbrido ou mudar a
 * preferência de movimento não remonta o componente.
 *
 * A posição vai na propriedade `translate` e não no `transform`, para não
 * competir com a transição de escala que o CSS já tem no `transform`.
 */
export function useSolutionCursor(
  rootRef: RefObject<HTMLElement | null>,
  cursorRef: RefObject<HTMLElement | null>,
) {
  useEffect(() => {
    const root = rootRef.current;
    const cursor = cursorRef.current;
    if (!root || !cursor) return;

    const area = root.querySelector<HTMLElement>("[data-solutions-stack]");
    if (!area) return;

    // Alinhado com o breakpoint do CSS: abaixo de 992px o link que cobre o
    // painel esta escondido, e um circulo a convidar para um clique que nao
    // acontece e pior do que nao ter circulo nenhum.
    const fine = window.matchMedia("(pointer: fine) and (min-width: 992px)");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");

    let teardown: (() => void) | undefined;

    const hide = () => {
      cursor.dataset.visible = "false";
    };

    const attach = () => {
      if (teardown) return;

      root.dataset.cursor = "on";

      let targetX = 0;
      let targetY = 0;
      let x = 0;
      let y = 0;
      let seeded = false;
      let frame = 0;

      const onMove = (event: PointerEvent) => {
        targetX = event.clientX;
        targetY = event.clientY;
        // A primeira leitura assenta o círculo onde o rato já está, para não o
        // ver a atravessar o ecrã na primeira entrada.
        if (!seeded) {
          seeded = true;
          x = targetX;
          y = targetY;
        }
      };

      const show = () => {
        cursor.dataset.visible = "true";
        // O loop so corre enquanto o ponteiro esta sobre os paineis. Antes
        // disto escrevia `translate` em todos os frames durante a sessao
        // inteira, com o circulo a `scale(0)` e a seccao a 600vh de distancia.
        if (!frame) frame = window.requestAnimationFrame(tick);
      };

      const stop = () => {
        cursor.dataset.visible = "false";
        if (frame) {
          window.cancelAnimationFrame(frame);
          frame = 0;
        }
      };

      const tick = () => {
        x += (targetX - x) * LERP;
        y += (targetY - y) * LERP;
        cursor.style.translate = `${x}px ${y}px`;
        frame = window.requestAnimationFrame(tick);
      };

      window.addEventListener("pointermove", onMove, { passive: true });
      area.addEventListener("pointerenter", show);
      area.addEventListener("pointerleave", stop);

      teardown = () => {
        stop();
        window.removeEventListener("pointermove", onMove);
        area.removeEventListener("pointerenter", show);
        area.removeEventListener("pointerleave", stop);
      };
    };

    const detach = () => {
      teardown?.();
      teardown = undefined;
      hide();
      root.dataset.cursor = "off";
    };

    const sync = () => {
      if (fine.matches && !reduce.matches) attach();
      else detach();
    };

    sync();
    fine.addEventListener("change", sync);
    reduce.addEventListener("change", sync);

    return () => {
      fine.removeEventListener("change", sync);
      reduce.removeEventListener("change", sync);
      detach();
    };
  }, [rootRef, cursorRef]);
}
