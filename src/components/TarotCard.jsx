import LinkedInSVG from "../assets/LinkedInSVG";
import GitHubSVG from "../assets/GitHubSVG";
import ResumeSVG from "../assets/ResumeSVG";

function TarotCard() {
  return (
    <>
      <div className="tarot-container">
        <div className="tarot-card"></div>
        <div className="btn-container">
          <LinkedInSVG />
          <GitHubSVG />
          <ResumeSVG />
        </div>
      </div>
    </>
  );
}

export default TarotCard;
