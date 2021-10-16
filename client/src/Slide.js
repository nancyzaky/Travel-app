import React, { useState } from "react";
import { HiArrowCircleLeft, HiArrowCircleRight } from "react-icons/hi";

const Slide = ({ pics }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((index) => {
      if (index === 0) {
        return pics.length - 1;
      } else {
        return index - 1;
      }
    });
  };
  const handleNext = () => {
    setCurrentIndex((index) => {
      if (index === pics.length - 1) {
        return 0;
      } else {
        return index + 1;
      }
    });
  };
  return (
    <section className="slide">
      <HiArrowCircleLeft className="arrow-left" onClick={handlePrev} />
      <HiArrowCircleRight className="arrow-right" onClick={handleNext} />
      {pics.map((pic, index) => {
        console.log(index, currentIndex);
        return (
          <div
            className={currentIndex === index ? "hide active" : "hide"}
            key={pic.id}
          >
            {index === currentIndex && (
              <img src={pic.url} alt="pic" className="slide-img " />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default Slide;
