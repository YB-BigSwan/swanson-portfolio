import HeroSection from "../components/HeroSection";
import About from "../components/About";
import Projects from "../components/Projects";
import Endorsements from "../components/Endorsements";
import "../styles/Homepage.css";

function Homepage() {
  return (
    <>
      <HeroSection />
      <About />
      <Projects />
      <Endorsements />
    </>
  );
}

export default Homepage;
