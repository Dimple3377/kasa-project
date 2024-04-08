import { NavLink } from "react-router-dom";
import logoImage from "../../assets/images/logo.png";

function Header() {
  return (
    <header className="header">
      <img src={logoImage} alt="Logo" className="header-logo" />
      <nav>
        <ul>
          <li>
            <NavLink to="/" exact activeClassName="active">
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active">
              À propos
            </NavLink>
          </li>
          {/* Ajoutez d'autres liens de navigation ici si nécessaire */}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
