import { Header } from "./components/sections/Header";
import { Hero } from "./components/sections/Hero";
import { Problems } from "./components/sections/Problems";
import { Funnel } from "./components/sections/Funnel";
import { WhatsApp } from "./components/sections/WhatsApp";
import { AI } from "./components/sections/AI";
import { Prospecting } from "./components/sections/Prospecting";
import { Benefits } from "./components/sections/Benefits";
import { Offer } from "./components/sections/Offer";
import { FAQ } from "./components/sections/FAQ";
import { FinalCTA } from "./components/sections/FinalCTA";
import { Footer } from "./components/sections/Footer";

export default function App() {
  return (
    <>
      <a href="#conteudo" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2">
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <Problems />
        <Funnel />
        <WhatsApp />
        <AI />
        <Prospecting />
        <Benefits />
        <Offer />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
