import { useEffect, useRef, useState } from "react";
import { Check, Copy } from "lucide-react";

async function copyText(text: string) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    // Fallback para navegadores sem Clipboard API (ou sem permissão).
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.setAttribute("readonly", "");
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    let ok = false;
    try {
      ok = document.execCommand("copy");
    } catch {
      ok = false;
    }
    ta.remove();
    return ok;
  }
}

type Props = { code: string; tone?: "light" | "dark"; size?: "md" | "sm" };

/** Código do cupom com botão "Copiar cupom". Se a cópia falhar, o código continua visível e selecionável. */
export function CopyCoupon({ code, tone = "dark", size = "md" }: Props) {
  const [state, setState] = useState<"idle" | "copied" | "failed">("idle");
  const timer = useRef<number>();
  useEffect(() => () => window.clearTimeout(timer.current), []);

  const onCopy = async () => {
    const ok = await copyText(code);
    setState(ok ? "copied" : "failed");
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setState("idle"), 2500);
  };

  const dark = tone === "dark";
  const sm = size === "sm";
  return (
    <div className={`flex items-stretch gap-2 ${sm ? "" : "flex-col sm:flex-row"}`}>
      <div
        className={`flex flex-1 items-center justify-center rounded-xl border-2 border-dashed font-mono font-bold tracking-[.18em] select-all ${
          sm ? "min-h-[44px] px-3 text-sm" : "min-h-[52px] px-5 text-lg"
        } ${dark ? "border-brand-400/60 bg-white/5 text-white" : "border-brand-300 bg-brand-50 text-navy-900"}`}
        aria-label={`Código do cupom: ${code}`}
      >
        {code}
      </div>
      <button
        type="button"
        onClick={onCopy}
        className={`inline-flex shrink-0 items-center justify-center gap-2 rounded-xl font-semibold transition active:scale-[.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
          sm ? "min-h-[44px] px-3 text-sm" : "min-h-[52px] px-5 text-[15px]"
        } ${
          state === "copied"
            ? "bg-emerald-500 text-white focus-visible:outline-emerald-400"
            : dark
              ? "bg-white text-navy-900 hover:bg-brand-50 focus-visible:outline-white"
              : "bg-navy-900 text-white hover:bg-navy-700 focus-visible:outline-brand-500"
        }`}
      >
        {state === "copied" ? <Check className="h-4 w-4" aria-hidden /> : <Copy className="h-4 w-4" aria-hidden />}
        {state === "copied" ? "Cupom copiado!" : "Copiar cupom"}
      </button>
      <span className="sr-only" role="status" aria-live="polite">
        {state === "copied" ? `Cupom ${code} copiado` : state === "failed" ? `Não foi possível copiar. Selecione o código ${code}` : ""}
      </span>
      {state === "failed" && !sm && (
        <p className={`text-xs ${dark ? "text-amber-300" : "text-amber-700"} sm:hidden`}>Não foi possível copiar. Selecione e copie o código manualmente.</p>
      )}
    </div>
  );
}
