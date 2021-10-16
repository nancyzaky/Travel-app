import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { RiParkingLine } from "react-icons/ri";
import { CgGym } from "react-icons/cg";
import { GrSwim } from "react-icons/gr";
import { Load } from "./Load";
import Map from "./Map";
import Slide from "./Slide";
const Details = () => {
  const [pics, setPics] = useState([]);
  // const [hotelViews, setHotelViews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [features, setFeatures] = useState({});
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);
  const [address, setAddress] = useState("");
  let { id } = useParams();
  const fetchUrl = () => {
    setLoading(false);
    fetch(`/hotels/${id}`)
      .then((resp) => resp.json())
      .then((d) => {
        console.log(d);
        setPics([...d.views, ...d.pictures]);
        // setMainPic(d.image);
        setLoading(true);
        if (d.feature) {
          setFeatures(d.feature);
        }
        setLat(d.lat);
        setLong(d.long);
        setAddress(d.location);
      });
  };
  useEffect(() => {
    fetchUrl();
  }, [id]);
  return (
    <>
      <li className="single-hotel">
        <ul className="list">
          <li className="list-items">
            <Link to={`/hotel/${id}/rooms`}>Rooms</Link>
          </li>
        </ul>
        <Slide pics={pics} />
        <div
          style={{
            height: "100px",
            width: "100%",
            border: "tomato solid 0.2rem",
            marginTop: "4rem",
          }}
        >
          <section
            style={{
              border: "tomato solid 0.2rem",
            }}
          >
            <h5>Hotel features</h5>
            <ul className="features-cont">
              <li className="features-list">
                <span>parking</span> {features.parking && <RiParkingLine />}
              </li>
              <li className="features-list">
                <span>Gym</span>
                {features.gym && <CgGym />}
              </li>
              <li className="features-list">
                <span>Pool</span>
                {features.pool && <GrSwim />}
              </li>
            </ul>
          </section>
        </div>
        <Map lat={lat} long={long} address={address} />
      </li>
    </>
  );
};

export default Details;
