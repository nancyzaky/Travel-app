import react, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Attraction from "./Attraction";
import Map from "./Map";
import { TiArrowBack } from "react-icons/ti";
import { FcFilledFilter } from "react-icons/fc";

const Attractions = ({ user }) => {
  const { id } = useParams();
  const [attractions, setAttractions] = useState([]);
  const handleSelect = (val) => {
    if (val === "sort2") {
      fetch(`/api/hotels/${id}/attractions_ordered`)
        .then((resp) => resp.json())
        .then((d) => setAttractions(d));
    } else if (val === "sort3") {
      fetch(`/api/hotels/${id}/attractions_ordered_desc`)
        .then((resp) => resp.json())
        .then((d) => {
          setAttractions(d);
        });
    } else if (val === "sort1") {
      fetch(`/api/hotels/${id}/attractions_ordered_rating_desc`)
        .then((resp) => resp.json())
        .then((d) => {
          setAttractions(d);
        });
    } else if (val === "sort4") {
      fetch(`/api/hotels/${id}/attractions_ordered_rating_asc`)
        .then((resp) => resp.json())
        .then((d) => {
          setAttractions(d);
        });
    }
  };
  const fetchUrl = () => {
    fetch(`/api/hotels/${id}/attractions`)
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
      <span
        style={{
          color: "lightBlue",
          fontSize: "30px",
          textShadow: "0px 10px 10px",
        }}
      >
        {" "}
        <Link to={`/hotel/${id}`}>
          <TiArrowBack
            style={{
              color: "lightBlue",
            }}
          />
        </Link>
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
      <div style={{ textAlign: "center", top: "0", width: "100%" }}>
        <section style={{ display: "flex", justifyContent: "center" }}>
          <h3 style={{ paddingTop: "0.5rem", paddingRight: "1rem" }}>
            Filter By <FcFilledFilter />
          </h3>
          <select
            class="js-custom-select custom-select-sm"
            style={{
              width: "160px",
              height: "40px",
              dropdownAutoWidth: "true",
              fontSize: "17px",
              fontWeight: "bold",
              border: "0.05rem solid black",
              borderRadius: "0.4rem",
            }}
            onChange={(e) => {
              handleSelect(e.target.value);
            }}
          >
            <option value="sort0">Select</option>
            <option value="sort1">Highest rated</option>
            <option value="sort2">Closest</option>
            <option value="sort3">Farthest</option>
            <option value="sort4">Lowest rated</option>
          </select>
        </section>
        <ul className="box">
          {attractions.map((item) => {
            return <Attraction item={item} key={item.id} user={user} />;
          })}
        </ul>
      </div>
    </>
  );
};

export default Attractions;
