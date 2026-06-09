import FloatingBackground from "@/components/FloatingBackground";
import ScrollProgress from "@/components/ScrollProgress";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import BackToTop from "@/components/BackToTop";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <ScrollProgress />
      <CustomCursor />
      <FloatingBackground />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Education />
      <Experience />
      <Projects />
      <Achievements />
      <Skills />
      <Contact />
      <BackToTop />
    </main>
  );
}
