import Logo from "../assets/logo.svg";
import "../styles/Homepage.css";

const Header = () => {
  return (
    <>
      <div className="header-container">
        <div className="header">
          <img src={Logo} alt="swansondev logo" />
        </div>
      </div>
    </>
  );
};

export default Header;
