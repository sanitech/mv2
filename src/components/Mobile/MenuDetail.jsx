import React, { useState } from "react";

const DetailsMenu = () => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden mt-10">
      {/* Food Image */}
      <div className=" bg-gray-100 text-3xl font-bold">
        <h1>Menu Detail</h1>
      </div>
      <div className="relative w-full h-48 bg-gray-100 flex justify-center items-center">
        <img
          src="https://th.bing.com/th/id/OIP.UKpz3TFmVU2ZnxVUXvqZnwHaHa?w=198&h=197&c=7&r=0&o=5&dpr=1.5&pid=1.7/200" // Replace with real image URL
          alt="Italian Spaghetti"
          className="w-40 h-40 object-cover"
        />
      </div>

      {/* Details */}
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">
          Italian Spaghetti Aglio e Olio
        </h2>

        {/* Rating */}
        <div className="flex items-center mt-1 text-gray-600">
          <span className="text-yellow-400 text-lg">★</span>
          <span className="ml-1">4.5 Rating</span>
        </div>

        {/* Price */}
        <div className="mt-2 text-gray-800 font-bold text-lg">
          $17.<sup className="text-sm">25</sup>
        </div>

        {/* Quantity Selector */}
        <div className="flex items-center mt-3">
          <button
            onClick={decreaseQuantity}
            className="bg-orange-500 text-white w-6 h-6 rounded-full flex justify-center items-center"
          >
            –
          </button>
          <span className="mx-3 text-gray-700">{quantity}</span>
          <button
            onClick={increaseQuantity}
            className="bg-orange-500 text-white w-6 h-6 rounded-full flex justify-center items-center"
          >
            +
          </button>
        </div>

        {/* Description */}
        {/* <p className="mt-3 text-gray-600 text-sm leading-relaxed">
          Indulge in the simplicity and elegance of our Spaghetti Aglio e Olio.
          This traditional Italian dish celebrates the harmonious blend of
          high-quality olive oil, thinly sliced garlic, and a touch of red
          pepper flakes. Tossed with perfectly cooked al dente spaghetti...
          <span className="text-orange-500 cursor-pointer">Read more</span>
        </p> */}
      </div>
    </div>
  );
};

export default DetailsMenu;
