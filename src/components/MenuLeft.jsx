// import React, { useState } from "react";

// const FoodOrderSection = () => {
//   const [quantity, setQuantity] = useState(2);

//   const handleIncrease = () => setQuantity(quantity + 1);
//   const handleDecrease = () => {
//     if (quantity > 1) setQuantity(quantity - 1);
//   };

//   return (
//     <div className="bg-white p-8 rounded-lg shadow-md max-w-xl mx-auto">
//       {/* Title */}
//       <h1 className="text-2xl font-bold text-gray-800">
//         Order your <br />
//         <span className="text-black">favourite Foods</span>
//       </h1>

//       {/* Description */}
//       <p className="text-gray-500 mt-2">
//         Fresh and tasty seafood curry sit amet, consectetur Curabitur accumsan
//         auctor pulvinar proin <span className="font-bold italic">sit amet</span>
//         .
//       </p>

//       {/* Total Order */}
//       <div className="flex items-center justify-between mt-6">
//         <p className="text-gray-600 text-lg">
//           Total order: <span className="font-bold text-black">$24.30</span>
//         </p>
//         <div className="flex items-center border border-gray-300 rounded-lg">
//           <button
//             onClick={handleDecrease}
//             className="px-4 py-2 text-gray-600 hover:bg-gray-200 rounded-l-lg"
//           >
//             -
//           </button>
//           <span className="px-4 py-2 text-gray-600">{quantity}</span>
//           <button
//             onClick={handleIncrease}
//             className="px-4 py-2 text-gray-600 hover:bg-gray-200 rounded-r-lg"
//           >
//             +
//           </button>
//         </div>
//       </div>

//       {/* Buy Now Button */}
//       <button className="mt-6 bg-black text-white px-6 py-2 rounded-full shadow-lg hover:bg-gray-800 flex items-center space-x-2">
//         <span>Buy Now</span>
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           strokeWidth="2"
//           stroke="currentColor"
//           className="w-5 h-5"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.5 6M7 13h10l4 8M7 13l-1.5 6m15-14h2m-2 4h2m-2 4h2m-2 4h2m-2 4h2"
//           />
//         </svg>
//       </button>

//       {/* Food Items */}
//       <div className="flex justify-between items-center mt-8">
//         {[
//           { name: "Burger", price: 3.25, image: "/burger.png" },
//           { name: "Cake", price: 2.25, image: "/cake.png" },
//           { name: "Salad", price: 5.25, image: "/salad.png" },
//         ].map((item, index) => (
//           <div
//             key={index}
//             className="text-center p-4 rounded-full bg-gray-100 hover:shadow-md transition"
//           >
//             <img
//               src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/9k="
//               alt={item.name}
//               className="h-14 w-14 mx-auto rounded-full"
//             />
//             <p className="text-sm font-bold text-gray-600">{item.name}</p>
//             <p className="text-sm text-gray-500">${item.price.toFixed(2)}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

export default FoodOrderSection;
import React from "react";

const ProductCard = ({ title, description, image, price, status, bgColor }) => {
  return (
    <div
      className={`relative w-72 p-6 rounded-xl shadow-lg transform rotate-3 ${bgColor} text-white`}
      style={{ transform: "rotate(-3deg)" }}
    >
      <div className="absolute top-4 right-4">
        {status === "Out of stock" ? (
          <span className="bg-gray-800 text-white text-xs px-3 py-1 rounded-full">
            {status}
          </span>
        ) : (
          <span className="bg-white text-black text-sm px-3 py-1 rounded-full">
            ${price}
          </span>
        )}
      </div>
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover rounded-md mb-4 border-2 border-white"
      />
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-sm mb-4">{description}</p>
    </div>
  );
};

const ProductCards = () => {
  const products = [
    {
      title: "Pesto",
      description:
        "Beloved for its rich flavor and versatility in pasta, sandwiches, and grilled vegetables.",
      image: "path/to/pesto-image.jpg",
      price: "28.50$",
      status: "In stock",
      bgColor: "bg-green-500",
    },
    {
      title: "Salsa",
      description:
        "A vibrant medley of tomatoes, onions, peppers, and herbs, adds a burst of freshness.",
      image: "path/to/salsa-image.jpg",
      price: "14.49$",
      status: "In stock",
      bgColor: "bg-purple-500",
    },
    {
      title: "Oyster",
      description:
        "Prized delicacies of the sea, offer a taste of briny sweetness and a tender texture.",
      image: "path/to/oyster-image.jpg",
      price: "",
      status: "Out of stock",
      bgColor: "bg-blue-400",
    },
    {
      title: "Tartar",
      description:
        "A tangy companion to seafood, delights with its creamy texture and zesty flavor.",
      image: "path/to/tartar-image.jpg",
      price: "14.69$",
      status: "In stock",
      bgColor: "bg-yellow-400",
    },
  ];

  return (
    <div className="bg-gray-800 py-10 px-6">
      <h1 className="text-center text-3xl font-bold text-white mb-8">
        Explore Products
      </h1>
      <div className="flex flex-wrap justify-center gap-8">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            title={product.title}
            description={product.description}
            image={product.image}
            price={product.price}
            status={product.status}
            bgColor={product.bgColor}
          />
        ))}
      </div>
    </div>
  );
};
