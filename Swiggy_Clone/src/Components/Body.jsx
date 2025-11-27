import React, { useEffect, useState } from "react";
import { RES_URL } from "../utils/common_url";
import Shimmer from "./Shimmer";

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [res, setSearchRes] = useState("");

  useEffect(() => {
    jsonData();
  }, []);

  const jsonData = async () => {
    const swiggyData = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5959804&lng=77.3026459&collection=83631&tags=layout_CCS_Pizza&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    );

    const data_res = await swiggyData.json();

    const arrayOfCards = data_res?.data?.cards || [];

    const extracted = arrayOfCards
      .map((c) => c?.card?.card?.info)
      .filter(Boolean);

    setRestaurants(extracted);
  };

  const filteredRes = restaurants.filter((item) => {
    return item.name.toLowerCase().includes(res.toLowerCase());
  });

  if (restaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="p-6">

      {/* Search Box */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search restaurants..."
          value={res}
          onChange={(e) => setSearchRes(e.target.value)}
          className="border border-gray-400 rounded-lg px-4 py-2 w-80 
                     outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>

      {/* Restaurants Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
                      lg:grid-cols-4 gap-6">

        {filteredRes.map((restaurant) => {
          const {
            id,
            name,
            cloudinaryImageId,
            cuisines,
            areaName,
            costForTwo,
            avgRating,
          } = restaurant;

          return (
            <div
              key={id}
              className="bg-white rounded-xl shadow-md p-4 cursor-pointer 
                         hover:scale-105 transition-all duration-200"
            >
              <img
                src={RES_URL + cloudinaryImageId}
                alt={name}
                className="w-full h-40 object-cover rounded-lg mb-3"
              />

              <h1 className="font-semibold text-lg mb-1">{name}</h1>

              <p className="text-sm text-gray-600">
                {cuisines?.join(", ")}
              </p>

              <h4 className="text-sm text-gray-500">{areaName}</h4>

              <div className="flex justify-between mt-2 items-center">
                <h3 className="font-medium">{costForTwo}</h3>

                <span
                  className={`px-2 py-1 rounded-md text-white text-sm ${
                    avgRating >= 4 ? "bg-green-500" : "bg-orange-500"
                  }`}
                >
                  ⭐ {avgRating}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
