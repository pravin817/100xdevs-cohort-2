const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  title: String,
  description: String,
});

const Todo = mongoose.model("todo", TodoSchema);
module.exports = { Todo };
