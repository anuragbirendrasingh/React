import { useEffect, useState } from "react";

export const Fun1 = () => {
  const [count, setCount] = useState(0);

  // case -1 // with no dependency array
  useEffect(() => {
    console.log("with no dependency array");
  });

  // case - 2 // with empty dependency array
  useEffect(() => {
    console.log("with empty dependency array");
  },[]);

  // case -3 // with empty dependecy array value
  useEffect(() => {
    console.log("with value of  dependency array");
  },[count]);
  const inc = () => {
    // setCount(prev => prev + 1)
    setCount((prev) => {
      return prev + 1;
    });
  };
  return (
    <>
      <h1>First Time UI MOUNT</h1>
      <button onClick={inc}>+</button>
      <p>{count}</p>
    </>
  );
};
