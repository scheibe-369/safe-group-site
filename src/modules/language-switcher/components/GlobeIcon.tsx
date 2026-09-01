/**
 * Globo com meridiano e paralelos, o simbolo com que a generalidade dos sites
 * marca a troca de idioma. Tracado de 1.5, para acompanhar a espessura dos
 * outros icones da barra.
 */
export function GlobeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a14 14 0 0 1 0 18a14 14 0 0 1 0-18Z" />
    </svg>
  );
}
