import { useState } from "react";

const CounterApp = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    // Increament the value of count by one
    setCount(count + 1);
  };
  return (
    <div>
      <button onClick={handleClick}>Count : ({count})</button>
    </div>
  );
};

export default CounterApp;
