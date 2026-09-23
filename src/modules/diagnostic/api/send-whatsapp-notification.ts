import type { DiagnosticFormPayload } from "../types/diagnostic";

/**
 * Instancia Evolution API dedicada aos formularios do site (daviteste-efb15a).
 * URL e instancia nao sao segredo, ficam fixos aqui; a chave e que e credencial
 * e vive em EVOLUTION_API_KEY.
 */
const EVOLUTION_API_URL = "https://evo.cauania.online";
const EVOLUTION_INSTANCE = "daviteste-efb15a";
const DESTINATION_NUMBERS = ["5527999584889", "5521991083870"];

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
  ].join("\n");
}

export function whatsappNotificationEnabled(): boolean {
  return Boolean(process.env.EVOLUTION_API_KEY);
}

async function sendToNumber(number: string, apiKey: string, text: string): Promise<boolean> {
  try {
    const response = await fetch(`${EVOLUTION_API_URL}/message/sendText/${EVOLUTION_INSTANCE}`, {
      method: "POST",
      headers: { "Content-Type": "application/json", apikey: apiKey },
      body: JSON.stringify({ number, text }),
      signal: AbortSignal.timeout(8_000),
    });
    if (!response.ok) {
      console.error("[whatsapp] resposta nao ok", number, response.status, await response.text().catch(() => ""));
    }
    return response.ok;
  } catch (err) {
    console.error("[whatsapp] erro no envio", number, err);
    return false;
  }
}

export async function sendWhatsappNotification(payload: DiagnosticFormPayload): Promise<boolean> {
  const apiKey = process.env.EVOLUTION_API_KEY;
  if (!apiKey) return false;

  const text = formatMessage(payload);
  const results = await Promise.all(DESTINATION_NUMBERS.map((number) => sendToNumber(number, apiKey, text)));
  return results.some(Boolean);
}
