import HeroSection from "../components/HeroSection";
import About from "../components/About";
import Projects from "../components/Projects";
import LangAndTech from "../components/LangAndTech";
import Contact from "../components/Contact";

function Homepage() {
  return (
    <>
      <HeroSection />
      <About />
      <Projects />
      <LangAndTech />
      <Contact />
    </>
  );
}

export default Homepage;
