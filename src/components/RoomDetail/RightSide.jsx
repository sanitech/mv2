import React from "react";
import RelatedHotelCard from "./RelatedHotelCard";
import AboutHotel from "./AboutHotel";
const RightSide = () => {
  const room = [
    {
      room_name: "Room 1",
      description: "This is the first room",
      amenities: ["Wifi", "TV", "Breakfast"],
      price_per_night: 100.0,
      room_id: 1,
      image_url: "https://via.placeholder.com/150",
      rating: 4.5,
      reviews: 10,
      bedrooms: 2,
      bathrooms: 1,
      capacity: 4,
      guests: 2,
      shared_bathrooms: 1,
      family_friendly: false,
      pet_friendly: true,
      smoking_friendly: false,
    },
    {
      room_name: "Room 1",
      description: "This is the first room",
      amenities: ["Wifi", "TV", "Breakfast"],
      price_per_night: 100.0,
      room_id: 1,
      image_url: "https://via.placeholder.com/150",
      rating: 4.5,
      reviews: 10,
      bedrooms: 2,
      bathrooms: 1,
      capacity: 4,
      guests: 2,
      shared_bathrooms: 1,
      family_friendly: false,
      pet_friendly: true,
      smoking_friendly: false,
    },
    {
      room_name: "Room 1",
      description: "This is the first room",
      amenities: ["Wifi", "TV", "Breakfast"],
      price_per_night: 100.0,
      room_id: 1,
      image_url: "https://via.placeholder.com/150",
      rating: 4.5,
      reviews: 10,
      bedrooms: 2,
      bathrooms: 1,
      capacity: 4,
      guests: 2,
      shared_bathrooms: 1,
      family_friendly: false,
      pet_friendly: true,
      smoking_friendly: false,
    },
  ];
  return (
    <div className="flex-1 ">
      <div className="relative">
        <div className="w-full h-96 bg-black rounded-xl object-cover absolute inset-0">
          <img
            className="w-full h-full"
            src="https://www.bing.com/th?id=OIP.RDStdOWibsHTs0f08IQdUAHaEo&w=151&h=100&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"
            alt=""
          />
        </div>

        <div className=" flex gap-2 absolute top-5 right-5">
          <div className="rounded-full bg-gray-50/15 text-gray-50 px-2 py-2 border-gray-300 border">
            Room 4/10
          </div>
          <div className="rounded-full bg-gray-50/15 text-gray-50 px-2 py-2 border-gray-300 border">
            building
          </div>
          <div className="rounded-full bg-gray-50/15 text-gray-50 px-2 py-2 border-gray-300 border">
            Room 4/10
          </div>
          <div className="rounded-full bg-gray-50/15 text-gray-50 px-2 py-2 border-gray-300 border">
            Room 4/10
          </div>
        </div>

        <div className="flex space-y-2 absolute bottom-5 left-5">
          <h1>Hoteal Name</h1>
          <div className="bg-slate-100 border-gray-300 border ">
            Start from 144
          </div>
        </div>
      </div>
      <div className="flex flex-row">
        <AboutHotel />
        <div className="space-y-3">
          {room.map((room) => (
            <RelatedHotelCard room={room} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RightSide;
