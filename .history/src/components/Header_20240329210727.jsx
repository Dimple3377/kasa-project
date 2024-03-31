import { Link } from "react-router-dom";

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
            <Link to="/shop">Boutique</Link>
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
