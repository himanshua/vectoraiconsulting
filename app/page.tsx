import Hero from "./components/Hero";
import Services from "./components/Services";
import Process from "./components/Process";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import About from "./components/About";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <About />
      <Process />
      <Contact />
      <Footer />
    </main>
  );
}
