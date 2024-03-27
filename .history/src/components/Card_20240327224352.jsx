function Card({ title, imageUrl, description }) {
  return (
    <div className="card">
      <img src={imageUrl} alt={title} />
      <div className="card-info">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}
