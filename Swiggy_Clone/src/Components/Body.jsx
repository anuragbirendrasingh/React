
import React, { useEffect, useState } from "react";
import { RES_URL } from "../utils/common_url";

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);

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

  if(restaurants.length === 0){
    return(<h1>Loading....</h1>)
  }

  return (
    <div>
      <div>
        <input type="text" placeholder="search..." />
      </div>

  

      <div className="resContainer">
        {restaurants.map((restaurant) => {
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
            <div className="res" key={id}>
              <h1>{name}</h1>
              <img src={RES_URL + cloudinaryImageId} alt={name} />

              <p>{cuisines?.join(", ")}</p>
              <h4>{areaName}</h4>
              <h3>{costForTwo}</h3>
              <h5>{avgRating}</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
