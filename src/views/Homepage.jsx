import HeroSection from "../components/HeroSection";
import About from "../components/About";
import Projects from "../components/Projects";
import Endorsements from "../components/Endorsements";
import LangAndTech from "../components/LangAndTech";
import Contact from "../components/Contact";
import "../styles/Homepage.css";

function Homepage() {
  return (
    <>
      <HeroSection />
      <About />
      <Projects />
      <Endorsements />
      <LangAndTech />
      <Contact />
    </>
  );
}

export default Homepage;
