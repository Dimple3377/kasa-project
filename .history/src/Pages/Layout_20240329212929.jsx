import PropTypes from "prop-types";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer";

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
