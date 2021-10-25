import React, { useEffect, useState } from "react";
import Review from "./Review";
import { IoMdClose } from "react-icons/io";

const Modal = ({ room, closeModal, user }) => {
  const [reviews, setReviews] = useState([]);
  const fetchReviews = () => {
    fetch(`/rooms/${room.id}`).then((resp) => {
      if (resp.ok) {
        resp.json().then((d) => {
          console.log(d);
          setReviews(d.reviews);
        });
      } else {
        console.log("error");
      }
    });
  };
  useEffect(() => {
    fetchReviews();
  }, []);
  return (
    <aside className="slide-container">
      <div className="reviews-modal">
        <IoMdClose className="close" onClick={closeModal} />
        <ul claasName="reviews-cont">
          {reviews.map((review) => {
            return <Review key={review.id} review={review} user={user} />;
          })}
        </ul>
      </div>
    </aside>
  );
};

export default Modal;
