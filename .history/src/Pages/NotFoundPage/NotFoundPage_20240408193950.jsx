import { Link } from "react-router-dom";
import notFoundImage from "../../assets/images/404.png";
import Footer from "../../Components/Footer/Footer";
import "../../Pages/NotFoundPage/NotFoundPage.scss";
const NotFoundPage = () => {
  return (
    <div className="not-found-page">
      <img
        src={notFoundImage}
        alt="404 Not Found"
        className="not-found-image"
      />
      <p>Oups! La page que vous cherchez n'existe pas.</p>
      <Link to="/">Retourner à la page d'accueil</Link>
      <Footer customClass="not-found-footer" />
    </div>
  );
};

export default NotFoundPage;
