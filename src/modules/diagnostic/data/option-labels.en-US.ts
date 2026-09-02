import type { DiagnosticOptionLabels } from "../types/diagnostic";

/**
 * Rotulos pt-PT das opcoes do formulario.
 *
 * A chave de cada entrada e o valor que o formulario envia para o webhook e que
 * o esquema de validacao aceita: **nao se traduz nem se corrige**. Traduz-se so
 * o texto a direita, que e o unico que o visitante le.
 */
export const diagnosticOptionLabelsEnUS: DiagnosticOptionLabels = {
  sector: {
    "Automóvel": "Automotive",
    "Financeiro": "Financial",
    "Software ou SaaS": "Software or SaaS",
    "Outro setor": "Other sector",
  },
  operationSize: {
    "Operação única": "Single operation",
    "2 a 4 unidades ou equipas": "2 to 4 units or teams",
    "5 ou mais unidades ou equipas": "5 or more units or teams",
  },
  priority: {
    "Gerar mais procura": "Generate more demand",
    "Melhorar atendimento e conversão": "Improve response and conversion",
    "Organizar CRM, dados e operação": "Organize CRM, data and operations",
    "Desenvolver software ou SaaS": "Build software or SaaS",
    "Melhorar margem e eficiência": "Improve margin and efficiency",
    "Ainda não está claro": "Not clear yet",
  },
};
