import React from "react";
import WebHome from "./WebHome";

const HeroSection = () => {
  return (
    <div className="bg-white-100 min-h-screen flex flex-col justify-center items-center text-center relative overflow-hidden">
      {/* Navigation */}
      <nav className="absolute top-6 flex justify-between w-10/12">
        <div className="text-black text-2xl font-bold">AM</div>
        <ul className="flex gap-8 text-gray-900 text-sm">
          <li>
            <a href="#" className="hover:text-black transition">
              Products
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-black transition">
              Recipes
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-black transition">
              Adventure Trip
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-black transition">
              Food Training
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-black transition">
              Anna Maria
            </a>
          </li>
        </ul>
      </nav>

      {/* Hero Content */}
      <div className="text-black mt-24">
        <h1 className="text-5xl font-bold">
          Delicious Recipes and Diet Workout
        </h1>
        <p className="text-gray-900 mt-4 max-w-2xl mx-auto">
          Anna Maria's core philosophy is not just about eating healthy, she
          says it's equally important that the food be colorful, beautiful and,
          of course, delicious.
        </p>
        <button className="mt-6 bg-orange-600 text-black font-semibold py-2 px-6 rounded-full hover:bg-orange-200 transition">
          Explore Products
        </button>
      </div>

      {/* Background Lines (Optional for Design Detail) */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute w-96 h-96 border border-gray-500 rounded-full opacity-10 -top-20 -left-20"></div>
        <div className="absolute w-72 h-72 border border-gray-500 rounded-full opacity-10 top-40 right-20"></div>
      </div>
      <WebHome />
      {/* Floating Cards Example */}
    </div>
  );
};

export default HeroSection;
