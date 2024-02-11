import { useRef } from "react";

const App = () => {
  const showRef = useRef();
  let showValue = 1000;

  setTimeout(() => {
    console.log("demo");
    console.log(showRef);
    showRef.current.innerHTML = "00";
  }, 1000);

  return (
    <div>
      The value tobe showned is : <span ref={showRef}>{showValue}</span>
    </div>
  );
};

export default App;
