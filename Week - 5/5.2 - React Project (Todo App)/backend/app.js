const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

const { createTodo, updateTodo } = require("./types");
const { Todo } = require("./db/db");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const PORT = 3000;

// The default route

app.get("/", (req, res) => {
  res.send("The server is Upp");
});

app.post("/todos", (req, res) => {
  const createPayload = req.body;

  const parsePayload = createTodo.safeParse(createPayload);

  console.table([createPayload.title, createPayload.description]);

  if (!parsePayload.success) {
    res.status(411).json({
      msg: "You sent the wrong input",
    });

    return;
  }

  // save to mongoDB

  Todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false,
  })
    .then((result) => {
      res.status(200).json({
        msg: "The todo saved successfully",
      });
    })
    .catch((err) => {
      res.status(411).json({
        msg: "There is an issue with the saving the todo",
      });
    });
});

// get the list of all todo
app.get("/todos", async (req, res) => {
  // return the list of the todos

  try {
    const todos = await Todo.find({});

    res.status(200).json({
      todos: todos,
    });
  } catch (error) {
    res.status(411).json({
      msg: "There is issue with the todos",
    });
  }
});

app.put("/completed", async (req, res) => {
  const updatePayload = req.body;
  const payloadParse = updateTodo.safeParse(updatePayload);

  if (!payloadParse) {
    res.status(411).json({
      msg: "You send the wrong input",
    });

    return;
  }

  await Todo.update(
    {
      _id: req.body.id,
    },
    {
      completed: true,
    }
  );

  req.status(200).json({
    msg: "Todo updated successfully",
  });
});

app.listen(PORT, () => {
  console.log(`The server is running at : http://localhost:${PORT}`);
});
