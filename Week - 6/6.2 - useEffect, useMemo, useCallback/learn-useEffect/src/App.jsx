import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    console.log("clicked");
    setCount(count + 1);
  };

  useEffect(() => {
    console.log("Hello");
  }, [count]);
  return (
    <div>
      <button onClick={handleClick}>Click Me {count}</button>
    </div>
  );
};

export default App;
