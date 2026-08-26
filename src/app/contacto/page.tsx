import type { Metadata } from "next";
import { DiagnosticPanel } from "@/modules/diagnostic/components/DiagnosticPanel";
import { PageHero } from "@/shared/layout/PageHero";

export const metadata: Metadata = { title: "Contacto", description: "Partilhe o contexto da sua operação e comece um diagnóstico com a Safe Group." };

export default function ContactPage() {
  const enabled = Boolean(process.env.SAFE_DIAGNOSTIC_WEBHOOK_URL);
  return <><PageHero kicker="Contacto" title="A conversa começa pelo que está a travar a operação." copy="Partilhe o contexto actual. A primeira conversa ajuda a perceber onde pode existir maior potencial de crescimento, margem ou eficiência." /><DiagnosticPanel enabled={enabled} /></>;
}
