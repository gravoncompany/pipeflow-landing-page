import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

type Variant = "primary" | "secondary" | "ghost-dark" | "white";

const styles: Record<Variant, string> = {
  primary:
    "bg-brand-500 text-white shadow-glow hover:bg-brand-400 focus-visible:outline-brand-300",
  secondary:
    "bg-white text-navy-900 ring-1 ring-navy-900/10 hover:ring-navy-900/25 focus-visible:outline-brand-500",
  "ghost-dark":
    "bg-white/5 text-white ring-1 ring-white/15 hover:bg-white/10 focus-visible:outline-white",
  white: "bg-white text-navy-900 hover:bg-brand-50 focus-visible:outline-white",
};

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  arrow?: boolean;
  className?: string;
};

export function Button({ href, children, variant = "primary", arrow = false, className = "" }: ButtonProps) {
  return (
    <a
      href={href}
      className={`group inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl px-6 py-3 text-[15px] font-semibold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[.98] ${styles[variant]} ${className}`}
    >
      {children}
      {arrow && <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />}
    </a>
  );
}
