// import { useState } from "react";

// function App() {

//   return (
//     <>
//       <HeaderWithButton />
//       <Header title={"title 2"} />
//     </>
//   );
// }

// //  Push the state down to it
// function HeaderWithButton() {
//   const [newTitle, setNewTitle] = useState("My Name is Pravin");

//   function changeTitle() {
//     setNewTitle("My name is "+Math.random());
//   }

//   return (
//     <div>
//       <button onClick={changeTitle}>Change the title</button>
//       <Header title={newTitle} />
//     </div>
//   );
// }

// function Header({ title }) {
//   console.log("Rerendered");
//   return <div>{title}</div>;
// }

// export default App;

// Use the ReactMemo

import React, { useState } from "react";

function App() {
  const [title1, setTitle1] = useState("My name is Pravin");

  const handleClick = () => {
    let title = `My name is  ${Math.random()}`;

    // console.log(title);

    setTitle1(title);
  };

  return (
    <div>
      <button onClick={handleClick}>Change the title</button>
      <Header title={title1} />
      <Header title={"title 2"} setTitle1= {setTitle1}/>
      <Header title={"title 2"} />
      <Header title={"title 2"} />
      <Header title={"title 2"} />
      <Header title={"title 2"} />
      <Header title={"title 2"} />
    </div>
  );
}

// The simple component
/*
    function Header({ title }) {
      console.log("Rerendered");
      return <div>{title}</div>;
    }

*/

// memoized components
const Header = React.memo(function Header({ title }) {
  console.log("Rerendered");


  // setTitle1("Hello")
  return <div>{title}
  
</div>;
});

export default App;
