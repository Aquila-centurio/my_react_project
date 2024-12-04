import React, { useState } from 'react';
import './Galery.css';

import img1 from '../../../img/galery/1496049278190286060.jpg';
import img2 from '../../../img/galery/qG6IciAGg.webp';
import img3 from '../../../img/galery/розовый-ананас-в-bogor-115450423.webp';

const images = [img1, img2, img3];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section id="Galery" className="gallery">
      <h2 className="gallery-title">Фото</h2>
      <div className="gallery-container">
        <button className="arrow left-arrow" onClick={handlePrev}>
          &#10094;
        </button>
        <img
          src={images[currentIndex]}
          alt={`Gallery ${currentIndex + 1}`}
          className="gallery"
        />
        <button className="arrow right-arrow" onClick={handleNext}>
          &#10095;
        </button>
      </div>
    </section>
  );
};

export default Gallery;
