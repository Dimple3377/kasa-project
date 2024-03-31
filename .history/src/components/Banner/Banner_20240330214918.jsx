import React, { useState } from "react"; // Ajout de l'importation de useState
import "./Banner.scss";
import leftArrowImg from "../../assets/images/arrowLeft.png";
import rightArrowImg from "../../assets/images/arrowRight.png";

const Banner = ({ images, showArrows = false }) => {
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

  return (
    <div className="banner">
      {showArrows && images && images.length > 1 && (
        <>
          <button onClick={goToPrevious} className="banner-arrow left">
            <img src={leftArrowImg} alt="Previous" />
          </button>
          <button onClick={goToNext} className="banner-arrow right">
            <img src={rightArrowImg} alt="Next" />
          </button>
        </>
      )}
      {images && images.length > 0 && (
        <img src={images[currentIndex]} alt="Banner" className="banner-image" />
      )}
    </div>
  );
};

export default Banner;
