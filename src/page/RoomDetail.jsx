import React from "react";
import LeftSide from "../components/RoomDetail/LeftSide";
import RightSide from "../components/RoomDetail/RightSide";

const RoomDetail = () => {
  return (
    <div className="mx-auto flex ">
      <LeftSide />
      <RightSide />
    </div>
  );
};

export default RoomDetail;
