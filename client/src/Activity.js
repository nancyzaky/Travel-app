import React, { useEffect, useState } from "react";

const Activity = ({ user }) => {
  const [logIn, setLogIn] = useState(false);
  const fetchUrl = () => {
    fetch("/me").then((resp) => {
      if (resp.ok) {
        resp.json().then((data) => {
          if (data) {
            fetch(`/activitys/${data.id}`)
              .then((resp) => resp.json())
              .then((data) => console.log(data));
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
      {user.name && <div></div>}
    </>
  );
};

export default Activity;
