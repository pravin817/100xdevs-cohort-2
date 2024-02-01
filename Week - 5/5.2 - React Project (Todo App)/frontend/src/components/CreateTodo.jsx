import { useState } from "react";

const CreateTodo = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, description);

    fetch("http://localhost:3000/todos", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        description: description,
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => {
        const json = res.json();
        alert("todo added");
      })
      .catch((err) => {
        console.log("There is issue while adding todo", err);
        alert("error while adding todo");
      });
  };
  return (
    <div>
      <div>
        <label>Title</label>
        <input
          type="text"
          placeholder="Enter the title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label>Description</label>
        <input
          type="text"
          placeholder="Enter the Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default CreateTodo;
