import { Card, CardContent, Typography } from "@mui/material";
import "../styles/Homepage.css";

const Endorsements = () => {
  return (
    <div className="endorsements-container">
      <h2>Endorsements</h2>

      <div className="card-container">
        <Card>
          <CardContent className="card-descripton">
            <Typography>Hello World</Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Endorsements;