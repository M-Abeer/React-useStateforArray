import React, { useState } from "react";

const UseStateArray = () => {
  const arr = [
    {
      id: 0,
      myName: "Abeer",
      age: 25,
    },
    {
      id: 1,
      myName: "Khan",
      age: 20,
    },
  ];
  const [data, setData] = useState(arr);
  const clearData = () => {
    setData([]);
    if (data.length === 0) {
      setData(arr);
    }
  };
  console.log(data);
  return (
    <>
      {data.map((cur) => (
        <h1 className="usestate" key={cur.id}>
          Name is {cur.myName} and Age is {cur.age}
        </h1>
      ))}
      <button onClick={clearData}>Clear it!!</button>
    </>
  );
};

export default UseStateArray;
