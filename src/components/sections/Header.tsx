import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Container } from "../ui/Container";
import { Logo } from "../ui/Logo";
import { Button } from "../ui/Button";
import { site } from "../../config/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled || open ? "bg-navy-950/85 backdrop-blur-xl ring-1 ring-white/5" : ""}`}>
      <Container className="flex h-16 items-center justify-between lg:h-[72px]">
        <a href="#topo" aria-label="PipeFlow CRM — início"><Logo /></a>
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Principal">
          {site.nav.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-medium text-slate-300 transition-colors hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden lg:block">
          <Button href={site.cta.href} className="!min-h-[42px] !px-5 !py-2 !text-sm">Ativar 75% OFF</Button>
        </div>
        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-lg text-white lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>
      {open && (
        <div id="mobile-menu" className="border-t border-white/5 lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {site.nav.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 text-base font-medium text-slate-200 hover:bg-white/5">
                {item.label}
              </a>
            ))}
            <div className="mt-3" onClick={() => setOpen(false)}>
              <Button href={site.cta.href} className="w-full" arrow>Ativar 75% OFF</Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
