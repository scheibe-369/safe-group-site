import type { DiagnosticOptionLabels } from "../types/diagnostic";

/**
 * Rotulos pt-PT das opcoes do formulario, a lingua de origem.
 *
 * A chave de cada entrada e o valor que o formulario envia para o webhook e que
 * o esquema de validacao aceita: **nao se traduz nem se corrige**. Traduz-se so
 * o texto a direita, que e o unico que o visitante le.
 */
export const diagnosticOptionLabelsPtPT: DiagnosticOptionLabels = {
  sector: {
    "Automóvel": "Automóvel",
    "Financeiro": "Financeiro",
    "Software ou SaaS": "Software ou SaaS",
    "Outra operação high ticket": "Outra operação high ticket",
  },
  operationSize: {
    "Operação única": "Operação única",
    "2 a 4 unidades ou equipas": "2 a 4 unidades ou equipas",
    "5 ou mais unidades ou equipas": "5 ou mais unidades ou equipas",
  },
  priority: {
    "Gerar mais procura": "Gerar mais procura",
    "Melhorar atendimento e conversão": "Melhorar atendimento e conversão",
    "Organizar CRM, dados e operação": "Organizar CRM, dados e operação",
    "Desenvolver software ou SaaS": "Desenvolver software ou SaaS",
    "Melhorar margem e eficiência": "Melhorar margem e eficiência",
    "Ainda não está claro": "Ainda não está claro",
  },
};
