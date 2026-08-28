"use client";

import { useRef } from "react";
import { SafeMark3D } from "@/modules/site-nav";
import { introContent } from "../data/content";
import { useSiteIntro } from "../hooks/useSiteIntro";

/**
 * Corre ao ser analisado, antes de qualquer conteudo do `<body>` e portanto
 * antes da primeira pintura: com movimento reduzido nao faz nada e a pagina
 * nasce no estado final; caso contrario liga a cortina e o estado inicial
 * das mascaras. O temporizador e a rede de seguranca para uma hidratacao que
 * nunca chegue: passados cinco segundos ainda em `pending`, larga tudo.
 */
const BOOT =
  '(function(){var h=document.documentElement;try{if(matchMedia("(prefers-reduced-motion: reduce)").matches)return}catch(e){}' +
  'h.setAttribute("data-intro","pending");setTimeout(function(){if(h.getAttribute("data-intro")==="pending")h.removeAttribute("data-intro")},5000)})();';

/**
 * Cortina de entrada do site. Monta-se como primeiro filho do `<body>`, para
 * o script correr antes do resto do documento. A cortina e decorativa: fica
 * `aria-hidden`, nao tem foco e a pagina por baixo esta inteira para
 * tecnologias de apoio desde o primeiro instante.
 */
export function SiteIntro() {
  const root = useRef<HTMLDivElement>(null);
  const count = useRef<HTMLSpanElement>(null);
  const line = useRef<HTMLSpanElement>(null);
  useSiteIntro({ root, count, line });

  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: BOOT }} />
      <div ref={root} className="site-intro" aria-hidden="true">
        <SafeMark3D className="site-intro__mark" />
        <div className="site-intro__foot safe-edge">
          <div>
            <p className="site-intro__label">{introContent.loading}</p>
            <p className="site-intro__count">
              <span ref={count}>00</span>
              <small>%</small>
            </p>
          </div>
          <p className="site-intro__label site-intro__signature">{introContent.signature}</p>
        </div>
        <span ref={line} className="site-intro__line" />
      </div>
    </>
  );
}
