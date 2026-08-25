"use client";

import { FormEvent, useState } from "react";
import { operationSizeOptions, priorityOptions, sectorOptions } from "../data/options";

type Status = "idle" | "sending" | "success" | "error";

export function DiagnosticForm({ enabled }: { enabled: boolean }) {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!enabled || status === "sending") return;
    setStatus("sending");
    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());
    try {
      const response = await fetch("/api/diagnostic", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      if (!response.ok) throw new Error("Falha no envio");
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  const fieldClass = "mt-2 min-h-12 w-full border border-white/15 bg-white/[.035] px-4 text-base text-white placeholder:text-white/25 transition-colors hover:border-white/30 focus:border-[var(--safe-red)] focus:outline-none";

  return (
    <form onSubmit={onSubmit} className="grid gap-6" aria-describedby="form-status">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="text-sm text-white/65">Nome completo<input className={fieldClass} name="name" autoComplete="name" required minLength={2} /></label>
        <label className="text-sm text-white/65">E-mail profissional<input className={fieldClass} name="email" type="email" autoComplete="email" required /></label>
        <label className="text-sm text-white/65">Telefone<input className={fieldClass} name="phone" type="tel" autoComplete="tel" required /></label>
        <label className="text-sm text-white/65">Empresa ou operação<input className={fieldClass} name="company" autoComplete="organization" required /></label>
        <label className="text-sm text-white/65">Setor<select className={fieldClass} name="sector" required defaultValue=""><option value="" disabled>Selecione</option>{sectorOptions.map((option) => <option key={option}>{option}</option>)}</select></label>
        <label className="text-sm text-white/65">Dimensão da operação<select className={fieldClass} name="operationSize" required defaultValue=""><option value="" disabled>Selecione</option>{operationSizeOptions.map((option) => <option key={option}>{option}</option>)}</select></label>
        <label className="text-sm text-white/65">Prioridade atual<select className={fieldClass} name="priority" required defaultValue=""><option value="" disabled>Selecione</option>{priorityOptions.map((option) => <option key={option}>{option}</option>)}</select></label>
      </div>
      <label className="text-sm text-white/65">Contexto da operação<textarea className={`${fieldClass} min-h-32 resize-y py-3`} name="message" maxLength={1500} /></label>
      <label className="absolute -left-[9999px]" aria-hidden="true">Website<input name="website" tabIndex={-1} autoComplete="off" /></label>
      <button type="submit" disabled={!enabled || status === "sending"} className="min-h-11 justify-self-start border border-[var(--safe-red)] bg-[var(--safe-red)] px-[1.15rem] text-[0.8125rem] font-semibold uppercase tracking-[.1em] text-white transition-colors enabled:hover:bg-[#ff1734] disabled:cursor-not-allowed disabled:border-white/15 disabled:bg-white/5 disabled:text-white/35">
        {!enabled ? "Envio disponível em breve" : status === "sending" ? "A enviar" : "Solicitar diagnóstico"}
      </button>
      <p id="form-status" aria-live="polite" className="min-h-6 text-sm text-white/55">
        {!enabled && "A integração do formulário está em preparação. Os dados preenchidos não serão enviados."}
        {status === "success" && "Diagnóstico enviado. A equipa Safe entrará em contacto."}
        {status === "error" && "Não foi possível enviar. Reveja a ligação e tente novamente."}
      </p>
    </form>
  );
}
