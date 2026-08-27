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
    solutions: string;
  };
  /** Coluna de navegação dentro do menu, mais completa do que a barra. */
  menuLinks: NavLink[];
  solutions: NavLink[];
  cases: MenuCaseLink[];
  social: SocialLink[];
  legal: string;
};
