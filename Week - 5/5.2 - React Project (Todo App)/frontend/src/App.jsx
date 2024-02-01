import { useEffect, useState } from "react";
import "./App.css";
import CreateTodo from "./components/CreateTodo";
import Todos from "./components/Todos";

function App() {
  const [todo, setTodo] = useState([]);

 useEffect(()=>{

   fetch("http://localhost:3000/todos")
   .then(async function (res) {
     const json = await res.json();
     setTodo(json.todos);
     console.log(todo)
    })
    .catch((err) => {
      console.log("error", err);
    });
    
  },[])


  return (
    <>
      <CreateTodo />
      <Todos
        todos={todo}
      />
    </>
  );
}

export default App;
