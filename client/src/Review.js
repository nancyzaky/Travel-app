import React, { useState } from "react";
import { FiStar } from "react-icons/fi";

const Review = ({ review, user }) => {
  const [edit, setEdit] = useState(false);
  const [editedText, setEditedText] = useState(review.text);
  const handleEdit = (key) => {
    setEdit(true);
  };
  const handleEditSub = (key) => {
    fetch(`/reviews/${key}`, {
      method: "PATCH",
      body: JSON.stringify({ text: editedText }),
      headers: { "Content-Type": "application/json" },
    })
      .then((resp) => resp.json())
      .then((d) => console.log(d));

    setEdit(false);
  };
  console.log(review, user);
  return (
    <>
      <li>
        <h3>{review.name} said:</h3>
        <h3>{review.rating}</h3>
        {edit && (
          <form>
            <input
              value={editedText}
              type="text"
              onChange={(e) => {
                setEditedText(e.target.value);
              }}
            ></input>
            <button
              className="btn"
              onClick={() => {
                handleEditSub(review.id);
              }}
            >
              Submit Edited post
            </button>
          </form>
        )}
        <p>{editedText}</p>
        {user.name === review.name && (
          <button className="btn" onClick={handleEdit}>
            Edit review
          </button>
        )}
      </li>
    </>
  );
};

export default Review;
