// import React from "react";
// import { useEffect } from "react";
// import { useState } from "react";

import { useEffect, useMemo, useState } from "react";

// const App = () => {
//   const [count, setCount] = useState(0);
//   const [num, setNum] = useState("");
//   const [sum, setSum] = useState("");

//   const handleClick = () => {
//     setCount(count + 1);
//     console.log(count);
//     console.log(num);
//     // calSum(num);
//   };

//   function calSum(num) {
//     console.log(`The sum called : ${num} : ${sum}`);

//     let ans = (num * (num + 1)) / 2;
//     console.log(ans);
//     setSum(ans);
//   }

//   useEffect(() => {
//     // calculate the sum function
//     // calSum(num);
//     calSum(num);
//   }, [count]);

//   return (
//     <div>
//       <input
//         value={num}
//         onChange={(e) => setNum(e.target.value)}
//         type="text"
//         placeholder="Enter the number"
//       />
//       <p>The sum is : {sum}</p>
//       <button onClick={handleClick}>Counter ({count})</button>
//     </div>
//   );
// };

// export default App;

// const App = () => {
//   const [count, setCount] = useState(0);
//   const [num, setNum] = useState(0);
//   const [ans, setAns] = useState(0);

//   const increaseCount = () => {
//     setCount(count + 1);
//   };

//   const calculateSum = (n) => {
//     let temp = (n * (n + 1)) / 2;
//     console.log(n, temp);
//     setAns(temp);
//   };

//   const handleInputChange = (e) => {
//     const val = parseInt(e.target.value);
//     console.log(typeof val);
//     setNum(val);
//     calculateSum(val);
//   };

//   return (
//     <div>
//       <input
//         type="number"
//         placeholder="Enter the number"
//         value={num}
//         onChange={(e) => handleInputChange(e)}
//       />
//       <p>The sum is {ans}</p>
//       <button onClick={increaseCount}>Counter {count}</button>
//     </div>
//   );
// };

// export default App;

// import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState(1);

  let count = useMemo(() => {
    let finalCount = 0;
    for (let i = 1; i <= inputValue; i++) {
      finalCount = finalCount + i;
    }
    console.log("useMemo called");
    return finalCount;
  }, [inputValue]);

  return (
    <div>
      <input
        onChange={function (e) {
          setInputValue(e.target.value);
        }}
        placeholder={"Find sum from 1 to n"}
      ></input>
      <br />
      Sum from 1 to {inputValue} is {count}
      <br />
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Counter ({counter})
      </button>
    </div>
  );
}

export default App;
