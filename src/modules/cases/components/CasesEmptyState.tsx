export function CasesEmptyState({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`relative overflow-hidden border border-white/15 bg-[#0c0c0d] ${compact ? "min-h-[330px] p-8 sm:p-12" : "min-h-[440px] p-8 sm:p-14"}`}>
      <div aria-hidden className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[var(--safe-red)]/12 blur-[100px]" />
      <div className="relative flex h-full min-h-[inherit] max-w-xl flex-col justify-end">
        <p className="safe-kicker">Cases Safe</p>
        <h3 className="mt-5 text-3xl font-medium sm:text-5xl">Resultados que merecem contexto.</h3>
        <p className="mt-5 text-sm leading-7 text-white/55">A estrutura está pronta para receber projetos reais dos setores automóvel, financeiro, software e SaaS. Cada publicação terá desafio, intervenção e resultados verificáveis.</p>
        <div className="mt-7 flex flex-wrap gap-2" aria-label="Setores previstos">
          {["Automóvel", "Financeiro", "Software", "SaaS"].map((sector) => <span key={sector} className="border border-white/15 px-3 py-2 text-[10px] uppercase tracking-[.14em] text-white/45">{sector}</span>)}
        </div>
      </div>
    </div>
  );
}
