import React from "react";

const RegistrationForm = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-6">Register Your Business</h2>
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700">Business Name</label>
              <input
                type="text"
                placeholder="Hotel and Restaurant"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div>
              <label className="block text-gray-700">Business Type</label>
              <select className="mt-1 block w-full border border-gray-300 rounded-md p-2">
                <option>Select a Type</option>
                {/* Add more options as needed */}
              </select>
            </div>
            <div>
              <label className="block text-gray-700">Phone Number</label>
              <input
                type="text"
                placeholder="Enter phone number"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            {/* <div>
              <label className="block text-gray-700">Check-In Time</label>
              <div className="flex space-x-2">
                <select className="mt-1 block w-full border border-gray-300 rounded-md p-2">
                  <option>1:00 AM</option> */}
            {/* Add more options as needed */}
            {/* </select>
                <span className="mt-2">to</span>
                <select className="mt-1 block w-full border border-gray-300 rounded-md p-2">
                  <option>1:00 PM</option> */}
            {/* Add more options as needed */}
            {/* </select>
              </div> */}
            {/* </div>  */}
            <div>
              <label className="block text-gray-700">Website</label>
              <input
                type="text"
                placeholder="https://example.com"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              />
            </div>

            <div className="col-span-2">
              <label className="block text-gray-700">Upload Logo</label>
              <div className="flex items-center mt-1">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-gray-400">Logo</span>
                </div>
                <button className="ml-4 bg-blue-500 text-white px-4 py-2 rounded-md">
                  Upload Logo
                </button>
              </div>
            </div>
            <div>
              <label className="block text-gray-700">Username</label>
              <input
                type="text"
                placeholder="Enter your username"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              />
            </div>

            {/* <div>
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div>
              <label className="block text-gray-700">Confirm Password</label>
              <input
                type="password"
                placeholder="Confirm your password"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              />
            </div> */}
          </div>
          <button className="mt-6 w-full bg-orange-500 text-white py-2 rounded-md">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
