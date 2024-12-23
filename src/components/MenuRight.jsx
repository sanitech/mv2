import React from "react";

const SaladCard = () => {
  return (
    <div className="flex items-center justify-center bg-gray-100 min-h-screen">
      <div className="relative bg-white rounded-lg shadow-lg w-80 p-4">
        {/* Image Section */}
        <div className="relative">
          <img
            src="data:image/jpeg;base64,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" // Replace with your salad image URL
            alt="Salad"
            className="rounded-full object-cover w-full h-56"
          />
          <div className="absolute top-0 left-0 bg-orange-500 text-white px-4 py-1 rounded-br-lg font-semibold text-sm">
            Salad
          </div>
          <div className="absolute bottom-4 left-0 bg-white/90 px-3 py-1 rounded-md shadow-md flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-4 h-4 text-gray-600"
            >
              <path d="M9.171 18.173 12 15.344l2.829 2.829 1.415-1.414L12 12.515l-4.243 4.243z" />
            </svg>
            <span className="text-sm text-gray-600">10-18 mins</span>
          </div>
        </div>

        {/* Content Section */}
        <div className="mt-4 text-center">
          <h2 className="text-xl font-bold text-gray-800">Salad</h2>
          <p className="text-sm text-gray-500 mt-2">
            Fresh vegetables, quinoa, lime, and more!
          </p>
          <div className="flex justify-center items-center mt-4 space-x-2">
            <div className="flex items-center space-x-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="orange"
                className="w-5 h-5"
              >
                <path d="M12 2a9.91 9.91 0 0 1 9.92 9.92A10.08 10.08 0 0 1 18 20.08l-1.21-6.22 4.58-4.48H13.41L12 2Z" />
              </svg>
              <span className="text-sm text-gray-600 font-medium">4.7</span>
            </div>
          </div>
          <button className="bg-orange-500 text-white px-4 py-2 rounded-lg font-medium mt-4 hover:bg-orange-600">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default SaladCard;