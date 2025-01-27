import { Rating } from "@mui/material";
import React, { useState } from "react";
import PlaceDetails from "../placeDetails/PlaceDetails";

const List = () => {
  const [type, setType] = useState("Restaurant");
  const [rating, setRating] = useState(5);
  const [value, setValue] = useState(2);

  const places = [
    { name: "Cool Place" },
    { name: "Best Chats" },
    { name: "Best Non-veg Dishes" },
    { name: "Best Veg Dishes" },
    { name: "Cool Place" },
    { name: "Best Chats" },
    { name: "Best Non-veg Dishes" },
    { name: "Best Veg Dishes" },
    { name: "Cool Place" },
    { name: "Best Chats" },
    { name: "Best Non-veg Dishes" },
    { name: "Best Veg Dishes" },
    { name: "Cool Place" },
    { name: "Best Chats" },
    { name: "Best Non-veg Dishes" },
    { name: "Best Veg Dishes" },
  ];

  return (
    <>
      <div className="p-4 h-[90vh]  container">
        <div className="text-2xl mb-4">
          Restaurants, Hotels & Attractions around you{" "}
        </div>
        <div className="flex gap-8 items-center mb-4">
          <div>
            <label className="block">Type</label>
            <select
              className="px-4 py-2 border rounded-lg"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option>Select Type</option>
              <option>Restaurant </option>
              <option>Hotel</option>
              <option>Attraction</option>
            </select>
          </div>
          <div>
            <label className="block">Rating</label>
            <select
              className="px-4 py-2 border rounded-lg"
              value={rating}
              onChange={(e) => setRating(e.target.rating)}
            >
              <option>All</option>
              <option value={3}>Above 3</option>
              <option value={4}>Above 4</option>
              <option value={5}>Above 5</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 h-2/3 overflow-y-scroll">
          {places.map((place, index) => (
            <PlaceDetails place={place} />
          ))}
        </div>
      </div>
    </>
  );
};

export default List;
