/*

  import React, { useState,useEffect } from "react";
  import axios from "axios";

  const App = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
      axios.get(`https://sum-server.100xdevs.com/todos`).then((res) => {
        const data = res.data.todos;
        console.log(data);
        setTodos(data);
      });
    }, []);
    return (
      <div>
        <Todo id={1} />
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
        <h4>{description}</h4>
      </div>
    );
  }
  export default App;

*/

import { useEffect, useState } from "react";

// The my ways of doing

/*


import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import axios from "axios";

const App = () => {
  const [id, setId] = useState(1);

  const handleClick = () => {
    setId(id + 1);
  };

  return (
    <div>
      <Todo id={id} />

      <button onClick={handleClick}>Change the Id : {id}</button>
    </div>
  );
};

function Todo({ id }) {
  const [todo, setTodo] = useState([]);

  console.log(id);

  // call the backend

  useEffect(() => {
    axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`).then((res) => {
      const data = res.data.todo;
      console.log(data);

      // set the data
      setTodo(data);
    });
  }, [id]);

  return (
    <div>
      <h3>{todo?.title}</h3>
      <h5>{todo?.description}</h5>
    </div>
  );
}

export default App;

*/

/*

import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [id, setId] = useState(1);

  return (
    <div>
      <button
        onClick={() => {
          setId(1);
          console.log(id);
        }}
      >
        1
      </button>
      <button
        onClick={() => {
          setId(2);
          console.log(id);
        }}
      >
        2
      </button>
      <button
        onClick={() => {
          setId(3);
          console.log(id);
        }}
      >
        3
      </button>
      <button
        onClick={() => {
          setId(4);
          console.log(id);
        }}
      >
        4
      </button>
      <Todo id={id} />
    </div>
  );
}

function Todo({ id }) {
  const [todo, setTodo] = useState({});

  useEffect(() => {
    fetch(`https://sum-server.100xdevs.com/todo?id=${id}`).then(async function (
      res
    ) {
      const json = await res.json();
      setTodo(json.todo);
    });
  }, [id]);

  return (
    <div>
      ID : {id}
      <h1>{todo.title}</h1>
      <h4>{todo.description}</h4>
    </div>
  );
}

export default App;

*/

/*
import axios from "axios";

const App = () => {
  const [todos, setTodos] = useState([]);

  // call backend API

  useEffect(() => {
    axios.get("https://sum-server.100xdevs.com/todos").then((res) => {
      const data = res.data.todos;
      console.log(data);
      setTodos(data);
    });
  }, []);
  return (
    <h1>
      {todos.map((todo) => (
        <Todo key={todo.id} title={todo.title} description={todo.description} />
      ))}
    </h1>
  );
};

function Todo({ title, description }) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
export default App;

*/

// Assignment based on todoid

/*
import axios from "axios";

const App = () => {
  return (
    <div>
      <Todo id={1} />
    </div>
  );
};

function Todo({ id }) {
  console.log(id);

  const [todo, setTodo] = useState([]);

  useEffect(() => {
    axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`).then((res) => {
      const data = res.data.todo;
      console.log(data);

      setTodo(data);
    });
  }, []);

  // make the Backend API Call

  return (
    <div>
      <h1>{todo.title}</h1>
      <h4>{todo.description}</h4>
    </div>
  );
}

export default App;

*/

// Updated Assignment

import axios from "axios";

const App = () => {
  const [selectedId, setSelectedId] = useState(1);

  return (
    <div>
      <button onClick={() => setSelectedId(1)}>1</button>
      <button onClick={() => setSelectedId(2)}>2</button>
      <button onClick={() => setSelectedId(3)}>3</button>
      <button onClick={() => setSelectedId(4)}>4</button>

      <Todo id={selectedId} />
    </div>
  );
};

function Todo({ id }) {
  console.log(id);

  const [todo, setTodo] = useState([]);

  useEffect(() => {
    axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`).then((res) => {
      const data = res.data.todo;
      console.log(data);

      setTodo(data);
    });
  }, [id]);

  // make the Backend API Call

  return (
    <div>
      ID : {id}
      <h1>{todo.title}</h1>
      <h4>{todo.description}</h4>
    </div>
  );
}

export default App;
