import React from "react";
import { GoogleMap } from "@react-google-maps/api";
const Map = () => {
  return <GoogleMap defaultZoom={10} defaultCenter={{ lat: 12, lng: 13 }} />;
};

export default Map;
