export type NavLink = {
  href: string;
  label: string;
};

export type MenuCaseLink = NavLink & {
  slug: string;
  /** Capa mostrada no painel visual do menu enquanto a ligação está sob o rato. */
  cover: string;
};

export type SocialLink = {
  label: string;
  /** `null` enquanto o perfil não estiver confirmado, pelo mesmo critério do rodapé. */
  href: string | null;
};

/**
 * Ligacao do menu antes de virar endereco. O `hash` e o id da seccao na Home,
 * igual nos cinco idiomas; sem `hash`, a ligacao e a propria Home. O endereco
 * final e montado em `data/nav-content.ts`, ja com o prefixo do idioma, para os
 * componentes continuarem a receber uma string pronta.
 */
export type NavLabel = { hash?: string; label: string };

/** So a copy do menu. E este o ficheiro que os agentes tradutores escrevem. */
export type SiteNavLabels = {
  brandLabel: string;
  barLinks: NavLabel[];
  cta: NavLabel;
  toggle: {
    open: string;
    close: string;
    ariaOpen: string;
    ariaClose: string;
    menuLabel: string;
  };
  columns: {
    navigation: string;
    cases: string;
  };
  menuLinks: NavLabel[];
  casesAll: NavLabel;
  /** Mostrado sob o titulo dos cases enquanto a lista tiver conteudo de demonstracao. */
  casesNote: string;
};

export type SiteNavContent = {
  brandLabel: string;
  /** Ligações visíveis na barra em ecrã largo. */
  barLinks: NavLink[];
  cta: NavLink;
  toggle: {
    open: string;
    close: string;
    ariaOpen: string;
    ariaClose: string;
    menuLabel: string;
  };
  columns: {
    navigation: string;
    cases: string;
  };
  /** Coluna de navegação dentro do menu, mais completa do que a barra. */
  menuLinks: NavLink[];
  cases: MenuCaseLink[];
  /** Ligação para o índice completo, no fim da coluna dos cases. */
  casesAll: NavLink;
  /** Aviso discreto sob o título dos cases enquanto a lista tiver conteúdo de demonstração. */
  casesNote?: string;
  social: SocialLink[];
};
