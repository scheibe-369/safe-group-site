/**
 * Valores das opcoes do formulario. **Nao sao copy**: e isto que o esquema
 * valida e que segue no pedido para o webhook, por isso ficam iguais nos cinco
 * idiomas e nao se corrigem. Estao escritos em pt-PT por ser a lingua de
 * origem. O texto que o visitante le vive em `option-labels.<idioma>.ts`.
 */
export const operationSizeOptions = [
  "Operação única",
  "2 a 4 unidades ou equipas",
  "5 ou mais unidades ou equipas",
] as const;

export const sectorOptions = [
  "Automóvel",
  "Financeiro",
  "Software ou SaaS",
  "Outra operação high ticket",
] as const;

export const priorityOptions = [
  "Gerar mais procura",
  "Melhorar atendimento e conversão",
  "Organizar CRM, dados e operação",
  "Desenvolver software ou SaaS",
  "Melhorar margem e eficiência",
  "Ainda não está claro",
] as const;
