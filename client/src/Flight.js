import React from "react";

const Flight = () => {
  const fetchUrl = () => {
    fetch(
      "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/UK/GBP/en-GB/?query=Thailand",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host":
            "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
          "x-rapidapi-key":
            "036db7d1abmsh7d62560990e81f3p1b6c0djsnf0406b51760c",
        },
      }
    )
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return <button onClick={fetchUrl}>Click</button>;
};

export default Flight;
