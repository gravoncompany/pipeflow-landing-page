import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { Reveal } from "../ui/Reveal";
import { site } from "../../config/site";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-600 via-brand-500 to-navy-700 py-20 lg:py-24">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-70" aria-hidden />
      <Container className="relative text-center">
        <Reveal>
          <h2 className="mx-auto max-w-3xl text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
            Pronto para organizar suas vendas em um só fluxo?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base text-brand-50 sm:text-lg">
            Ative a oferta de {site.offer.discount} {site.offer.period} e comece a usar o Pipeflow com o seu time.
          </p>
          <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <Button href={site.cta.href} variant="white" arrow>{site.cta.primaryLabel}</Button>
            <Button href="#faq" variant="ghost-dark">Tirar dúvidas</Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
