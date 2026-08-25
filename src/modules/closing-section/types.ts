/**
 * Contrato de conteudo da seccao de fecho.
 *
 * Todo o texto, rotulo e mensagem vive aqui e em `data/content.ts`. Os
 * componentes nao tem uma unica string fixa, por isso mudar copy nunca obriga a
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

export type ClosingSectionContent = {
  /** Sobretitulo em vermelho, no mesmo estilo das restantes seccoes. */
  kicker: string;
  /** Titulo em tres linhas. A do meio recebe o gradiente metalico. */
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
    /** Mensagem de validacao por campo, em pt-PT. */
    errors: Record<ClosingSectionField, string>;
  };
};
