import { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  Button,
} from "@mui/material";
import GFThumbnail from "../assets/project-img/gf-thumbnail.png";
import OmgThumbnail from "../assets/project-img/omg2.png";
import SibaThumbnail from "../assets/project-img/siba2.png";
import YetiThumbnail from "../assets/project-img/yeti1.png";
import expand from "../assets/expand_more.svg";
import shrink from "../assets/expand_less.svg";
import "../styles/projects-section.css";

const Projects = () => {
  const [expanded, setExpanded] = useState({
    map: false,
    omg: false,
    siba: false,
    yeti: false,
  });

  const toggleExpanded = (card) => {
    setExpanded({
      ...expanded,
      [card]: !expanded[card],
    });
  };

  return (
    <div className="projects-container">
      <h2>Projects</h2>
      <div className="card-container">
        <Card className={`project-card ${expanded.map ? "expanded" : ""}`}>
          <CardMedia
            component="img"
            height={200}
            image={GFThumbnail}
            alt="A photo of a map demo project"
          />
          <CardContent className="card-content">
            <Typography className="card-title">GreenFuture Demo</Typography>
            <Typography className="role-description">
              Role | Frontend Developer, DevOps, Scrum Master, UX/UI Designer
              <br />
              <br />
            </Typography>
            <div className={`content-toggle ${expanded.map ? "expanded" : ""}`}>
              <Typography className="card-description">
                <b>Solve the SDGs Hackathon:</b> This project was made by our
                team for the 48 hour Solve the SDGs hackathon hosted by Aalto
                University. Our challenge was to create a platform that
                addressed SDG 4.7, speifically, to get University students
                involved in sustainable development.
                <br />
                <br />
                During the project, my primary role was as the teams frontend
                developer. In addition to this I also set-up the projects CI/CD
                pipeline to allow the team, including our non-technical member,
                to work together seamlessly.
                <br /> <br />
                Finally, as I was familiar with the pacing of hackathons, I
                assumed the role of a pseudo-Scrum master by organizing the 5
                meetings, maintaining our groups kanban board, facilitating
                communication, and making sure all members of the team
                (frontend, backend, database developer, and copywriter) were on
                the same page.
                <br /> <br />
                You can find more info about this project on GitHub!
              </Typography>
              <a
                href="https://github.com/YB-BigSwan/GreenFuture"
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                GitHub
              </a>
            </div>
            {!expanded.map && (
              <Button
                onClick={() => toggleExpanded("map")}
                variant="text"
                size="small"
                className="card-toggle"
              >
                See more <img src={expand} alt="expand icon" />
              </Button>
            )}
            {expanded.map && (
              <Button
                onClick={() => toggleExpanded("map")}
                variant="text"
                size="small"
                className="card-toggle"
              >
                See less <img src={shrink} alt="shrink icon" />
              </Button>
            )}
          </CardContent>
        </Card>

        <Card className={`project-card ${expanded.omg ? "expanded" : ""}`}>
          <CardMedia
            component="img"
            height={200}
            image={OmgThumbnail}
            alt="A photo of a map demo project"
          />
          <CardContent className="card-content">
            <Typography className="card-title">
              Opiskelijoiden Mielipide Gallup
            </Typography>
            <Typography className="role-description">
              Role | UX/UI Designer, Frontend Developer, DevOps
              <br />
            </Typography>
            <div className={`content-toggle ${expanded.omg ? "expanded" : ""}`}>
              <Typography className="card-description">
                <b>BRiDG3 24Hack Category Winner:</b> In just 24 hours our team
                launched a website that allowed the students at Tampere
                University to find, add, and rate their courses based on
                content, quality, and workload. Students could then search and
                filter to find courses that met their expectations (easiest,
                highest quality, etc).
                <br /> <br />
                You can find more info about this project on GitLab!
              </Typography>
              <a
                href="https://gitlab.com/a-zurcher/omg-fe"
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                GitLab
              </a>
            </div>
            {!expanded.omg && (
              <Button
                onClick={() => toggleExpanded("omg")}
                variant="text"
                size="small"
                className="card-toggle"
              >
                See more <img src={expand} alt="expand icon" />
              </Button>
            )}
            {expanded.omg && (
              <Button
                onClick={() => toggleExpanded("omg")}
                variant="text"
                size="small"
                className="card-toggle"
              >
                See less <img src={shrink} alt="shrink icon" />
              </Button>
            )}
          </CardContent>
        </Card>

        <Card className={`project-card ${expanded.siba ? "expanded" : ""}`}>
          <CardMedia
            component="img"
            height={200}
            image={SibaThumbnail}
            alt="A photo of a map demo project"
          />
          <CardContent className="card-content">
            <Typography className="card-title">
              Sibelius Academy Project
            </Typography>
            <Typography className="role-description">
              Role | UX/UI Designer, Full-Stack Developer
            </Typography>
            <div
              className={`content-toggle ${expanded.siba ? "expanded" : ""}`}
            >
              <Typography className="card-description">
                For a project work course, my classmates and I were tasked with
                refactoring and completing an administrative tool for the
                Sibelius Academy. This was my first time working with a large
                development team within an Agile development framework and was a
                great lesson in collaboration.
                <br /> <br />
                My contributions to the project included designing and
                prototyping, refactoring and building out the frontend,
                implementing import functionality and validation, adding and
                improving CRUD operations, writing unit tests, and more.
                <br /> <br />
                You can find more info about this project on GitHub!
              </Typography>
              <div className="siba-links">
                <a
                  href="https://github.com/haagahelia/siba-fe"
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  GitHub (FE)
                </a>
                <a
                  href="https://github.com/haagahelia/Siba_be"
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  GitHub (BE)
                </a>
              </div>
              <br />
            </div>
            {!expanded.siba && (
              <Button
                onClick={() => toggleExpanded("siba")}
                variant="text"
                size="small"
                className="card-toggle"
              >
                See more <img src={expand} alt="expand icon" />
              </Button>
            )}
            {expanded.siba && (
              <Button
                onClick={() => toggleExpanded("siba")}
                variant="text"
                size="small"
                className="card-toggle"
              >
                See less <img src={shrink} alt="shrink icon" />
              </Button>
            )}
          </CardContent>
        </Card>

        <Card className={`project-card ${expanded.yeti ? "expanded" : ""}`}>
          <CardMedia
            component="img"
            height={200}
            image={YetiThumbnail}
            alt="A photo of a map demo project"
          />
          <CardContent className="card-content">
            <Typography className="card-title">YetiType</Typography>
            <Typography className="role-description">
              Role | Full-Stack Developer
              <br />
              <br />
            </Typography>
            <div
              className={`content-toggle ${expanded.yeti ? "expanded" : ""}`}
            >
              <Typography className="card-description">
                YetiType is a typing racing game inspired by MonkeyType, with a
                fun frosty twist. This was my final project for a backend
                development course. I decided to develop a type racing game that
                uses code snippets, aiming to improve my typing speed while
                incorporating special characters.
                <br /> <br />
                For this project I created a backend in Java that retrives
                random words or code snippets from a MongoDB database. It then
                provides an API endpoint for the frontend.
                <br /> <br />
                The frontend displays the list of words and tracks time and user
                input to determine words per minute (WPM), accuracy, characters
                typed, characters missed, etc.
                <br /> <br />
                You can find more info about this project on GitHub!
              </Typography>
              <a
                href="https://github.com/YB-BigSwan/YetiType"
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                GitHub
              </a>
            </div>
            {!expanded.yeti && (
              <Button
                onClick={() => toggleExpanded("yeti")}
                variant="text"
                size="small"
                className="card-toggle"
              >
                See more <img src={expand} alt="expand icon" />
              </Button>
            )}
            {expanded.yeti && (
              <Button
                onClick={() => toggleExpanded("yeti")}
                variant="text"
                size="small"
                className="card-toggle"
              >
                See less <img src={shrink} alt="shrink icon" />
              </Button>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Projects;
