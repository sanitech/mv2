import React from "react";

const LeftSide = () => {
  return (
    <div className="w-80 bg-slate-300">
      <div className="flex space-x-2 border bg-slate-200">
        <div className="rounded-full bg-gray-500  px-2 py-1 border-gray-300 border ">
          startHotel
        </div>
        <div className="rounded-full bg-gray-50 px-2 py-1 border-gray-300 border">
          start Hotel
        </div>
        <div className="rounded-full bg-gray-50 px-2 py-1 border-gray-300 border">
          startHotel
        </div>
      </div>
      <div className="border ">
        <div className="ml-2">New page</div>
        <div className="mb-2 ml-2 relative rounded-xl h-72 w-fit">
          <img
            className="rounded-xl w-full h-full  "
            src="https://www.bing.com/th?id=OIP.RDStdOWibsHTs0f08IQdUAHaEo&w=151&h=100&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"
            alt=""
          />
          <div className="absolute bottom-0 left-2 right-2 from-slate-900 to-yellow-900">
            <div className="font-medium text-gray-50 text-xl">Hotel Neme</div>
            <div className="flex justify-between">
              <div className="text-gray-50">New York City</div>
              <div className="text-gray-50">200 Rooms</div>
            </div>
            ,
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
