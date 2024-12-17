import React from "react";

const Homepage = () => {
  return (
    <div className="bg-blue-200">
      {/* Header */}
      <header className="bg-teal-900 text-white flex justify-between items-center px-6 py-4">
        <div className="text-xl font-bold">AM</div>
        <nav className="flex gap-6">
          <a href="#products" className="hover:text-gray-300">
            Products
          </a>
          <a href="#recipes" className="hover:text-gray-300">
            Recipes
          </a>
          <a href="#adventure-trip" className="hover:text-gray-300">
            Adventure Trip
          </a>
          <a href="#food-training" className="hover:text-gray-300">
            Food Training
          </a>
          <a href="#anna-marta" className="hover:text-gray-300">
            Anna Marta
          </a>
        </nav>
        <button className="hover:opacity-75">
          <span role="img" aria-label="search">
            🔍
          </span>
        </button>
      </header>

      {/* Hero Section */}
      <section className="bg-teal-900 text-white text-center py-16 px-4">
        <h1 className="text-4xl font-bold mb-4">
          Delicious Recipes and Diet Workout
        </h1>
        <p className="text-lg mb-6">
          Anna Marta's core philosophy is not just about eating healthy, she
          says it's equally important that the food be colorful, beautiful and,
          of course, delicious.
        </p>
        <button className="bg-white text-teal-900 px-6 py-2 rounded-full font-bold hover:bg-gray-100">
          Explore Products
        </button>
      </section>

      {/* Product Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
        {/* Example card */}
        <div className="bg-red-200 p-4 rounded-lg shadow-lg flex items-center">
          <img
            src="https://via.placeholder.com/100"
            alt="Pesto"
            className="w-16 h-16 rounded-full mr-4"
          />
          <div>
            <h3 className="font-bold text-lg">Pesto</h3>
            <p className="text-gray-700">$14.69</p>
          </div>
        </div>
        {/* Add more cards as needed */}
      </section>
    </div>
  );
};

export default Homepage;
