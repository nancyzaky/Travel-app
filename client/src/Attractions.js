import react, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Attraction from "./Attraction";
import Map from "./Map";
import { TiArrowBack } from "react-icons/ti";

const Attractions = ({ user }) => {
  const { id } = useParams();
  const [attractions, setAttractions] = useState([]);
  const fetchUrl = () => {
    fetch(`/hotels/${id}/attractions`)
      .then((resp) => resp.json())
      .then((d) => {
        setAttractions(d);
        console.log(d);
      });
  };
  useEffect(() => {
    fetchUrl();
  }, []);

  return (
    <>
      <Link to={`/hotel/${id}`}>
        <span
          style={{
            color: "lightBlue",
            fontSize: "30px",
            textShadow: "0px 10px 10px",
          }}
        >
          <TiArrowBack />
        </span>{" "}
        <h4
          style={{
            fontSize: "20px",
            textShadow: "0px 13px 13px ",
            color: "grey",
          }}
        >
          Hotel
        </h4>
      </Link>
      <button
        className="btn"
        onClick={() => {
          fetch(`/hotels/${id}/attractions_ordered`)
            .then((resp) => resp.json())
            .then((d) => setAttractions(d));
        }}
      >
        Order by Closest
      </button>
      <ul
        style={{
          width: "100%",
          paddingTop: "2rem",
          textAlign: "center",
        }}
      >
        {attractions.map((item) => {
          return <Attraction item={item} key={item.id} user={user} />;
        })}
      </ul>
    </>
  );
};

export default Attractions;
