import type { DiagnosticOptionLabels } from "../types/diagnostic";

/**
 * Rotulos pt-PT das opcoes do formulario.
 *
 * A chave de cada entrada e o valor que o formulario envia para o webhook e que
 * o esquema de validacao aceita: **nao se traduz nem se corrige**. Traduz-se so
 * o texto a direita, que e o unico que o visitante le.
 */
export const diagnosticOptionLabelsEs: DiagnosticOptionLabels = {
  sector: {
    "Automóvel": "Automóvil",
    "Financeiro": "Financiero",
    "Software ou SaaS": "Software o SaaS",
    "Outro setor": "Otro sector",
  },
  operationSize: {
    "Operação única": "Operación única",
    "2 a 4 unidades ou equipas": "2 a 4 unidades o equipos",
    "5 ou mais unidades ou equipas": "5 o más unidades o equipos",
  },
  priority: {
    "Gerar mais procura": "Generar más demanda",
    "Melhorar atendimento e conversão": "Mejorar atención y conversión",
    "Organizar CRM, dados e operação": "Organizar CRM, datos y operación",
    "Desenvolver software ou SaaS": "Desarrollar software o SaaS",
    "Melhorar margem e eficiência": "Mejorar margen y eficiencia",
    "Ainda não está claro": "Todavía no está claro",
  },
};
