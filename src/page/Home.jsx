import React from "react";
import RoomCard from "../components/RoomCard";

const Home = () => {
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
    <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
      {room.map((room) => (
        <RoomCard room={room} />
        sifen
      ))}
    </div>
  );
};

export default Home;
