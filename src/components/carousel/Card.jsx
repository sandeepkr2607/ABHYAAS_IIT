import React, { useState } from "react";
import "./Card.css";

import course1 from "../../assets/course1.png";
import course2 from "../../assets/course2.png";
import course3 from "../../assets/course3.png";
import course4 from "../../assets/course4.png";
import course5 from "../../assets/course5.png";
import btn from "../../assets/btn.png";

const Card = () => {
  const images = [course1, course2, course3, course4, course5];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 3 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 3 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel">
      <div className="carousel-inner">
        {images.slice(currentIndex, currentIndex + 3).map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${currentIndex + index + 1}`}
            className="carousel-image"
          />
        ))}
      </div>
      <button className="prev-btn" onClick={prevSlide}>
        <img src={btn} alt="" className="prev_btn" />
      </button>
      <button className="next-btn" onClick={nextSlide}>
        <img src={btn} alt="" className="next_btn" />
      </button>
    </div>
  );
};

export default Card;
