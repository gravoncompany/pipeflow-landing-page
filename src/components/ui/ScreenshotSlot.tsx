import { useState } from "react";
import { ZoomIn } from "lucide-react";
import { BrowserFrame } from "./BrowserFrame";
import { Lightbox } from "./Lightbox";
import type { Screen } from "../../config/screens";

type Props = {
  screen: Screen;
  tone?: "light" | "dark";
  /** Use em imagens visíveis no primeiro carregamento (ex.: hero). */
  priority?: boolean;
  className?: string;
};

/**
 * Captura real do Pipeflow, exibida inteira (sem cortes e com a proporção original).
 * Ao clicar, abre a versão ampliada.
 */
export function ScreenshotSlot({ screen, tone = "light", priority = false, className = "" }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <figure className={className}>
      <BrowserFrame title={screen.title} tone={tone}>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="group relative block w-full cursor-zoom-in focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-brand-400"
          aria-label={`Ampliar imagem: ${screen.title}`}
        >
          <img
            src={screen.src}
            alt={screen.alt}
            width={screen.width}
            height={screen.height}
            loading={priority ? "eager" : "lazy"}
            fetchPriority={priority ? "high" : "auto"}
            decoding="async"
            className="block h-auto w-full bg-slate-100"
            style={{ aspectRatio: `${screen.width} / ${screen.height}` }}
          />
          <span className="pointer-events-none absolute bottom-3 right-3 hidden items-center gap-1.5 rounded-full bg-navy-950/80 px-3 py-1.5 text-xs font-semibold text-white opacity-0 shadow-lg ring-1 ring-white/10 backdrop-blur transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100 sm:inline-flex">
            <ZoomIn className="h-3.5 w-3.5" aria-hidden />
            Ampliar
          </span>
        </button>
      </BrowserFrame>
      <figcaption className={`mt-3 flex items-center justify-center gap-1.5 text-center text-xs ${tone === "dark" ? "text-slate-400" : "text-slate-500"}`}>
        <ZoomIn className="h-3.5 w-3.5 shrink-0" aria-hidden />
        <span>
          {screen.title} · <span className="sm:hidden">toque</span>
          <span className="hidden sm:inline">clique</span> para ampliar
        </span>
      </figcaption>
      {open && <Lightbox screen={screen} onClose={() => setOpen(false)} />}
    </figure>
  );
}
