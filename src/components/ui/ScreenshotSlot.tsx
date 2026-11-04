import { ImageIcon } from "lucide-react";
import { BrowserFrame } from "./BrowserFrame";

type Props = {
  /** Caminho da captura real (ex.: "/screenshots/funil.png"). Enquanto vazio, mostra um espaço reservado. */
  src?: string;
  alt: string;
  label: string;
  url?: string;
  aspect?: string;
  tone?: "light" | "dark";
};

/**
 * Espaço reservado para capturas reais do Pipeflow.
 * Para usar: salve a imagem em public/screenshots/ e passe `src`.
 */
export function ScreenshotSlot({ src, alt, label, url = "app.pipeflow.com.br", aspect = "aspect-[16/10]", tone = "light" }: Props) {
  return (
    <BrowserFrame url={url} tone={tone}>
      {src ? (
        <img src={src} alt={alt} loading="lazy" className={`w-full ${aspect} object-cover object-top`} />
      ) : (
        <div
          className={`flex ${aspect} w-full flex-col items-center justify-center gap-3 border-2 border-dashed p-6 text-center ${
            tone === "dark" ? "border-white/10 bg-navy-900 text-slate-400" : "border-brand-100 bg-brand-50/40 text-slate-500"
          }`}
          role="img"
          aria-label={`Espaço reservado: ${alt}`}
        >
          <ImageIcon className="h-8 w-8 text-brand-400" aria-hidden />
          <p className="text-sm font-semibold">{label}</p>
          <p className="text-xs opacity-75">Espaço reservado para captura real do Pipeflow</p>
        </div>
      )}
    </BrowserFrame>
  );
}
