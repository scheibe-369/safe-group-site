import { localeContent } from "@/shared/i18n/content";
import type { Locale } from "@/shared/i18n/locales";
import type { DiagnosticOptions } from "../types/diagnostic";
import { operationSizeOptions, priorityOptions, sectorOptions } from "./options";
import { diagnosticOptionLabelsEnGB } from "./option-labels.en-GB";
import { diagnosticOptionLabelsEnUS } from "./option-labels.en-US";
import { diagnosticOptionLabelsEs } from "./option-labels.es";
import { diagnosticOptionLabelsPtBR } from "./option-labels.pt-BR";
import { diagnosticOptionLabelsPtPT } from "./option-labels.pt-PT";

const getLabels = localeContent({
  "pt-PT": diagnosticOptionLabelsPtPT,
  "pt-BR": diagnosticOptionLabelsPtBR,
  "en-GB": diagnosticOptionLabelsEnGB,
  "en-US": diagnosticOptionLabelsEnUS,
  es: diagnosticOptionLabelsEs,
});

/**
 * Junta cada valor ao rotulo do idioma pedido.
 *
 * A lista de valores vem sempre de `options.ts`, nunca do ficheiro de idioma:
 * e ela que o esquema valida e que segue para o webhook, por isso mantem-se
 * igual e pela mesma ordem nos cinco idiomas.
 */
export function getDiagnosticOptions(locale: Locale | string): DiagnosticOptions {
  const labels = getLabels(locale);
  return {
    sector: sectorOptions.map((value) => ({ value, label: labels.sector[value] })),
    operationSize: operationSizeOptions.map((value) => ({ value, label: labels.operationSize[value] })),
    priority: priorityOptions.map((value) => ({ value, label: labels.priority[value] })),
  };
}
