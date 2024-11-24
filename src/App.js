import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./page/Home";
import Room from "./page/Room";
import RoomDetail from "./page/RoomDetail";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/room" element={<Room />} />
        <Route path="/room/:roomId" element={<RoomDetail />} />
        <Route path="*" element={<h1>Not found</h1>} />
      </Routes>
    </>
  );
};

export default App;
