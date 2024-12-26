import React from "react";
import LeftSide from "../components/RoomDetail/LeftSide";
import RightSide from "../components/RoomDetail/RightSide";
import AboutHotel from "../components/RoomDetail/AboutHotel";

const RoomDetail = () => {
  return (
    <div className="mx-auto flex ">
      <LeftSide />
      <RightSide />
      {/* <AboutHotel /> */}
    </div>
  );
};

export default RoomDetail;
