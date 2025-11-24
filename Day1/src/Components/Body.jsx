import React from "react";
import cards from "../utils/mock_data";
import { RES_URL } from "../utils/common_url";

const Body = () => {
  return (
    <div>
      <div>
        <input type="text" placeholder="search..." />
      </div>

      <div className="resContainer">
        {cards.map((item) => {
          const restaurant = item?.card?.card?.info;
          if (!restaurant) return null;

          const {
            id,
            name,
            cloudinaryImageId,
            areaName,
            costForTwo,
            avgRating,
            cuisines,
          } = restaurant;

          //   console.log(restaurant.cloudinaryImageId);

          return (
            <div className="res" key={id}>
              <h1>{name}</h1>

              <img src={RES_URL + cloudinaryImageId} alt={name} />

              <p>{cuisines.join(", ")}</p>
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
