import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Room from "./page/Room";
import RoomDetail from "./page/RoomDetail";
// import NavBar from "./components/NavBar";
import DashboardCards from "./components/DashBord";
import FoodCafe from "./components/FoodCafe";
import MobileMenu from "./components/MobileMenu";
import HomePage from "./components/Mobile/HomePage";

import NavWeb from "./components/Web/NavWeb";

const App = () => {
  return (
    <>
      {/* <NavBar /> */}
      {/* <HomePage />
      <MenuPage />
      <AboutPage /> */}
      {/* <WebHome /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/room" element={<Room />} />
        <Route path="/room/:roomId" element={<RoomDetail />} />
        <Route path="/DashBord" element={<DashboardCards />} />
        <Route path="/FoodCafe" element={<FoodCafe />} />
        <Route path="/MobileMenu" element={<MobileMenu />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/NavWeb" element={<NavWeb />} />

        <Route path="*" element={<h1>Not found</h1>} />
      </Routes>
    </>
  );
};

export default App;
