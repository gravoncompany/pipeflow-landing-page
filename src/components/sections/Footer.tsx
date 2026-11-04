import { Container } from "../ui/Container";
import { Logo } from "../ui/Logo";
import { site } from "../../config/site";

export function Footer() {
  return (
    <footer className="bg-navy-950 py-12 text-slate-400">
      <Container className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
        <div>
          <Logo />
          <p className="mt-3 text-sm">Gestão comercial com inteligência artificial.</p>
        </div>
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm" aria-label="Rodapé">
          {site.nav.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-white">{item.label}</a>
          ))}
        </nav>
        <p className="text-xs">© {new Date().getFullYear()} Pipeflow CRM. Todos os direitos reservados.</p>
      </Container>
    </footer>
  );
}
