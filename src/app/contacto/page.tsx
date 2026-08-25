import type { Metadata } from "next";
import { DiagnosticPanel } from "@/modules/diagnostic/components/DiagnosticPanel";
import { PageHero } from "@/shared/layout/PageHero";

export const metadata: Metadata = { title: "Contacto", description: "Solicite um diagnóstico à Safe Group." };

export default function ContactPage() {
  const enabled = Boolean(process.env.SAFE_DIAGNOSTIC_WEBHOOK_URL);
  return <><PageHero kicker="Contacto" title="A conversa começa pela operação." copy="Partilhe o contexto atual para identificarmos onde pode estar a maior oportunidade de crescimento, lucro ou eficiência." /><DiagnosticPanel enabled={enabled} /></>;
}
