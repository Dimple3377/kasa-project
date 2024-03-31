import React, { useState } from "react"; // Assurez-vous d'importer useState
import "./Banner.scss";
import leftArrowImg from "../../assets/images/arrowLeft.png";
import rightArrowImg from "../../assets/images/arrowRight.png";

// Cette version de Banner peut accepter soit un backgroundUrl pour une image de fond statique, soit un tableau d'images pour un diaporama
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

  // Si un tableau d'images est fourni, affiche le diaporama
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
}
