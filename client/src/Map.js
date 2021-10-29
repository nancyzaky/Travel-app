import React, { useState } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { MdHotel } from "react-icons/md";

const Map = ({ long, lat, address }) => {
  const [showDetails, setShowDetails] = useState(false);
  const center = {
    lat: lat,
    lng: long,
  };
  const MY_KEY = process.env.REACT_APP_API_KEY;
  console.log(MY_KEY);
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: MY_KEY,
  });

  const [map, setMap] = useState(null);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={{
        height: "300px",
        marginTop: "3rem",
        marginBottom: "3rem",
        width: "100%",
      }}
      center={center}
      zoom={10}
    >
      <>
        <Marker
          animation={window.google.maps.Animation.BOUNCE}
          icon={{
            url: "https://images.vexels.com/media/users/3/127574/isolated/preview/47784410d0788bcbc2af3e2bba23e1cd-double-bed-flat-icon.png",
            scaledSize: new window.google.maps.Size(37, 37),
          }}
          position={{ lat: lat, lng: long }}
          onClick={() => {
            setShowDetails(!showDetails);
          }}
          onCloseClick={() => {
            setShowDetails(!showDetails);
          }}
        >
          {showDetails && (
            <InfoWindow position={{ lat: lat, lng: long }}>
              <div>{address}</div>
            </InfoWindow>
          )}
        </Marker>
      </>
    </GoogleMap>
  ) : (
    <></>
  );
};

export default Map;
