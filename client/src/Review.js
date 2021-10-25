import React, { useState, useEffect } from "react";
import { GrStar } from "react-icons/gr";
import { FiEdit } from "react-icons/fi";
import { BsTrash } from "react-icons/bs";

const Review = ({ review, user }) => {
  const [edit, setEdit] = useState(false);
  const [stars, setStars] = useState("");
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
  const handleDelete = (key) => {
    fetch(`/reviews/${key}`, {
      method: "DELETE",
    })
      .then((resp) => resp.json())
      .then((d) => console.log(d));

    setEdit(false);
    setEditedText("");
  };
  const countStar = (num) => {
    let word = "";
    for (let i = 0; i < num; i++) {
      word += "★";
    }
    return word;
  };
  useEffect(() => {
    let allStars = countStar(review.rating);
    setStars(allStars);
  }, []);
  console.log(review, user);
  return (
    <>
      <li className="review-list">
        <h4 className="review-name">{review.name} said:</h4>
        <br></br>
        <h5>{editedText}</h5>
        <h5>{stars}</h5>
        {edit && (
          <form>
            <input
              value={editedText}
              type="text"
              onChange={(e) => {
                setEditedText(e.target.value);
              }}
            ></input>

            {/* Submit Edited post
            </button> */}
          </form>
        )}

        {user.name === review.name && edit && (
          <button
            className="btn"
            onClick={() => {
              handleEditSub(review.id);
            }}
          >
            Submit Edited review
          </button>
        )}
      </li>
      <section>
        <span style={{ float: "right", color: "green" }}>
          <FiEdit onClick={handleEdit} />
        </span>
        <span style={{ float: "right", color: "red" }}>
          <BsTrash
            onClick={() => {
              handleDelete(review.id);
            }}
          />
        </span>
      </section>
    </>
  );
};

export default Review;
