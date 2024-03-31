import React, { useState } from "react";
import PropTypes from "prop-types";
import "./SlideShow.scss";
import leftArrowImage from "../../assets/images/arrowLeft.png";
import rightArrowImage from "../../assets/images/arrowRight.png";

const Slideshow = ({ images }) => {
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
    <div className="slideshow">
      {images.length > 1 && (
        <>
          <button className="left-arrow" onClick={goToPrevious}>
            &lt;
          </button>
          <button className="right-arrow" onClick={goToNext}>
            &gt;
          </button>
        </>
      )}
      <div className="slide-container">
        <img src={images[currentIndex]} alt="Slideshow" />
        {images.length > 1 && (
          <div className="slide-number">{`${currentIndex + 1} / ${
            images.length
          }`}</div>
        )}
      </div>
    </div>
  );
};

Slideshow.propTypes = {
  images: PropTypes.array.isRequired,
};
export default Slideshow;
