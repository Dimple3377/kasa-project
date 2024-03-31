import "./Banner.scss";
import leftArrowImg from "../../assets/images/arrowLeft.png";
import rightArrowImg from "../../assets/images/arrowRight.png";
export default function Banner({ backgroundUrl, title }) {
  return (
    <div
      className="banner"
      style={{ backgroundImage: `url(${backgroundUrl})` }}
    >
      <h1>{title}</h1>
    </div>
  );
}
