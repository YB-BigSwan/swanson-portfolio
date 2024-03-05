import { Card, CardContent, Typography, CardMedia } from "@mui/material";
import MapThumbnail from "../assets/project-img/map1.png";
import OmgThumbnail from "../assets/project-img/omg2.png";
import SibaThumbnail from "../assets/project-img/siba2.png";
import YetiThumbnail from "../assets/project-img/yeti1.png";
import "../styles/projects-section.css";

const Projects = () => {
  return (
    <div className="projects-container">
      <h2>Projects</h2>
      <div className="card-container">
        <Card className="project-card">
          <CardMedia
            component="img"
            height={200}
            image={MapThumbnail}
            alt="A photo of a map demo project"
          />
          <CardContent className="card-content">
            <Typography className="card-title">Map Demo</Typography>
            <Typography className="card-description">
              Displays raster tile maps
            </Typography>
            <a
              href="https://github.com/YB-BigSwan/lensor-map"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              See more
            </a>
          </CardContent>
        </Card>

        <Card className="project-card">
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
            <Typography className="card-description">
              BRiDG3 24Hack category winner
            </Typography>
            <a
              href="https://gitlab.com/a-zurcher/omg-fe"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              See more
            </a>
          </CardContent>
        </Card>

        <Card className="project-card">
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
            <Typography className="card-description">
              Scheduling tool for the Sibelius Academy
            </Typography>
            <div className="siba-links">
              <a
                href="https://github.com/haagahelia/siba-fe"
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                See more (FE)
              </a>
              <a
                href="https://github.com/haagahelia/Siba_be"
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                See more (BE)
              </a>
            </div>
          </CardContent>
        </Card>

        <Card className="project-card">
          <CardMedia
            component="img"
            height={200}
            image={YetiThumbnail}
            alt="A photo of a map demo project"
          />
          <CardContent className="card-content">
            <Typography className="card-title">YetiType</Typography>
            <Typography className="card-description">
              A type racing game
            </Typography>
            <a
              href="https://github.com/YB-BigSwan/YetiType"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              See more
            </a>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Projects;
