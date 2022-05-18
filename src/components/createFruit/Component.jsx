import React, {useState} from "react";

export default function Component () {
  const [fruits, setFruits] = useState([]);

  function createFruit (ev) {
    ev.preventDefault();

    const name = ev.target.querySelector('#fruitName');
    const price = ev.target.querySelector('#price');

    const fruit = {name: name.value, price: Number(price.value), quantity: 0};
    const updatedFruits = [...fruits, fruit];

    setFruits(updatedFruits);

    name.value = '';
    price.value = '';
}

  return (
    <div className="p-10 flex flex-col gap-3">
      <h1 className="text-4xl">Create Fruit</h1>
      <form onSubmit={ createFruit } className="flex flex-col">
        <label htmlFor="fruitName">Fruit name</label>
        <input type="text" id="fruitName" className="border w-44 border-black"/>
        <label htmlFor="price">Price</label>
        <input type="text" id="price" className="border w-44 border-black"/>
        <input type="submit" value="Submit" className="mt-2 py-1.5 px-10 bg-blue-500 rounded text-white font-black w-44"/>
      </form>
      <button className="py-1.5 px-10 bg-gray-500 rounded text-white font-black w-44">Return</button>
    </div>
  )
}
