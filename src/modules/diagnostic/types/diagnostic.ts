import type { operationSizeOptions, priorityOptions, sectorOptions } from "../data/options";

export type DiagnosticFormPayload = {
  name: string;
  email: string;
  phone: string;
  company: string;
  sector: string;
  operationSize: string;
  priority: string;
  website?: string;
};

export type SectorValue = (typeof sectorOptions)[number];
export type OperationSizeValue = (typeof operationSizeOptions)[number];
export type PriorityValue = (typeof priorityOptions)[number];

/**
 * Rotulo visivel de cada opcao, indexado pelo valor que segue para o webhook.
 * O valor e um identificador, escrito em pt-PT por ser a lingua de origem, e
 * nunca muda; so o rotulo e que e copy.
 */
export type DiagnosticOptionLabels = {
  sector: Record<SectorValue, string>;
  operationSize: Record<OperationSizeValue, string>;
  priority: Record<PriorityValue, string>;
};

/** Opcao pronta a desenhar: o `value` vai no formulario, o `label` no ecra. */
export type DiagnosticOption = { value: string; label: string };

export type DiagnosticOptions = {
  sector: readonly DiagnosticOption[];
  operationSize: readonly DiagnosticOption[];
  priority: readonly DiagnosticOption[];
};
