import LinkedInSVG from "../assets/link-logo/LinkedIn.svg";
import GitHubSVG from "../assets/link-logo/GitHub.svg";
import ResumeSVG from "../assets/link-logo/CV.svg";
import pfpDrip from "../assets/pfp-drip.svg";
import pfpImg from "../assets/pfp-img.png";
import SwansonCV from "../assets/Stephen_Swanson_CV.pdf";
import "../styles/hero-section.css";

const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="hero-section">
        <div className="hero-text">
          <h1>STEPHEN SWANSON</h1>

          <p className="job-title">WEB | SOFTWARE DEVELOPER</p>

          <div className="links">
            <a
              href="https://www.linkedin.com/in/stephen-swanson-h/"
              target="_blank"
              rel="noreferrer"
              className="hero-link"
            >
              <img
                src={LinkedInSVG}
                alt="A link to LinkedIn"
                className="link-img"
              />
            </a>

            <a
              href="https://github.com/YB-BigSwan"
              target="_blank"
              rel="noreferrer"
              className="hero-link"
            >
              <img
                src={GitHubSVG}
                alt="A link to GitHub"
                className="link-img"
              />
            </a>

            <a
              href={SwansonCV}
              download="Stephen_Swanson_CV.pdf"
              className="hero-link"
            >
              <img
                src={ResumeSVG}
                alt="A link to Stephen's CV"
                className="link-img"
              />
            </a>
          </div>

          <p className="hero-description">
            An aspiring junior full-stack or frontend developer from the United
            States, now living permanently in Helsinki, Finland.
          </p>

          <p className="hero-description">
            I am currently seeking a position where I can challenge myself and
            continue to grow as a developer.
          </p>
        </div>

        <div className="hero-image">
          <img className="pfp" src={pfpDrip} alt="A profile picture banner" />
          <img
            className="profile-pic"
            src={pfpImg}
            alt="A picture of stephen"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
