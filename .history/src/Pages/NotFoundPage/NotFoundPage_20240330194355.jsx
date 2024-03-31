import { Link } from "react-router-dom";
import "../../Pages/NotFoundPage/NotFoundPage.scss";
const NotFoundPage = () => {
  return (
    <div className="not-found-page">
      <h1>404</h1>
      <p>Oups! La page que vous cherchez n'existe pas.</p>
      <Link to="/">Retourner à la page d'accueil</Link>
    </div>
  );
};

export default NotFoundPage;
