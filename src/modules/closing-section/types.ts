/**
 * Contrato de conteudo da seccao de fecho.
 *
 * Todo o texto, rotulo e mensagem vive aqui e nos ficheiros `data/content.<idioma>.ts`.
 * Os componentes nao tem uma unica string fixa, por isso mudar copy nunca obriga a
 * tocar em JSX.
 */

export type ClosingSectionField =
  | "name"
  | "email"
  | "phone"
  | "company"
  | "sector"
  | "operationSize"
  | "priority"
  | "message";

/**
 * Caminhos internos que o rodape da Home lista. Guarda-se a rota, nao o
 * endereco: e o getter que lhe junta o prefixo do idioma actual, do mesmo modo
 * que o `hash` faz nas ligacoes do rodape global.
 */
export type ClosingNavPath = "/solucoes" | "/metodo" | "/cases" | "/sobre" | "/contacto";

/** Parte da copy que e igual na baseline e no conteudo ja resolvido. */
type ClosingSectionBase = {
  /** Sobretitulo em vermelho, no mesmo estilo das restantes seccoes. */
  kicker: string;
  /** Titulo em duas partes. A do meio recebe o gradiente metalico. */
  titleLine1: string;
  titleAccent: string;
  titleLine3: string;
  /** Paragrafo montado como descA + <strong>descStrong</strong> + descB. */
  descA: string;
  descStrong: string;
  descB: string;
  benefits: readonly string[];
  /** Cabecalho da coluna esquerda do formulario. */
  contactHeader: string;
  /** Cabecalho da coluna direita do formulario. */
  operationHeader: string;
  /** Nota curta ao lado do botao de envio. */
  submitHint: string;

  form: {
    labels: Record<ClosingSectionField, string>;
    selectPlaceholder: string;
    submit: string;
    submitting: string;
    /** Rotulo do botao enquanto o webhook nao esta configurado. */
    disabled: string;
    /** Aviso mostrado quando o envio esta desligado. */
    disabledNotice: string;
    successTitle: string;
    successDesc: string;
    errorMessage: string;
    /** Mensagem de validacao por campo. */
    errors: Record<ClosingSectionField, string>;
  };
};

/**
 * A coluna direita fecha a Home, por isso carrega o rodape. O `SiteFooter`
 * global fica escondido nessa pagina, senao havia copyright a dobrar.
 */
type ClosingFooterBase = {
  socialHeader: string;
  /** `href` a nulo mostra o nome sem ligacao, enquanto o perfil nao existir. */
  socials: readonly { label: string; href: string | null }[];
  navHeader: string;
  /** O ano entra a parte, vindo do servidor. */
  copyright: string;
  backToTop: string;
};

/** O que cada ficheiro de idioma escreve. */
export type ClosingSectionCopy = ClosingSectionBase & {
  footer: ClosingFooterBase & {
    navLinks: readonly { path: ClosingNavPath; label: string }[];
  };
};

/** O que o componente recebe, ja com os enderecos do idioma resolvidos. */
export type ClosingSectionContent = ClosingSectionBase & {
  footer: ClosingFooterBase & {
    navLinks: readonly { href: string; label: string }[];
  };
};
