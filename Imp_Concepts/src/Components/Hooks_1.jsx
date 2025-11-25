import React, { useState } from "react";
import { arr } from "../utils/mockData";

// filter expect a boolean value so it will not update the UI.
export const Ui_Updation_Using_Filter = () => {
  return (
    <div>
      {arr.filter((item, index) => {
        if (item.age > 15) {
          console.log(item);

          return (
            <div key={index}>
              <ul>
                {item.name} {" - > " + item.age}
              </ul>
            </div>
          );
        }
      })}
    </div>
  );
};

// first filter the array then update te ui using map

export const UI_Updation_Using_Filter_Map = () => {
  const filteredArr = arr.filter((item, index) => {
    return item.age > 15;
  });
  return (
    <div>
      {filteredArr.map((item, index) => {
        const { age } = item;
        return (
          <div key={index}>
            <ul>
              {item.naam} {" - > " + age}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

// UI updation using the state

export const UI_Updation_Using_State = () => {
  // const[data,setData] = useState(arr);

  const arr1 = useState(arr);
  const data = arr1[0];
  const setData = arr1[1];

  const updatedData = () => {
    const filterdData = data.filter((item) => {
      return item.age > 15;
    });
    setData(filterdData);
  };

  const showAll = () => {
    setData(arr);
  };

  return (
    <>
      <button onClick={updatedData}>filterData</button>

      {/* <button onClick=    { data.map((item,index)=>{
                return <ul key={index}>{item.naam} + {item.age} </ul>
           })
        }>ShowAll</button> */}

      <button onClick={showAll}>Showl All</button>

      {data.map((item, index) => {
        return (
          <ul key={index}>
            {item.naam} + {item.age}{" "}
          </ul>
        );
      })}
    </>
  );
};
