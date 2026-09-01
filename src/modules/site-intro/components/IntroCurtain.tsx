"use client";

import type { CSSProperties } from "react";
import { SafeMark3D } from "@/modules/site-nav";
import { introTimeline } from "../data/timeline";
import { stagger } from "../lib/stagger";
import { useSiteIntro } from "../hooks/useSiteIntro";
import type { SiteIntroContent } from "../types";

/**
 * Corre ao ser analisado, antes de qualquer conteudo do `<body>` e portanto
 * antes da primeira pintura: com movimento reduzido nao faz nada e a pagina
 * nasce no estado final; caso contrario liga a cortina e o estado inicial das
 * mascaras. Guarda tambem o instante em que correu, que e o zero da linha
 * temporal do CSS: o gancho hidrata mais tarde e precisa de saber quanto ja
 * passou para abrir a cortina na altura certa.
 *
 * O temporizador e a rede de seguranca para uma hidratacao que nunca chegue:
 * passados doze segundos ainda com a cortina em cima, larga tudo.
 */
const BOOT =
  '(function(){var h=document.documentElement;try{if(matchMedia("(prefers-reduced-motion: reduce)").matches)return}catch(e){}' +
  'h.setAttribute("data-intro","pending");h.setAttribute("data-intro-at",String(Math.round(performance.now())));' +
  'setTimeout(function(){var s=h.getAttribute("data-intro");if(s==="pending"||s==="loading")h.removeAttribute("data-intro")},12000)})();';

/**
 * Cada elemento da cortina tem no maximo dois instantes: `--intro-in`, quando
 * entra em cena, e `--intro-out`, quando sai. Sao dois envolucros encaixados,
 * um por instante, para nunca haver duas animacoes a disputar a mesma
 * propriedade no mesmo elemento. O CSS decide o que cada envolucro faz: a
 * primeira leitura acende-se e sobe, as do meio sobem e voltam a subir, a
 * ultima sobe e apaga-se.
 */
type Beat = { in?: number; out?: number };

const seconds = (beat: Beat): CSSProperties =>
  ({
    ...(beat.in === undefined ? null : { "--intro-in": `${beat.in}s` }),
    ...(beat.out === undefined ? null : { "--intro-out": `${beat.out}s` }),
  }) as CSSProperties;

const { enter, leave, tagOut, spread } = introTimeline;

/**
 * Reparte os instantes da linha temporal pelos caracteres da copy do idioma
 * actual. Vive aqui dentro, e nao no espaco do modulo, porque o texto so e
 * conhecido quando o conteudo chega: o numero de caracteres da linha muda de
 * idioma para idioma.
 */
function buildCurtain(content: SiteIntroContent) {
  /** Caracteres da linha, que so tem saida: quem os revela e a barra. */
  const tag = [...content.tag];
  const tagBeats = stagger(tag.length, tagOut, spread.tagOut, 7);

  /**
   * A primeira leitura acende-se ao lado da marca, no mesmo grupo baralhado, e
   * a ultima apaga-se com ela. Nos dois casos a marca e o alvo a seguir ao
   * ultimo caractere, por isso o grupo leva mais um.
   */
  const first = [...content.steps[0]];
  const last = [...content.steps[content.steps.length - 1]];
  const open = stagger(first.length + 1, enter[0], spread.enter, 3);
  const close = stagger(last.length + 1, leave[leave.length - 1], spread.leave, 11);

  /** Uma leitura por passo, com o instante de entrada e de saida de cada caractere. */
  const steps = content.steps.map((label, step) => {
    const chars = [...label];
    const rollIn = step === 0 ? open : stagger(chars.length, enter[step], spread.roll);
    const rollOut = step === content.steps.length - 1 ? close : stagger(chars.length, leave[step], spread.roll);

    return {
      label,
      chars: chars.map((char, index) => ({
        char,
        beat: { in: rollIn[index], out: rollOut[index] } satisfies Beat,
      })),
    };
  });

  const logo: Beat = { in: open[open.length - 1], out: close[close.length - 1] };

  return { tag, tagBeats, steps, logo };
}

/**
 * Cortina de entrada do site, no desenho da referencia: um bloco pequeno ao
 * centro do ecra, em monoespaçada, com a linha de estado por cima e, por
 * baixo, o contador a esquerda e o simbolo Safe a direita. O nome por extenso
 * ja esta na linha de cima, por isso aqui basta o simbolo: o wordmark tem uma
 * segunda linha que a esta escala nao se le. A barra branca entra
 * pela esquerda em quatro tempos e e ela que revela a linha, que esta escrita
 * a preto sobre o preto da cortina. O contador salta de 00 a 100 pelas mesmas
 * quatro paragens, cada salto uma volta do rolo.
 *
 * Monta-se como primeiro filho do `<body>`, para o script correr antes do
 * resto do documento. A cortina e decorativa: fica `aria-hidden`, nao tem foco
 * e a pagina por baixo esta inteira para tecnologias de apoio desde o primeiro
 * instante.
 */
export function IntroCurtain({ content }: { content: SiteIntroContent }) {
  useSiteIntro();

  const { tag, tagBeats, steps, logo } = buildCurtain(content);

  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: BOOT }} />
      <div className="site-intro" aria-hidden="true">
        <div className="site-intro__wrap">
          <div className="site-intro__item">
            <p className="site-intro__tag">
              {tag.map((char, index) => (
                <span key={index} className="site-intro__leave" style={seconds({ out: tagBeats[index] })}>
                  {char === " " ? " " : char}
                </span>
              ))}
            </p>
            <span className="site-intro__bar" />
          </div>

          <div className="site-intro__row">
            <p className="site-intro__odometer">
              {steps.map((step) => (
                <span key={step.label} className="site-intro__step">
                  {step.chars.map(({ char, beat }, position) => (
                    <span key={position} className="site-intro__enter" style={seconds({ in: beat.in })}>
                      <span className="site-intro__leave" style={seconds({ out: beat.out })}>
                        {char}
                      </span>
                    </span>
                  ))}
                </span>
              ))}
            </p>

            <span className="site-intro__enter site-intro__logo" style={seconds({ in: logo.in })}>
              <span className="site-intro__leave site-intro__lockup" style={seconds({ out: logo.out })}>
                <SafeMark3D className="site-intro__mark" />
              </span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
