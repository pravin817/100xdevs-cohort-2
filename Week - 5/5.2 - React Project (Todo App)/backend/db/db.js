const mongoose = require("mongoose");

// Connect to database
mongoose
  .connect(
    "mongodb+srv://codingstar2001:y6AD4xZq4gfAld17@cluster0.u6lonbd.mongodb.net/?retryWrites=true&w=majority"
  )
  .then((res) => {
    console.log(`The connection to DB is established successfully.`);
  })
  .catch((err) => {
    console.log(`The connection to DB failed ${err}`);
  });

const TodoSchema = new mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const Todo = mongoose.model("todo", TodoSchema);

module.exports = { Todo };
