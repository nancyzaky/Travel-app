import React, { useEffect, useState } from "react";

import Activity from "./Activity";

const Activities = ({ user }) => {
  const [logIn, setLogIn] = useState(false);
  const [attractions, setAttractions] = useState([]);
  const handleDelete = (key) => {
    let newArr = attractions.filter((attr) => {
      return attr.id !== key;
    });
    setAttractions(newArr);
  };
  const fetchUrl = () => {
    fetch("/api/me").then((resp) => {
      if (resp.ok) {
        resp.json().then((data) => {
          if (data) {
            fetch(`/api/activities/${data.id}`)
              .then((resp) => resp.json())
              .then((data) => setAttractions(data));
          }
        });
      } else {
        setLogIn(true);
        return;
      }
    });
  };
  useEffect(() => {
    fetchUrl();
  }, []);
  return (
    <>
      {logIn && <h1>Please Log In First</h1>}
      {user.name && (
        <ul className="activity-cont">
          {attractions.map((attr) => {
            return (
              <Activity attr={attr} key={attr.id} handleDelete={handleDelete} />
            );
          })}
        </ul>
      )}
    </>
  );
};

export default Activities;
