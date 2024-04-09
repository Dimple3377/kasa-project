import React, { useState } from "react";
import "./Banner.scss";
import leftArrowImg from "../../assets/images/arrowLeft.png";
import rightArrowImg from "../../assets/images/arrowRight.png";

export default function Banner({
  images,
  backgroundUrl,
  title,
  showArrows = false,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  if (images && images.length > 0) {
    return (
      <div className="banner slideshow">
        {showArrows && images.length > 1 && (
          <>
            <button onClick={goToPrevious} className="banner-arrow left">
              <img src={leftArrowImg} alt="Previous" />
            </button>
            <button onClick={goToNext} className="banner-arrow right">
              <img src={rightArrowImg} alt="Next" />
            </button>
          </>
        )}
        <img src={images[currentIndex]} alt="Slide" />
        {title && <h1>{title}</h1>}
      </div>
    );
  }

  return (
    <div
      className="banner"
      style={{ backgroundImage: `url(${backgroundUrl})` }}
    >
      {title && <h1>{title}</h1>}
    </div>
  );
}
