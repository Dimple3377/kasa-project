import "./Footer.scss";
import logoImage from "../../assets/images/logo_footer.png";

// Ajoutez customClass comme prop ici
function Footer({ customClass }) {
  return (
    <footer className={`footer ${customClass}`}>
      <img src={logoImage} alt="Kasa Logo" className="footer-logo" />
      <p>&copy; {new Date().getFullYear()} Kasa. All rights reserved</p>
    </footer>
  );
}
// Ajout de propTypes pour `customClass`
Footer.propTypes = {
  customClass: PropTypes.string,
};

// Fournir une valeur par défaut pour `customClass`
Footer.defaultProps = {
  customClass: "",
};
export default Footer;
