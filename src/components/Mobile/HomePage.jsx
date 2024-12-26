import React from "react";

import FooterPage from "./FooterPage";
import MenuPage from "./MenuPage";

const FoodAppUI = () => {
  return (
    <div className=" bg-orange-100 p-4">
      {/* Header */}
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
      <div className="flex justify-between items-center mb-6">
        <button className="p-2">
          <span className="material-icons">menu</span>
        </button>
        {/* <h1 className="text-lg font-bold"> special </h1> */}
        <button className="p-2">
          <span className="material-icons">notifications</span>
        </button>
      </div>
      {/* Categories */}

      {/* <div className="flex justify-center space-x-1 ml-6 mb-9">
        {[
          { name: "Burger", icon: "🍔" },
          { name: "Pizza", icon: "🍕" },
          { name: "Fries", icon: "🍟", highlight: true },
          { name: "Drinks", icon: "🍹" },
          { name: "Meat", icon: "🥩" },
        ].map((item, index) => (
          <div
            key={index}
            className={`flex flex-col items-center p-3 rounded-full ${
              item.highlight ? "bg-yellow-200" : "bg-white"
            } shadow-lg hover:scale-105 transition-transform`}
          >
            <div className="text-2xl mb-2">{item.icon}</div>
            <p className="text-sm font-medium text-gray-800">{item.name}</p>
          </div>
        ))}
      </div> */}
      {/* Center Image and Description */}
      <div className="text-center mb-6">
        <h2 className="mt-4 text-2xl font-semibold text-orange-500">
          A special dish prepared for you
        </h2>
        <p className="text-gray-500 mt-2">
          Our food delivery app brings your favorite dishes to you.
        </p>
        <img
          src="https://th.bing.com/th/id/OIP.UKpz3TFmVU2ZnxVUXvqZnwHaHa?w=198&h=197&c=7&r=0&o=5&dpr=1.5&pid=1.7/150"
          alt="Pizza Clock"
          className="w-36 h-36 mx-auto  rounded-full object-cover"
        />
      </div>

      <MenuPage />

      {/* <FooterPage /> */}
    </div>
  );
};

export default FoodAppUI;
