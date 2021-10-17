import React from "react";

const RoomsN = ({ room, user }) => {
  return (
    <div className="room-card">
      <div className="room-description "></div>
      <div className="room-pics">
        <img src={room.pictures[0].url} alt="pic" className="pic-small" />
      </div>
    </div>
  );
};

export default RoomsN;
