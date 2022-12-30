import { useState } from "react";

export default function UseStateHook() {
  const [number, setNumber] = useState(1);

  const increment = () => {
    setNumber(number + 1);
  };

  const decrement = () => {
    setNumber(number - 1);
  };

  return (
    <div>
      <h1>Hello! {number}</h1>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
}
