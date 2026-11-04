export function Logo({ tone = "dark" }: { tone?: "light" | "dark" }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400 to-brand-600 shadow-glow" aria-hidden>
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
          <path d="M5 7h14M5 12h10M5 17h5" stroke="white" strokeWidth="2.4" strokeLinecap="round" />
        </svg>
      </span>
      <span className={`font-display text-lg font-extrabold tracking-tight ${tone === "dark" ? "text-white" : "text-navy-900"}`}>
        Pipeflow<span className="text-brand-400"> CRM</span>
      </span>
    </span>
  );
}
