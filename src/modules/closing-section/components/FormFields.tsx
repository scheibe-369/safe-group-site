/**
 * Campos com rotulo flutuante, em CSS puro.
 *
 * O truque é o `placeholder=" "`: o `:placeholder-shown` so vale enquanto o
 * campo esta mesmo vazio, por isso o rotulo sobe e desce sem estado em React.
 */

const fieldBase =
  "peer block w-full border-b border-white/15 bg-transparent pt-6 pb-2 text-base text-white placeholder-transparent transition-colors duration-300 hover:border-white/30 focus:border-[var(--safe-red)] disabled:opacity-50";

const labelBase =
  "pointer-events-none absolute left-0 top-0 text-[10px] uppercase tracking-[.2em] text-white/40 transition-all duration-300 " +
  "peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-placeholder-shown:text-white/35 " +
  "peer-focus:top-0 peer-focus:text-[10px] peer-focus:uppercase peer-focus:tracking-[.2em] peer-focus:text-[var(--safe-red)]";

const staticLabel =
  "pointer-events-none absolute left-0 top-0 text-[10px] uppercase tracking-[.2em] text-white/40";

export const groupHeader =
  "mb-8 border-b border-white/10 pb-3 text-[11px] uppercase tracking-[.18em] text-white/45";

type BaseProps = {
  id: string;
  name: string;
  label: string;
  error?: string;
  disabled?: boolean;
};

function FieldError({ id, error }: { id: string; error?: string }) {
  if (!error) return null;
  return (
    <p id={`${id}-error`} className="mt-2 text-xs text-[#ff6b7a]">
      {error}
    </p>
  );
}

export function FloatingField({ id, name, label, type, autoComplete, error, disabled }: BaseProps & { type: string; autoComplete?: string }) {
  return (
    <div className="relative">
      <input
        id={id}
        name={name}
        type={type}
        autoComplete={autoComplete}
        placeholder=" "
        disabled={disabled}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className={fieldBase}
      />
      <label htmlFor={id} className={labelBase}>{label}</label>
      <FieldError id={id} error={error} />
    </div>
  );
}

export function FloatingTextarea({ id, name, label, rows = 4, error, disabled }: BaseProps & { rows?: number }) {
  return (
    <div className="relative">
      <textarea
        id={id}
        name={name}
        rows={rows}
        placeholder=" "
        disabled={disabled}
        maxLength={1500}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`${fieldBase} resize-none`}
      />
      <label htmlFor={id} className={labelBase}>{label}</label>
      <FieldError id={id} error={error} />
    </div>
  );
}

export function FloatingSelect({ id, name, label, options, placeholder, error, disabled }: BaseProps & { options: readonly string[]; placeholder: string }) {
  return (
    <div className="relative">
      <select
        id={id}
        name={name}
        defaultValue=""
        disabled={disabled}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`${fieldBase} appearance-none pr-8`}
      >
        <option value="" disabled className="bg-[#0b0b0b]">{placeholder}</option>
        {options.map((option) => (
          <option key={option} value={option} className="bg-[#0b0b0b]">{option}</option>
        ))}
      </select>
      {/* O select nao tem :placeholder-shown, por isso o rotulo fica sempre em cima. */}
      <label htmlFor={id} className={staticLabel}>{label}</label>
      <svg aria-hidden viewBox="0 0 20 20" fill="none" className="pointer-events-none absolute right-1 bottom-3 h-4 w-4 text-white/40">
        <path d="M5 8l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <FieldError id={id} error={error} />
    </div>
  );
}
