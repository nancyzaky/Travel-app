import React, { useState, useEffect } from "react";
import { GrStar } from "react-icons/gr";
import { FiEdit } from "react-icons/fi";
import { BsTrash } from "react-icons/bs";

const Review = ({ review, user, changeReviews }) => {
  const [edit, setEdit] = useState(false);
  const [stars, setStars] = useState("");
  const [editedText, setEditedText] = useState(review.text);
  const handleEdit = (key) => {
    setEdit(true);
  };
  const handleEditSub = (key) => {
    fetch(`/api/reviews/${key}`, {
      method: "PATCH",
      body: JSON.stringify({ text: editedText }),
      headers: { "Content-Type": "application/json" },
    })
      .then((resp) => resp.json())
      .then((d) => console.log(d));

    setEdit(false);
  };
  const handleDelete = (key) => {
    changeReviews(key);
    console.log(key);
    fetch(`/api/reviews/${key}`, {
      method: "DELETE",
    })
      .then((resp) => resp.json())
      .then((d) => console.log(d));
    setEdit(false);
    // setEditedText("");
    // setStars("");
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
      <section className="text">
        <h4 className="review-name">{review.name} said:</h4>

        <h5 style={{ color: "orange" }}>{stars}</h5>
        <section
          style={{
            width: "100%",
            height: "30%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <h5
            style={{
              paddingTop: "1rem",
              paddingBottom: "2rem",
              width: "90%",
              height: "10rem",
              // marginLeft: "-2rem",
            }}
          >
            {editedText}
          </h5>
          <span style={{ color: "green" }}>
            <FiEdit
              onClick={handleEdit}
              style={{
                fontSize: "1.5rem",
                marginRight: "1rem",
              }}
            />
          </span>
          <span
            style={{
              color: "red",
              fontSize: "1.5rem",
              paddingRight: "1rem",
            }}
          >
            <BsTrash
              onClick={() => {
                handleDelete(review.id);
              }}
            />
          </span>
        </section>
        {edit && (
          <form>
            <input
              style={{ height: "4rem", width: "30rem" }}
              value={editedText}
              type="text"
              onChange={(e) => {
                setEditedText(e.target.value);
              }}
            ></input>
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
      </section>
    </>
  );
};

export default Review;
