import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaWifi, FaParking } from "react-icons/fa";
import { CgGym } from "react-icons/cg";
import { GrSwim } from "react-icons/gr";
import { Load } from "./Load";
const Details = () => {
  const [data, setData] = useState({});
  let { id } = useParams();
  const fetchUrl = () => {
    fetch(`/hotels/${id}`)
      .then((resp) => resp.json())
      .then((d) => {
        console.log(d);
        setData(d);
      });
  };
  useEffect(() => {
    fetchUrl();
  }, []);
  return (
    <li className="single-room">
      <section className="details"></section>
      <div className="room-pics-container">
        <img src={data.image} alt="pic" className="hotel-pic" />
        <ul>
          {data.pictures.map((pic) => {
            return (
              <li className="room-pics">
                <img src={pic.url} alt="pic" className="hotel-pic" />
              </li>
            );
          })}
        </ul>
        <section className="features-cont">
          <ul>
            <li className="features-list">
              {data.feature.parking && <FaParking />}
            </li>
            <li className="features-list">{data.feature.gym && <CgGym />}</li>
            <li className="features-list">{data.feature.pool && <GrSwim />}</li>
          </ul>
        </section>
      </div>
    </li>
  );
};

export default Details;
