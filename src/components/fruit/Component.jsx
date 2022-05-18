import React, {useState} from "react";

export default function Component(props) {

  const [quantity, setValue] = useState(0);

  const add = () => {
    setValue(quantity+1)
  }

  const remove = () => {
    setValue(quantity-1)
  }

  const clean = () => {
    setValue(0)
  }
  return (
    <div className="m-4">
      <h3 className="font-black text-xl">{props.name}</h3>
      <p>Precio: {props.price}</p>
      <p>quantity: {quantity} </p>
      <p>
        <strong>Total:</strong> {props.price * quantity}
      </p>

      <button className="px-2 bg-slate-500 text-white font-black rounded" onClick={add}>+</button>
      <button className="px-2 bg-slate-500 text-white font-black rounded" onClick={remove}>-</button>
      <button className="px-2 bg-slate-500 text-white font-black rounded" onClick={clean}>Limpiar</button>
      <hr />
    </div>
  );
}
