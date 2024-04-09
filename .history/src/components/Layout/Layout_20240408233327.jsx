import PropTypes from "prop-types";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Layout.scss";

function Layout({ children, footerClass }) {
  return (
    <div className="main-container">
      <Header />
      <div className="content">{children}</div>
      <Footer customClass={footerClass} />
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

// Fournir une valeur par défaut pour `footerClass` au cas où elle n'est pas fournie
Layout.defaultProps = {
  footerClass: "",
};

export default Layout;
