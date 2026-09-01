/**
 * Ligacao da Hero antes de virar endereco. O `href` e o caminho interno da
 * aplicacao (`/contacto`, `/metodo`), igual nos cinco idiomas; o endereco final
 * e montado no componente, ja com o prefixo e a palavra traduzida do idioma
 * actual, como em `site-nav/data/nav-content.ts`.
 */
export type HeroAction = { href: "/contacto" | "/metodo"; label: string };

/**
 * Copy da Hero da Home. E este o formato que os agentes tradutores escrevem, um
 * ficheiro por idioma. As duas linhas do titulo estao separadas porque cada uma
 * vive na sua mascara de revelacao, com o seu passo de atraso.
 */
export type HeroContent = {
  /** Os dois rotulos do chapeu, separados no ecra por um ponto vermelho. */
  kicker: [string, string];
  title: { first: string; second: string };
  lead: string;
  /** As tres areas listadas sob o paragrafo. */
  areas: string[];
  actions: { primary: HeroAction; secondary: HeroAction };
  /** Assinatura presa ao fundo da Hero. */
  signature: string;
};

export type HomeContent = { hero: HeroContent };
