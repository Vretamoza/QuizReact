import { useState, useEffect } from "react";
import Fruit from "./Fruit";
export default function FruitList() {
  let fruits = useState(() => {
    const fruitValues = localStorage.getItem("fruits");
    if (fruitValues) return JSON.parse(fruitValues);
    return [];
  });

  return (
    <div className="flex">
      {fruits[0].map(({name, price}, index) => (
        <Fruit
          key={index}
          name={name}
          price={price}
        />
      ))}
    </div>
  );
}
