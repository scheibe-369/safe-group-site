/**
 * Caminho interno do botao. Guarda-se a rota, nao o endereco: e o getter que
 * lhe junta o prefixo do idioma actual.
 */
export type StatementCtaPath = "/contacto";

type StatementBase = {
  heading: string;
  paragraph: string;
};

/** O que cada ficheiro de idioma escreve. */
export type StatementCopy = StatementBase & {
  cta: { path: StatementCtaPath; label: string };
};

/** O que o componente recebe, ja com o endereco do idioma resolvido. */
export type StatementContent = StatementBase & {
  cta: { href: string; label: string };
};
