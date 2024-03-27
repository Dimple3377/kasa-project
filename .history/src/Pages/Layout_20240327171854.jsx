// Layout.jsx
import Header from "./Header"; // Assurez-vous d'avoir un composant pour le Header
import Footer from "./Footer"; // Assurez-vous d'avoir un composant pour le Footer

function Layout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
