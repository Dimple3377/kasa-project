// Layout.jsx
import PropTypes from "prop-types";
import Header from "..Components/Header"; // Assurez-vous d'avoir un composant pour le Header
import Footer from "..Components/Footer"; // Assurez-vous d'avoir un composant pour le Footer

function Layout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Layout;
