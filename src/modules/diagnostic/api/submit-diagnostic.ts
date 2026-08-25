import type { DiagnosticFormPayload } from "../types/diagnostic";

/**
 * Envio partilhado pelas duas entradas de diagnostico do site: o painel do
 * /contacto e a seccao de fecho da Home. A rota /api/diagnostic valida origem,
 * tamanho, honeypot e esquema antes de tocar no webhook.
 */
export async function submitDiagnostic(payload: DiagnosticFormPayload): Promise<boolean> {
  try {
    const response = await fetch("/api/diagnostic", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    return response.ok;
  } catch {
    return false;
  }
}
