import react, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Attraction from "./Attraction";
import Map from "./Map";

const Attractions = () => {
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
      <ul
        style={{
          width: "100%",
          margin: "10",
          paddingTop: "2rem",
          paddingLeft: "6rem",
        }}
      >
        {attractions.map((item) => {
          return <Attraction item={item} />;
        })}
      </ul>
      {/* <Map
        lat={parseInt(attractions[0].lat)}
        long={parseInt(attractions[0].long)}
        address={attractions[0].location}
      /> */}
    </>
  );
};

export default Attractions;
