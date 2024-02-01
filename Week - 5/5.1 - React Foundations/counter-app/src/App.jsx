import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  // console.log(count);
  // console.log(setCount)

  // return <CustomButton count={count} setCount={setCount} />;

  return (
    <>
      {/* <CustomButton count={count} setCount={setCount} /> */}
      {/* <TodoComponent /> */}
      <Sum a={a} b={b} />

      <button onClick={() => setA(a + 30)}>Increase the A by 30</button>
      <button onClick={() => setB(b - 50)}>Decrease the B by 50</button>
    </>
  );
}

// custom sum component

function Sum({ a, b }) {
  console.log("rerender");
  // console.log(a)
  return (
    <div>
      <p>A : {a}</p>
      <p>B : {b}</p>
      <p>Hello sum is : {a + b} </p>

    </div>
  );
}

// custom components
function CustomButton(props) {
  return (
    <button
      onClick={() => {
        props.setCount(props.count + 1);
      }}
    >
      Counter :{props.count}
    </button>
  );
}

function TodoComponent() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Go to Gym",
      description: "From 5-6",
      completed: true,
    },
    {
      id: 2,
      title: "Learn web",
      description: "From 7-9",
      completed: false,
    },
    {
      id: 3,
      title: "Learn DSA",
      description: "From 9-10",
      completed: false,
    },
  ]);
  return (
    <div>
      {/* {JSON.stringify(todo)} */}
      {/* <ShowTodo props={todo}/> */}

      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <ShowTodo key={todo.id} props={todo} />
          </div>
        );
      })}
    </div>
  );
}

// components to show the todo

function ShowTodo(props) {
  // destucture

  const { title, description, completed } = props.props;
  return (
    <>
      <h4>{title}</h4>
      <h4>{description}</h4>
      {completed ? <h4>Done</h4> : <h4>Pending</h4>}
    </>
  );
}
export default App;
