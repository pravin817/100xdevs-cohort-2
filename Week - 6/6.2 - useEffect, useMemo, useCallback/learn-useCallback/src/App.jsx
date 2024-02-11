/*
  import { memo, useCallback } from "react";
  import { useState } from "react";

  const App = () => {
    const [count, setCount] = useState(0);

    const handleClick = () => {
      setCount(count + 1);
    };

    // The simple function
    // let a = () => {
    //   console.log("nice with useCallback");
    // };

    let a = useCallback(function () {
      console.log("Nice");
    }, []);

    return (
      <div>
        <button onClick={handleClick}>Counter ({count})</button>

        <Demo a={a} />
      </div>
    );
  };

  // function Demo({ a }) {
  //   return (
  //     <div>
  //       <h1>Hello</h1>
  //     </div>
  //   );
  // }

  // The above is the simple function

  // Now memoize it

  const Demo = memo(function ({ a }) {
    // console.log(a);
    console.log("rerender");

    return <div>Helllo {a}</div>;
  });

  export default App;

*/

// useCallback example  ---Used to memoized the functions
/*

import { memo, useCallback, useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  // This is the normal function
  // const myFunction = () => {
  //   console.log("The my function called");
  // };

  // We can useCallback to avoid rerendering

  const myFunction = useCallback(function () {
    console.log("The function is called from the main");
  }, []);

  return (
    <div>
      <Child myFunction={myFunction} />
      <button onClick={() => setCount(count + 1)}>Click Me ({count})</button>
    </div>
  );
};

// function Child({ myFunction }) {
//   return (
//     <div>
//       <button onClick={myFunction}>The child Component Called</button>
//     </div>
//   );
// }

const Child = memo(function ({ myFunction }) {
  console.log("the memo");
  return (
    <div>
      <button onClick={myFunction}>The child Component Called</button>
    </div>
  );
});
export default App;

*/

// Custom hooks

/*
import { useEffect, useState } from "react";

import axios from "axios";

function useTodos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get("https://sum-server.100xdevs.com/todos").then((res) => {
      setTodos(res.data.todos);
    });
  }, []);

  return todos;
}

const App = () => {
  const todos = useTodos();
  return (
    <div>
      {todos.map((todo) => (
        <Todo key={todo.id} title={todo.title} description={todo.description} />
      ))}
    </div>
  );
};

function Todo({ title, description }) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}

export default App;


*/

// Interview Question

import { useState } from "react";
const App = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    // console.log("Hello");

    // setCount(count + 1);
    // setCount(count + 1);

    // The above code will increase the value of the count by one

    // If we want to incrase the value by two we need to pass the function to the setCount

    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      <button onClick={handleClick}>click Me ({count})</button>
    </div>
  );
};

export default App;
