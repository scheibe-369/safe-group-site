import { NextResponse } from "next/server";
import { sendWhatsappNotification, whatsappNotificationEnabled } from "@/modules/diagnostic/api/send-whatsapp-notification";
import { diagnosticSchema } from "@/modules/diagnostic/schemas/diagnostic-schema";

export async function POST(request: Request) {
  if (!whatsappNotificationEnabled()) return NextResponse.json({ error: "Integração indisponível" }, { status: 503 });

  const requestOrigin = request.headers.get("origin");
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  if (process.env.NODE_ENV === "production" && siteUrl) {
    try {
      if (!requestOrigin || new URL(requestOrigin).origin !== new URL(siteUrl).origin) {
        return NextResponse.json({ error: "Origem inválida" }, { status: 403 });
      }
    } catch {
      return NextResponse.json({ error: "Origem inválida" }, { status: 403 });
    }
  }

  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > 20_000) return NextResponse.json({ error: "Pedido demasiado grande" }, { status: 413 });

  let body: unknown;
  try { body = await request.json(); } catch { return NextResponse.json({ error: "Pedido inválido" }, { status: 400 }); }
  const parsed = diagnosticSchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ error: "Dados inválidos" }, { status: 400 });
  if (parsed.data.website) return NextResponse.json({ ok: true });

  const sent = await sendWhatsappNotification(parsed.data);
  if (!sent) return NextResponse.json({ error: "Destino indisponível" }, { status: 502 });

  return NextResponse.json({ ok: true });
}
