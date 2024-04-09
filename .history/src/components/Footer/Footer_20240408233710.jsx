import "./Footer.scss";
import logoImage from "../../assets/images/logo_footer.png";

// Ajoutez customClass comme prop ici
function Footer({ customClass }) {
  return (
    <footer className={`footer ${customClass}`}>
      {" "}
      {/* Utilisez la prop customClass */}
      <img src={logoImage} alt="Kasa Logo" className="footer-logo" />
      <p>&copy; {new Date().getFullYear()} Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
