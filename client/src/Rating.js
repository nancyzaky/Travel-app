import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";

const Rating = ({ changeRate }) => {
  const ratingChanged = (newRating) => {
    changeRate(newRating);
  };
  return (
    <ReactStars
      count={5}
      onChange={ratingChanged}
      size={20}
      // filledIcon={0}
      activeColor="#ffd700"
    />
  );
};
export default Rating;
