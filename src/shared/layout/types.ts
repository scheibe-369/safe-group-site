/**
 * Ligacao do rodape. Guarda o id da seccao da Home, nao o endereco: e o
 * componente que lhe junta a Home do idioma actual. O id da seccao e igual nos
 * cinco idiomas, so o rotulo e traduzido.
 */
export type ChromeLink = { hash: string; label: string };

export type SiteChromeContent = {
  skipToContent: string;
  logoAriaLabel: string;
  footer: {
    navAriaLabel: string;
    tagline: string;
    links: ChromeLink[];
    /** Sai depois de "© {ano} ". */
    rights: string;
    /**
     * Identificacao da pessoa juridica que opera a marca. Razao social e CNPJ
     * ficam iguais nos cinco idiomas. O rodape da Home le esta mesma frase,
     * para o CNPJ so viver num sitio por idioma.
     */
    legalEntity: string;
  };
  notFound: { kicker: string; title: string; description: string; action: string };
  metadata: { titleDefault: string; description: string; keywords: string[]; ogDescription: string };
};
