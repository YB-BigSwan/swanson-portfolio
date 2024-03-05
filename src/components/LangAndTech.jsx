import NextLogo from "../assets/lt-icon/next.svg";
import GHWhite from "../assets/lt-icon/github-white.svg";
import ExpressLogo from "../assets/lt-icon/express.svg";

import "../styles/lang-tech.css";

const LangAndTech = () => {
  return (
    <div className="lt-container">
      <div className="lt-wrapper">
        <h2>Used Languages</h2>
        <div className="lt-btns">
          <div className="lt-btn">
            <img
              height="40"
              src="https://www.svgrepo.com/show/452228/html-5.svg"
              alt="HTML logo"
              className="lt-svg"
            />
            HTML
          </div>
          <div className="lt-btn">
            <img
              height="40"
              src="https://www.svgrepo.com/show/452185/css-3.svg"
              alt="CSS logo"
              className="lt-svg"
            />
            CSS
          </div>
          <div className="lt-btn">
            <img
              height="40"
              src="https://www.svgrepo.com/show/373705/js-official.svg"
              alt="JS logo"
              className="lt-svg"
            />
            JavaScript
          </div>
          <div className="lt-btn">
            <img
              height="40"
              src="https://www.svgrepo.com/show/354478/typescript-icon.svg"
              alt="TS logo"
              className="lt-svg"
            />
            TypeScript
          </div>
          <div className="lt-btn">
            <img
              height="40"
              src="https://www.svgrepo.com/show/452234/java.svg"
              alt="Java logo"
              className="lt-svg"
            />
            Java
          </div>
          <div className="lt-btn">
            <img
              height="40"
              src="https://www.svgrepo.com/show/374016/python.svg"
              alt="Python logo"
              className="lt-svg"
            />
            Python
          </div>
          <div className="lt-btn">
            <img
              height="40"
              src="https://www.svgrepo.com/show/331760/sql-database-generic.svg"
              alt="SQL logo"
              className="lt-svg"
            />
            SQL
          </div>
        </div>
      </div>

      <div className="lt-wrapper">
        <h2>Leveraged Technologies</h2>
        <div className="lt-btns">
          <div className="lt-btn">
            <img
              height="40"
              src="https://www.svgrepo.com/show/452092/react.svg"
              alt="React logo"
              className="lt-svg"
            />
            React
          </div>
          <div className="lt-btn">
            <img
              height="40"
              src={NextLogo}
              alt="Next logo"
              className="lt-svg"
            />
            Next
          </div>

          <div className="lt-btn">
            <img
              height="40"
              src={ExpressLogo}
              alt="ExpressJS logo"
              className="lt-svg"
            />
            Express
          </div>
          <div className="lt-btn">
            <img
              height="40"
              src="https://www.svgrepo.com/show/452075/node-js.svg"
              alt="NodeJS logo"
              className="lt-svg"
            />
            Node
          </div>
          <div className="lt-btn">
            <img
              height="40"
              src="https://www.svgrepo.com/show/376350/spring.svg"
              alt="Spring logo"
              className="lt-svg"
            />
            Spring (Maven)
          </div>
          <div className="lt-btn">
            <img
              height="40"
              src="https://www.svgrepo.com/show/354037/mariadb-icon.svg"
              alt="MariaDB logo"
              className="lt-svg"
            />
            MariaDB
          </div>
          <div className="lt-btn">
            <img
              height="40"
              src="https://www.svgrepo.com/show/373845/mongo.svg"
              alt="MongoDB logo"
              className="lt-svg"
            />
            MongoDB
          </div>
          <div className="lt-btn">
            <img
              height="40"
              src="https://www.vectorlogo.zone/logos/leafletjs/leafletjs-icon.svg"
              alt="Leaflet logo"
              className="lt-svg"
            />{" "}
            Leaflet
          </div>
          <div className="lt-btn">
            <img height="40" src={GHWhite} alt="GitHub logo" /> GitHub Actions
            CI/CD
          </div>
          <div className="lt-btn">
            <img
              height="40"
              src="https://www.svgrepo.com/show/448226/gitlab.svg"
              alt="GitLab logo"
              className="lt-svg"
            />{" "}
            GitLab CI/CD
          </div>
        </div>
      </div>
    </div>
  );
};
export default LangAndTech;
