import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Maximize2, Minimize2, X } from "lucide-react";
import type { Screen } from "../../config/screens";

type Props = { screen: Screen; onClose: () => void };

/**
 * Visualização ampliada de uma captura.
 * - Desktop: abre ajustada à tela; o botão alterna para o tamanho real.
 * - Celular: abre em tamanho legível com rolagem lateral, sem cortar a imagem.
 */
export function Lightbox({ screen, onClose }: Props) {
  const [full, setFull] = useState(() => window.matchMedia("(max-width: 767px)").matches);
  const closeRef = useRef<HTMLButtonElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // No tamanho real, começa pelo lado onde está o conteúdo principal da tela.
  const alignToFocus = () => {
    const el = scrollRef.current;
    if (el && full) el.scrollLeft = screen.focus === "right" ? el.scrollWidth : 0;
  };
  useEffect(alignToFocus, [full, screen.focus]);

  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener("keydown", onKey);
      previous?.focus();
    };
  }, [onClose]);

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={screen.title}
      className="fixed inset-0 z-[100] flex flex-col bg-navy-950/95 backdrop-blur-sm"
      onClick={onClose}
    >
      <div className="flex shrink-0 items-center gap-3 px-4 py-3 sm:px-6" onClick={(e) => e.stopPropagation()}>
        <p className="min-w-0 flex-1 truncate font-display text-sm font-bold text-white sm:text-base">{screen.title}</p>
        <button
          type="button"
          onClick={() => setFull((v) => !v)}
          className="inline-flex h-10 items-center gap-2 rounded-lg bg-white/10 px-3 text-sm font-medium text-white hover:bg-white/15"
        >
          {full ? <Minimize2 className="h-4 w-4" aria-hidden /> : <Maximize2 className="h-4 w-4" aria-hidden />}
          <span>{full ? "Ajustar à tela" : "Tamanho real"}</span>
        </button>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Fechar imagem ampliada"
          className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white hover:bg-white/15"
        >
          <X className="h-5 w-5" aria-hidden />
        </button>
      </div>
      <div ref={scrollRef} className="min-h-0 flex-1 overflow-auto overscroll-contain px-4 pb-4 sm:px-6 sm:pb-6">
        <div className={`flex min-h-full ${full ? "w-max" : "items-center justify-center"}`}>
          <img
            src={screen.src}
            alt={screen.alt}
            width={screen.width}
            height={screen.height}
            onClick={(e) => e.stopPropagation()}
            onLoad={alignToFocus}
            className={`rounded-xl shadow-glow ring-1 ring-white/10 ${
              full ? "h-auto w-[1200px] max-w-none md:w-auto" : "h-auto max-h-full w-auto max-w-full object-contain"
            }`}
            style={full ? undefined : { maxHeight: "calc(100dvh - 88px)" }}
          />
        </div>
      </div>
      <p className="shrink-0 pb-3 text-center text-[11px] text-slate-400 md:hidden">Arraste para os lados para ver a tela inteira</p>
    </div>,
    document.body,
  );
}
