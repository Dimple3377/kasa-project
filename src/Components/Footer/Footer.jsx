import "./Footer.scss";
import logoImage from "../../assets/images/logo_footer.png";
function Footer() {
  return (
    <footer className="footer">
      <img src={logoImage} alt="Kasa Logo" className="footer-logo" />
      <p>&copy; {new Date().getFullYear()} Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
