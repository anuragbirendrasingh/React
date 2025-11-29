import React, { useEffect, useState } from "react";
import { Home_Page_Api, Image_Base_URL } from "../../utils/common_url";

const Home = () => {
  const [foodList, setFoodList] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await fetch(Home_Page_Api);
      const json = await res.json();
      setFoodList(json?.data?.cards || []);
    })();
  }, []);

  const gridData =
    foodList
      .map((c) => c?.card?.card?.imageGridCards?.info)
      .find(Boolean) || [];

  return (
    <>
      <h1 className="text-xl font-semibold mb-4 px-4">
        What's on your mind?
      </h1>

    
      <div className="flex overflow-x-auto gap-4 px-4 pb-2 scrollbar-none">

        {gridData.map((item) => (
          <div
            key={item.id}
            className="shrink-0 w-28 h-28 md:w-32 md:h-32 rounded-lg overflow-hidden"
          >
            <img
              src={Image_Base_URL + item.imageId}
              alt=""
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        ))}

      </div>
    </>
  );
};

export default Home;



