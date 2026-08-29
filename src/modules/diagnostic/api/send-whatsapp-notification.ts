import type { DiagnosticFormPayload } from "../types/diagnostic";

/**
 * Instancia Evolution API dedicada aos formularios do site (helio-forms).
 * URL e instancia nao sao segredo, ficam fixos aqui; a chave e que e credencial
 * e vive em EVOLUTION_API_KEY.
 */
const EVOLUTION_API_URL = "https://evo.cauania.online";
const EVOLUTION_INSTANCE = "helio-forms";
const DESTINATION_NUMBER = "5527999584889";

function formatMessage(payload: DiagnosticFormPayload): string {
  return [
    "*Novo diagnóstico recebido no site*",
    "",
    `*Nome:* ${payload.name}`,
    `*Empresa:* ${payload.company}`,
    `*Telefone:* ${payload.phone}`,
    `*E-mail:* ${payload.email}`,
    "",
    `*Setor:* ${payload.sector}`,
    `*Tamanho da operação:* ${payload.operationSize}`,
    `*Prioridade:* ${payload.priority}`,
    "",
    "*Mensagem:*",
    payload.message.trim() || "(sem mensagem)",
  ].join("\n");
}

export function whatsappNotificationEnabled(): boolean {
  return Boolean(process.env.EVOLUTION_API_KEY);
}

export async function sendWhatsappNotification(payload: DiagnosticFormPayload): Promise<boolean> {
  const apiKey = process.env.EVOLUTION_API_KEY;
  if (!apiKey) return false;

  try {
    const response = await fetch(`${EVOLUTION_API_URL}/message/sendText/${EVOLUTION_INSTANCE}`, {
      method: "POST",
      headers: { "Content-Type": "application/json", apikey: apiKey },
      body: JSON.stringify({ number: DESTINATION_NUMBER, text: formatMessage(payload) }),
      signal: AbortSignal.timeout(8_000),
    });
    return response.ok;
  } catch {
    return false;
  }
}
