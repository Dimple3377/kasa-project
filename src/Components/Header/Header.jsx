import { NavLink } from "react-router-dom";
import logoImage from "../../assets/images/logo.png";

function Header() {
  return (
    <header className="header">
      <img src={logoImage} alt="Logo" className="header-logo" />
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              À propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
