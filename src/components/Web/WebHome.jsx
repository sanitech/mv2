import React from "react";

const ProductCard = ({ title, price, description, imgSrc, color }) => {
  return (
    <div
      className={`relative w-64 -mt-44  p-6 rounded-lg shadow-lg ${color} text-black`}
      style={{ transform: "rotate(-6deg)" }}
    >
      <h3 className="text-xl mt-1 font-bold">{title}</h3>{" "}
      <img
        src="https://th.bing.com/th/id/OIP.UKpz3TFmVU2ZnxVUXvqZnwHaHa?w=198&h=197&c=7&r=0&o=5&dpr=1.5&pid=1.7/150"
        alt={title}
        className="w-20 h-20 mt-3 ml-14 "
      />
      <div className="mt-10">
        <p className="text-sm mt-1">{description}</p>
        <span className="block mt-2 text-lg font-semibold">${price}</span>
      </div>
    </div>
  );
};

const App = () => {
  const products = [
    {
      title: "Pesto",
      price: "28.50$",
      description: "Pesto, rich flavor with pasta, sandwiches, and more.",
      imgSrc: "pesto.png",
      color: "bg-green-500",
    },
    {
      title: "Salsa",
      price: "17$",
      description: "Salsa with tomato, onion, and cilantro for the best taste.",
      imgSrc: "salsa.png",
      color: "bg-purple-500",
    },
    {
      title: "Oyster",
      price: "Out of stock",
      description: "Delicacies of the sea with salty freshness.",
      imgSrc: "oyster.png",
      color: "bg-blue-400",
    },
    {
      title: "Tartar",
      price: "19.75$",
      description: "Tartar sauce perfect for seafood and creamy texture.",
      imgSrc: "tartar.png",
      color: "bg-yellow-300",
    },
  ];

  return (
    <div className="bg-white-100 min-h-screen flex flex-col items-center justify-center text-center">
      <div className="flex gap-8">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            title={product.title}
            price={product.price}
            description={product.description}
            imgSrc={product.imgSrc}
            color={product.color}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
