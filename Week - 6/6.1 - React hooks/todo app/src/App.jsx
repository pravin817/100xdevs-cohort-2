/*

import { useState } from "react";

let counter = 4;
function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Todo 1",
      description: "Todo 1 description",
    },

    {
      id: 2,
      title: "Todo 2",
      description: "Todo 2 description",
    },
    {
      id: 3,
      title: "Todo 3",
      description: "Todo 3 description",
    },
    // {
    //   title: "Todo 4",
    //   description: "Todo 4 description",
    // },
    // {
    //   title: "Todo 5",
    //   description: "Todo 5 description",
    // },
    // {
    //   title: "Todo 6",
    //   description: "Todo 6 description",
    // },
    // {
    //   title: "Todo 7",
    //   description: "Todo 7 description",
    // },
  ]);

  function addTodo() {
    console.log("clicked");

    const newTodo = {
      id: counter++,
      title: Math.random(),
      description: Math.random() * 100 + 1,
    };

    setTodos((prev) => [...prev, newTodo]);
  }

  return (
    <>
      <button onClick={addTodo}>Add Todo</button>
      {todos.map((todo) => (
        <Todo key={todo.id} title={todo.title} description={todo.description} />
      ))}

    </>
  );
}

function Todo({ title, description }) {
  return (
    <div>
      <p>{title}</p>
      <p>{description}</p>
    </div>
  );
}
export default App;

*/

import { useEffect, useState } from "react";

// Wrapper component

/*
const App = () => {
  return (
    <div>

      <CardWrapper>
        <div>Hello</div>
        <TextComponent/>
      </CardWrapper>
    </div>
  );
};

function TextComponent() {
  return <div>Hello There</div>;
}

function CardWrapper({ children }) {
  console.log(children);
  return <div style={{ border: "2px solid red" }}>{children}</div>;
}

export default App;

*/

// useEffect

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setInterval(APICall, 1000);

    function APICall() {
      fetch("https://sum-server.100xdevs.com/todos")
        .then(async (res) => {
          const data = await res.json();
          const todo = data.todos;
          setTodos(todo);
          console.log(todo);
        })
        .catch((error) => {
          console.log("There is an error", error);
        });
    }
  }, []);
  return (
    <div>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          title={todo.title}
          description={todo.description}
          completed={todo.completed}
        />
      ))}
    </div>
  );
};

function Todo({ title, description, completed }) {
  return (
    <div>
      <h4>{title}</h4>
      <h5>{description}</h5>
      <button>{completed ? "Completed" : "Mark as Completed"}</button>
    </div>
  );
}

export default App;
