"use client";

import { FormEvent, useState } from "react";
import { Check } from "lucide-react";
import { submitDiagnostic } from "@/modules/diagnostic/api/submit-diagnostic";
import { operationSizeOptions, priorityOptions, sectorOptions } from "@/modules/diagnostic/data/options";
import { diagnosticSchema } from "@/modules/diagnostic/schemas/diagnostic-schema";
import { ArrowIcon } from "@/shared/ui/ArrowIcon";
import { closingSectionContent } from "../data/content";
import type { ClosingSectionContent, ClosingSectionField } from "../types";
import { ClosingFooter } from "./ClosingFooter";
import { FloatingField, FloatingSelect, FloatingTextarea, groupHeader } from "./FormFields";
import { Reveal } from "./Reveal";
import { VerticalMarquee } from "./VerticalMarquee";

type Status = "idle" | "sending" | "success" | "error";

export type ClosingSectionProps = {
  /** Falso enquanto SAFE_DIAGNOSTIC_WEBHOOK_URL nao estiver definido. */
  enabled: boolean;
  /** Ano do copyright. Vem do servidor para nao divergir na hidratacao. */
  year: number;
  content?: ClosingSectionContent;
};

/**
 * Fecho da Home, em duas colunas separadas por uma vertical.
 *
 *   +---------------------------+------------------+
 *   | sobretitulo               |                  |
 *   | titulo      | descricao   |  wordmark grande |
 *   |---------------------------|                  |
 *   | formulario em duas colunas|------------------|
 *   |                           | redes | navegacao|
 *   |                           |------------------|
 *   |                           | barra legal      |
 *   +---------------------------+------------------+
 *
 * A coluna direita faz o trabalho do rodape nesta pagina, por isso o
 * `SiteFooter` global fica escondido na Home pelo `SiteFooterSlot`. O carrossel
 * so aparece a partir de `lg`: em coluna estreita seria ruido.
 *
 * A margem horizontal sai do eixo unico do site (`safe-container`), nunca de
 * uma escala interna. O ritmo vertical e mais apertado do que o `safe-section`
 * porque a seccao carrega um formulario.
 */
