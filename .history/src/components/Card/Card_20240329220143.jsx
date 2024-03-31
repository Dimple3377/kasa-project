import { Link } from 'react-router-dom';
import "./Card.scss";
export default function Card({ title, imageUrl, description }) {
  return (
    <Link to={`/shop/${id}`} className="card-link"></Link>
    <div className="card">
      <img src={imageUrl} alt={title} />
      <div className="card-info">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
    </Link>
  );
}
