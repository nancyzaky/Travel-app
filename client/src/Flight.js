import React, { useState, useEffect } from "react";

const Flight = () => {
  const [destination, setDestination] = useState("");
  const [backDestination, setbackDestination] = useState("");
  const [inBound, setInBound] = useState("");
  const [origin, setOrigin] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [trips, setTrips] = useState({});
  const fetchUrl = (e) => {
    e.preventDefault();
    fetch(
      `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/UK/GBP/en-GB/?query=${destination}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host":
            "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
          "x-rapidapi-key":
            "b174797d8emsh65e10716777fb21p1f8c35jsn9c8b67a2deb0",
        },
      }
    )
      .then((resp) => resp.json())
      .then((d) => {
        console.log(d);
        setInBound(d.Places[0].PlaceId);
      });
    fetch(
      `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/UK/GBP/en-GB/?query=${backDestination}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host":
            "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
          "x-rapidapi-key":
            "e1c90717fdmshd57821019f3afb4p134574jsnd0b487a215bc",
        },
      }
    )
      .then((resp) => resp.json())
      .then((d) => {
        console.log(d);
        setOrigin(d.Places[0].PlaceId);
      });

    console.log(origin, inBound);
  };
  useEffect(() => {
    if (origin && inBound) {
      fetch(
        `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browseroutes/v1.0/US/USD/en-US/${origin}/${inBound}/${startDate}?inboundpartialdate=${endDate}`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-host":
              "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
            "x-rapidapi-key":
              "b174797d8emsh65e10716777fb21p1f8c35jsn9c8b67a2deb0",
          },
        }
      )
        .then((resp) => resp.json())
        .then((d) => {
          setTrips(d);
          console.log(d);
        });
    }
  }, [origin, inBound]);
  return (
    <div>
      <form type="submit" style={{ padding: "1rem" }}>
        <label htmlFor="destination" className="label">
          To
        </label>
        <input
          placeholder="destination"
          value={destination}
          onChange={(e) => {
            setDestination(e.target.value);
          }}
        ></input>

        <br></br>
        <label
          htmlFor="origin"
          className="label-email"
          style={{ paddingRight: "2.3rem" }}
        >
          From
        </label>
        <input
          placeholder="Origin"
          value={backDestination}
          onChange={(e) => {
            setbackDestination(e.target.value);
          }}
        ></input>
        <br></br>
        <label className="label-email" style={{ paddingRight: "1.4rem" }}>
          Depart
        </label>
        <input
          type="date"
          value={startDate}
          onChange={(e) => {
            setStartDate(e.target.value);
          }}
        ></input>
        <br></br>
        <label className="label-email" style={{ paddingRight: "1.7rem" }}>
          Arrive
        </label>
        <input
          type="date"
          value={endDate}
          onChange={(e) => {
            setEndDate(e.target.value);
          }}
        ></input>
        <br></br>
        <button
          className="btn"
          onClick={fetchUrl}
          style={{ marginTop: "2rem", marginLeft: "5rem" }}
        >
          Check Flights
        </button>
      </form>
      {trips.Carriers && (
        <div
          style={{
            textAlign: "center",
            paddingLeft: "2rem",
            marginLeft: "15rem",
          }}
        >
          <div
            className="shadow"
            style={{
              display: "grid",
              textAlign: "start",
            }}
          >
            <ul style={{ display: "flex" }}>
              <h3
                style={{
                  textAlign: "center",
                  // color: "red",
                  paddingRight: "2rem",
                }}
              >
                Cheapest Available Carriers:{" "}
              </h3>
              {trips.Carriers.map((carrier) => {
                return (
                  <h2
                    style={{
                      textAlign: "center",
                      color: "red",
                      paddingRight: "2rem",
                    }}
                  >
                    {carrier.Name} Airline
                  </h2>
                );
              })}
            </ul>
            <hr className="big-line"></hr>
            <div style={{ display: "flex" }}>
              <ul style={{ paddingRight: "5rem" }}>
                <li>
                  <h3>From:</h3>
                </li>
                <li style={{ paddingTop: "1rem" }}>
                  {trips.Places[0].CountryName}
                </li>
                <li style={{ paddingTop: "1rem" }}>
                  {trips.Places[0].CityName}
                </li>
                <li style={{ paddingTop: "1rem" }}>
                  {trips.Places[0].Name} Airport
                </li>
              </ul>
              <ul style={{ paddingRight: "8rem" }}>
                <li>
                  <h3>To:</h3>
                </li>
                <li style={{ paddingTop: "1rem" }}>
                  {trips.Places[1].CountryName}
                </li>
                <li style={{ paddingTop: "1rem" }}>
                  {trips.Places[1].CityName}
                </li>
                <li style={{ paddingTop: "1rem" }}>
                  {trips.Places[1].Name} Airport
                </li>
              </ul>
              {trips.Quotes.map((quote) => {
                return (
                  <section>
                    <h6>Cheapest Price Found:</h6>
                    <h5
                      style={{
                        paddingTop: "1rem",
                        color: "green",
                        // paddingLeft: "3rem",
                      }}
                    >
                      ${quote.MinPrice}
                    </h5>
                    <h6
                      style={{
                        paddingTop: "3rem",
                      }}
                    >
                      Date Of Selected Departure:
                    </h6>

                    <h5
                      style={{
                        paddingTop: "1rem",
                        color: "green",
                        // paddingLeft: "2rem",
                      }}
                    >
                      {quote.OutboundLeg.DepartureDate.split("")
                        .slice(0, 10)
                        .join("")}
                    </h5>
                  </section>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Flight;