export function ClosingSection({ enabled, year, content = closingSectionContent }: ClosingSectionProps) {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Partial<Record<ClosingSectionField, string>>>({});
  const labels = content.form.labels;
  const sending = status === "sending";

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!enabled || sending) return;

    const form = event.currentTarget;
    const parsed = diagnosticSchema.safeParse(Object.fromEntries(new FormData(form).entries()));

    if (!parsed.success) {
      const found: Partial<Record<ClosingSectionField, string>> = {};
      for (const issue of parsed.error.issues) {
        const field = issue.path[0] as ClosingSectionField;
        if (field in content.form.errors && !found[field]) found[field] = content.form.errors[field];
      }
      setErrors(found);
      setStatus("idle");
      return;
    }

    setErrors({});
    setStatus("sending");
    if (await submitDiagnostic(parsed.data)) {
      form.reset();
      setStatus("success");
    } else {
      setStatus("error");
    }
  }

  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-[#070707] py-16 lg:py-20">
      <div aria-hidden className="safe-red-line absolute inset-x-0 top-0 h-px" />
      <div aria-hidden className="pointer-events-none absolute -bottom-40 -left-40 h-[520px] w-[720px] rounded-full bg-[rgba(227,6,36,.09)] blur-[150px]" />

      <div className="safe-container relative z-10">
        <div className="grid lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
          {/* Coluna esquerda: discurso e formulario */}
          <div className="lg:pr-12 xl:pr-16">
            <Reveal>
              <p className="safe-kicker">{content.kicker}</p>
            </Reveal>

            <div className="mt-6 grid gap-7 2xl:grid-cols-2 2xl:gap-12">
              <Reveal delay={0.05}>
                <h2 className="text-3xl font-semibold leading-[1.02] tracking-[-.04em] text-white sm:text-4xl 2xl:text-5xl">
                  {content.titleLine1}
                  <br />
                  <span className="relative inline-block">
                    {/* Halo vermelho por tras do texto metalico. Vive numa camada propria
                        porque aplicar blur sobre o proprio bg-clip-text mataria o gradiente. */}
                    <span aria-hidden className="absolute inset-0 -z-10 blur-2xl" style={{ color: "rgba(227,6,36,.45)" }}>
                      {content.titleAccent}
                    </span>
                    <span className="safe-metallic">{content.titleAccent}</span>
                  </span>{" "}
                  {content.titleLine3}
                </h2>
              </Reveal>

              <div>
                <Reveal delay={0.1}>
                  <p className="max-w-xl text-sm leading-7 text-white/55 lg:text-base">
                    {content.descA}
                    <strong className="font-medium text-white">{content.descStrong}</strong>
                    {content.descB}
                  </p>
                </Reveal>
                <Reveal delay={0.15}>
                  <ul className="mt-5 flex flex-col gap-2 sm:grid sm:grid-cols-2 sm:gap-x-8 2xl:flex 2xl:flex-col">
                    {content.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-2.5">
                        <Check className="mt-[.3rem] h-3.5 w-3.5 shrink-0 text-[var(--safe-red)]" strokeWidth={2.5} aria-hidden />
                        <span className="text-sm leading-6 text-white/55">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>
            </div>

            <div className="mt-10 border-t border-white/10 lg:mt-12" />

            <div className="mt-10 lg:mt-12">
              {status === "success" ? (
                <Reveal>
                  <div className="flex min-h-[200px] flex-col items-start justify-center">
                    <span className="flex h-12 w-12 items-center justify-center border border-[rgba(227,6,36,.45)] bg-[rgba(227,6,36,.08)]">
                      <Check className="h-5 w-5 text-[var(--safe-red)]" strokeWidth={2} aria-hidden />
                    </span>
                    <h3 className="mt-6 text-3xl font-semibold tracking-[-.03em] text-white sm:text-4xl">{content.form.successTitle}</h3>
                    <p className="mt-3 max-w-md leading-7 text-white/55">{content.form.successDesc}</p>
                  </div>
                </Reveal>
              ) : (
                <Reveal delay={0.2}>
                  <form onSubmit={onSubmit} noValidate aria-describedby="closing-form-status">
                    <div className="grid gap-x-10 gap-y-10 md:grid-cols-2">
                      <div>
                        <h3 className={groupHeader}>{content.contactHeader}</h3>
                        <div className="space-y-5">
                          <FloatingField id="closing-name" name="name" type="text" autoComplete="name" label={labels.name} error={errors.name} disabled={sending} />
                          <FloatingField id="closing-phone" name="phone" type="tel" autoComplete="tel" label={labels.phone} error={errors.phone} disabled={sending} />
                          <FloatingField id="closing-email" name="email" type="email" autoComplete="email" label={labels.email} error={errors.email} disabled={sending} />
                          <FloatingField id="closing-company" name="company" type="text" autoComplete="organization" label={labels.company} error={errors.company} disabled={sending} />
                        </div>
                      </div>

                      <div>
                        <h3 className={groupHeader}>{content.operationHeader}</h3>
                        <div className="space-y-5">
                          <FloatingSelect id="closing-sector" name="sector" label={labels.sector} options={sectorOptions} placeholder={content.form.selectPlaceholder} error={errors.sector} disabled={sending} />
                          <FloatingSelect id="closing-size" name="operationSize" label={labels.operationSize} options={operationSizeOptions} placeholder={content.form.selectPlaceholder} error={errors.operationSize} disabled={sending} />
                          <FloatingSelect id="closing-priority" name="priority" label={labels.priority} options={priorityOptions} placeholder={content.form.selectPlaceholder} error={errors.priority} disabled={sending} />
                          {/* O contexto vive nesta coluna, e nao numa linha propria, para
                              equilibrar as duas alturas e nao alongar a seccao. */}
                          <FloatingTextarea id="closing-message" name="message" label={labels.message} error={errors.message} disabled={sending} />
                        </div>
                      </div>
                    </div>

                    <label className="absolute -left-[9999px]" aria-hidden="true">
                      Website<input name="website" tabIndex={-1} autoComplete="off" />
                    </label>

                    <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
                      <button
                        type="submit"
                        disabled={!enabled || sending}
                        className="group inline-flex min-h-11 items-center justify-center gap-2.5 border border-[var(--safe-red)] bg-[var(--safe-red)] px-[1.15rem] text-[0.8125rem] font-semibold uppercase tracking-[.1em] text-white transition-colors duration-300 enabled:hover:bg-[#ff1734] disabled:cursor-not-allowed disabled:border-white/15 disabled:bg-white/5 disabled:text-white/35">
                        {!enabled ? content.form.disabled : sending ? content.form.submitting : content.form.submit}
                        <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </button>
                      <span className="text-xs text-white/40">{content.submitHint}</span>
                    </div>

                    <p id="closing-form-status" aria-live="polite" className="mt-4 min-h-6 text-sm text-white/55">
                      {!enabled && content.form.disabledNotice}
                      {enabled && status === "error" && content.form.errorMessage}
                    </p>
                  </form>
                </Reveal>
              )}
            </div>
          </div>

          {/* Coluna direita: wordmark e rodape da pagina */}
          <div className="mt-14 flex flex-col border-t border-white/10 pt-12 lg:mt-0 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0 xl:pl-16">
            <div className="relative hidden h-72 overflow-hidden lg:block xl:h-80 2xl:h-96">
              <VerticalMarquee />
            </div>
            <div className="lg:mt-auto lg:pt-16">
              <ClosingFooter content={content} year={year} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
