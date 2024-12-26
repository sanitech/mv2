import React, { useState } from "react";
import MenuDetail from "./MenuDetail";
import { foodCategories } from "../data";

const FoodieMenu = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Briyani",
      price: 12.5,
      // category: "Main Course",
      quantity: 0,
    },
    {
      id: 2,
      name: "Italian",
      price: 20.25,
      // category: "Main Course",
      quantity: 2,
    },
    {
      id: 3,
      name: "Almond Cake",
      price: 15.12,
      // category: "Dessert",
      quantity: 1,
    },
    {
      id: 4,
      name: "Steak",
      price: 72.15,
      // category: "Main Course",
      quantity: 0,
    },
  ]);

  const [activeItem, setActiveItem] = useState("Barbecue");

  const adjustQuantity = (id, amount) => {
    setItems(
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(item.quantity + amount, 0) }
          : item
      )
    );
  };

  return (
    <div className="bg-orange-100 min-h-screen p-4">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-orange-600">Our Menu</h1>
        <p className="text-lg text-gray-600">
          Delicious dishes made just for you
        </p>
      </header>

      {/* Categories */}
      {/* <div className="flex justify-around mt-4 text-sm font-semibold text-gray-600">
        {["All", "Mie", "Junkfood", "Drink", "Seafood"].map((category) => (
          <button
            key={category}
            className="flex flex-col items-center hover:text-orange-500"
          >
            <div className="w-10 h-10 bg-gray-200 rounded-full mb-1 flex items-center justify-center">
              🍽️
            </div>
            {category}  
          </button>
        ))}
      </div> */}

      {/* Food Categories */}
      <div className="flex justify-center overflow-x-auto hidden-scroll space-x-1 ml-6 mb-9">
        {foodCategories.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col items-center p-3 rounded-full ${
              item.highlight || (activeItem && activeItem.name === item.name)
                ? "bg-orange-200"
                : "bg-white"
            } shadow-lg hover:scale-105 transition-transform`}
            onClick={() => setActiveItem(item)} // Set the active item on click
          >
            <div className="text-2xl mb-2">{item.icon}</div>
            <p className="text-sm font-medium text-gray-800 whitespace-nowrap">
              {item.name}
            </p>
          </div>
        ))}
      </div>

      {/* Food Cards Grid */}
      <div className="grid grid-cols-2 gap-4 mt-6">
        {items.map((item) => (
          <div
            key={item.id}
            className={`bg-white rounded-lg shadow-md p-3 flex flex-col ${
              activeItem && activeItem.id === item.id
                ? "border-2 border-orange-500"
                : ""
            }`}
            onClick={() => setActiveItem(item)} // Set the active item on click
          >
            <div className="w-full h-20 bg-gray-100 rounded-lg flex items-center justify-center">
              <img
                src="https://th.bing.com/th/id/OIP.UKpz3TFmVU2ZnxVUXvqZnwHaHa?w=198&h=197&c=7&r=0&o=5&dpr=1.5&pid=1.7/60"
                alt={item.name}
                className="object-cover"
              />
            </div>
            <h3 className="mt-2 text-gray-800 font-semibold">{item.name}</h3>
            {/* <p className="text-gray-500 text-sm">{item.category}</p> */}
            <div className="flex items-center justify-between mt-3">
              <span className="text-orange-500 font-bold">
                ${item.price.toFixed(2)}
              </span>
              {/* <div className="flex items-center">
                <button
                  onClick={() => adjustQuantity(item.id, -1)}
                  className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
                >
                  –
                </button>
                <span className="mx-2 text-gray-700">{item.quantity}</span>
                <button
                  onClick={() => adjustQuantity(item.id, 1)}
                  className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
                >
                  +
                </button>
              </div> */}
            </div>
          </div>
        ))}
      </div>

      {/* Menu Detail */}
      {activeItem && <MenuDetail item={activeItem} />}
    </div>
  );
};

export default FoodieMenu;
