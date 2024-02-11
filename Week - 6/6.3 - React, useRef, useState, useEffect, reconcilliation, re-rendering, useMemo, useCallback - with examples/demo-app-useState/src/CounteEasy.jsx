import { useState } from "react";

export const CounterEasy = () => {
  const [count, setCount] = useState(0);
  const handleDecreamentCount = () => {
    if (count <= 0) {
      alert("Oh, Hello, we can't decrese the count more");
      return;
    } else {
      setCount(count - 1);
    }
  };

  return (
    <div>
      The current count is : {count}
      <button
        onClick={() => {
          if (count >= 10) {
            alert("Sorry we can't count more than 10");
            return;
          } else {
            setCount(count + 1);
          }
        }}
      >
        Increment Count
      </button>
      <button onClick={handleDecreamentCount}>Decrement Count</button>
    </div>
  );
};

export default CounterEasy;
