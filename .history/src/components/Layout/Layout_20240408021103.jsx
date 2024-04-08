import PropTypes from "prop-types";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Layout.scss";

function Layout({ children }) {
  return (
    <div className="main-container">
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
