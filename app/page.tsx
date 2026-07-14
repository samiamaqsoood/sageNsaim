import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Intro from "./components/Intro";
import Services from "./components/Services";
import Work from "./components/Work";
import Team from "./components/Team";
import Clients from "./components/Clients";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Marquee />
      <Intro />
      <Work />
      <Services />
      <Team />
      <Clients />
      <CTA />
      <Footer />
    </main>
  );
}
