const zod = require("zod");

const createTodo = zod.object({
  title: zod.string(),
  description: zod.string(),
});

const updateTodo = zod.object({
  id: zod.string(),
});

// now exports this

module.exports = {
  createTodo: createTodo,
  updateTodo: updateTodo,
};
