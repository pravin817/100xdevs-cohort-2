import ReactDOM from "react-dom/client";

import App from "./App";
import { Demo, Test } from "./Demo";
import { Hello } from "./App";
import { CounterApp2 } from "./CounterApp";

// now define the simple function to show the details about the useState hook
const UseStateDetails = () => {
  return (
    <div>
      <h1>useState hook</h1>
      <p>
        useState is a hook that allows you to have state variables in functional
        components. You pass the initial state to this function and it returns a
        variable with the current state value (not necessarily the initial
        state) and another function to update this value.
      </p>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <div>
    {/* Use the below function here  */}

    <UseStateDetails />

    {/* Now use the App  */}

    <App />

    {/* Now import the Demo component and use it here */}

    <Demo />
    <Test />
    <Hello />

    <CounterApp2/>


    
  </div>
);
