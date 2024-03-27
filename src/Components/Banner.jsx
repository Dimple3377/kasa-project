function Banner({ backgroundUrl, title }) {
  return (
    <div
      className="banner"
      style={{ backgroundImage: `url(${backgroundUrl})` }}
    >
      <h1>{title}</h1>
    </div>
  );
}
