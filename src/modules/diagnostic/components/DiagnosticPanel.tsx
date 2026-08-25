import { DiagnosticForm } from "./DiagnosticForm";

export function DiagnosticPanel({ enabled }: { enabled: boolean }) {
  return (
    <section className="safe-section bg-[#090909]">
      <div className="safe-container grid gap-12 lg:grid-cols-[.75fr_1.25fr] lg:gap-20">
        <div>
          <p className="safe-kicker">Diagnóstico Safe</p>
          <h2 className="mt-5 text-4xl font-semibold leading-[.98] tracking-[-.045em] sm:text-6xl">Comece pelo ponto que mais pode mudar a operação.</h2>
          <p className="mt-7 max-w-lg leading-7 text-white/55">Partilhe o contexto atual. A primeira conversa serve para entender a operação e avaliar onde existe maior potencial de crescimento, lucro ou eficiência.</p>
        </div>
        <DiagnosticForm enabled={enabled} />
      </div>
    </section>
  );
}
