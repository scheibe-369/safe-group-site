export function DiagonalArrow({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 12 12" fill="none" className={className}>
      <path d="M2 10 10 2M4 2h6v6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="square" />
    </svg>
  );
}
