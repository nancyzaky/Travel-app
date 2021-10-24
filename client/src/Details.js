import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { RiParkingLine } from "react-icons/ri";
import { CgGym } from "react-icons/cg";
import { GrSwim } from "react-icons/gr";
import { AiFillCar } from "react-icons/ai";
import { Load } from "./Load";
import Map from "./Map";
import HotelSlide from "./HotelSlide";

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
          <li className="list-items">
            <Link to={`/hotel/${id}/restaurants`}>Restaurants</Link>
          </li>
          <li className="list-items">
            <Link to={`/hotel/${id}/flights`}>Flights</Link>
          </li>
          <li className="list-items">
            <Link to={`/hotel/${id}/restaurants`}>Travel Restrictions</Link>
          </li>
          <li className="list-items">
            <Link to={`/hotel/${id}/attractions`}>Attractions</Link>
          </li>
        </ul>
        <section>
          <HotelSlide pics={pics} />
          <br></br>
          <hr className="big-line"></hr>
        </section>
        <ul className="features-cont">
          <li className="features-list">
            <h4 style={{ color: "grey" }}>Hotel Features:</h4>
          </li>
          <li className="features-list">
            <span>parking</span> {features.parking && <AiFillCar />}
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
        <hr className="big-line"></hr>
        <section>
          <Map lat={lat} long={long} address={address} />
          <hr className="big-line"></hr>
        </section>{" "}
        {/* </div> */}
      </li>
    </>
  );
};

export default Details;
