import Logo from "../assets/logo.svg";
import "../styles/header.css";

const Header = () => {
  return (
    <>
      <div className="header-container">
        <div className="header">
          <img src={Logo} alt="swansondev logo" className="logo" />
        </div>
      </div>
    </>
  );
};

export default Header;
