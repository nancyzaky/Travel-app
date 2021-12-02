import React, { useState } from "react";
import { HiArrowCircleLeft, HiArrowCircleRight } from "react-icons/hi";

const Slide = ({ pics, closePicsModal }) => {
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
    <div
      className="slide-container"
      onClick={(e) => {
        closePicsModal(e);
      }}
    >
      <aside className="slide">
        <HiArrowCircleLeft
          className="arrow-left"
          onClick={handlePrev}
          style={{ top: "50%" }}
        />
        <HiArrowCircleRight
          className="arrow-right"
          onClick={handleNext}
          style={{ top: "50%" }}
        />
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
      </aside>
    </div>
  );
};

export default Slide;
