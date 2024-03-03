import Logo from "../assets/logo.svg";
import Button from "@mui/material/Button";
import BurgerIcon from "../assets/burger-menu.svg";
import "../styles/Homepage.css";

const Header = () => {
  return (
    <>
      <div className="header-container">
        <div className="header">
          <img src={Logo} alt="swansondev logo" />
          <Button>
            <img src={BurgerIcon} alt="burger  menu icon" />
          </Button>
        </div>
      </div>
    </>
  );
};

export default Header;
