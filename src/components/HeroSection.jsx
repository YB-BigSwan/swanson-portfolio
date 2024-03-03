import LinkedInSVG from "../assets/LinkedIn.svg";
import GitHubSVG from "../assets/GitHub.svg";
import ResumeSVG from "../assets/CV.svg";
import pfp from "../assets/pfp-drip.svg";
import "../styles/Homepage.css";

const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="hero-section">
        <div className="hero-text">
          <h1>STEPHEN SWANSON</h1>
          <h3>WEB | SOFTWARE DEVELOPER</h3>
          <div className="links">
            <a href="https://www.linkedin.com/in/stephen-swanson-h/">
              <img src={LinkedInSVG} alt="A link to LinkedIn" />
            </a>
            <a href="https://github.com/YB-BigSwan">
              <img src={GitHubSVG} alt="A link to GitHub" />
            </a>
            <a href="https://www.linkedin.com/in/stephen-swanson-h/">
              <img src={ResumeSVG} alt="A link to Stephen's CV" />
            </a>
          </div>
          <p className="hero-description">
            An aspiring junior full-stack or frontend developer from the United
            States, now living permanently in Helsinki, Finland.
          </p>
          <p className="hero-description">
            I am currently seeking a position that supports curious and
            passionate developers who are hungry to learn more.
          </p>
        </div>
        <div className="hero-image">
          <img className="pfp" src={pfp} alt="A picture of stephen" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
