import { MessageCircle } from "lucide-react";
import { Container } from "../ui/Container";
import { Logo } from "../ui/Logo";
import { site } from "../../config/site";

export function Footer() {
  return (
    <footer className="bg-navy-950 text-slate-400">
      <Container className="grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr] md:gap-12">
        <div>
          <a href="#topo" aria-label="PipeFlow CRM — voltar ao início">
            <Logo size="lg" />
          </a>
          <p className="mt-4 max-w-sm text-sm leading-relaxed">{site.description}</p>
        </div>

        <nav aria-label="Seções da página">
          <p className="font-display text-sm font-bold text-white">Navegação</p>
          <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5 text-sm md:grid-cols-1">
            {site.footerNav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="transition-colors hover:text-white">{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="font-display text-sm font-bold text-white">Fale com a gente</p>
          <a
            href={site.whatsapp.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex min-h-[44px] items-center gap-2.5 rounded-xl bg-white/5 px-4 py-2.5 text-sm font-semibold text-white ring-1 ring-white/10 transition hover:bg-white/10"
          >
            <MessageCircle className="h-4 w-4 text-emerald-400" aria-hidden />
            WhatsApp {site.whatsapp.label}
          </a>
        </div>
      </Container>
      <div className="border-t border-white/5">
        <Container className="flex flex-col items-center justify-between gap-2 py-6 text-center text-xs sm:flex-row sm:text-left">
          <p>© {new Date().getFullYear()} PipeFlow CRM. Todos os direitos reservados.</p>
          <p>
            Desenvolvido pela <span className="font-semibold text-slate-200">{site.developer}</span>
          </p>
        </Container>
      </div>
    </footer>
  );
}
