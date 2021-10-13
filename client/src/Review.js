import React from "react";
import { FiStar } from "react-icons/fi";

const Review = ({ review }) => {
  return (
    <>
      <li>
        <h3>{review.name} said:</h3>
        <h3>{review.rating}</h3>
        <p>{review.text}</p>
      </li>
    </>
  );
};

export default Review;
