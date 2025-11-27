import React from "react";

const Shimmer = () => {
  return (
    <div className="flex flex-wrap gap-5 mt-5">
      {Array(12).fill("").map((_, index) => (
        <div
          key={index}
          className="w-60 h-72 rounded-xl bg-gray-200 p-3 animate-pulse"
        >
    
          <div className="w-full h-36 bg-gray-300 rounded-lg"></div>

          
          <div className="h-4 bg-gray-300 rounded mt-4"></div>

    
          <div className="h-4 bg-gray-300 rounded mt-2"></div>
          <div className="h-4 bg-gray-300 rounded mt-2 w-2/3"></div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
