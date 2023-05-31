import NavLinks from "./NavLinks";
import logo from "../images/logo.jpg";
import PageHeader from "../components/PageHeader"
const Header = () => {
  return (
    <header className="header">
      <a href="/">
        <img className="logo" src={logo} alt="Clara Martin' Logo" />
      </a>
      <NavLinks />
    </header >
  );
};

export default Header;
