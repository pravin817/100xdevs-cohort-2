import React, { useEffect, useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
    console.log("Clicked");
  };

  return (
    <div>
      <button onClick={handleClick}>The count is {count}</button>
    </div>
  );
};

export default App;
