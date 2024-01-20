import Logo from "../assets/logo.svg";
import "../styles/Header.css";

function Header() {
  return (
    <>
      <div className="header-container">
        <img src={Logo} alt="swansondev logo" />
        <nav className="nav-container">
          <a href="" className="nav-item">
            Home
          </a>
          <a href="" className="nav-item">
            About
          </a>
          <a href="" className="nav-item">
            Projects
          </a>
          <a href="" className="nav-item">
            Contact
          </a>
          <a href="" className="nav-item">
            Info
          </a>
        </nav>
      </div>
    </>
  );
}

export default Header;
