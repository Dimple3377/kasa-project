import { Link } from "react-router-dom";
import logoImage from "../../assets/images/logo.png";

function Header() {
  return (
    <header className="header">
      <img src={logoImage} alt="Logo" className="header-logo" />
      <nav>
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>

          <li>
            <Link to="/about">À propos</Link>
          </li>
          {/* Ajoutez d'autres liens de navigation ici si nécessaire */}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
