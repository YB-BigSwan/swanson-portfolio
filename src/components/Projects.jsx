import { Card, CardContent, Typography } from "@mui/material";
import "../styles/Homepage.css";

const Projects = () => {
  return (
    <div className="projects-container">
      <h2>Projects</h2>
      <div className="card-container">
        <Card>
          <CardContent className="card-descripton">
            <Typography>Hello World</Typography>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="card-descripton">
            <Typography>Hello World</Typography>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="card-descripton">
            <Typography>Hello World</Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Projects;
