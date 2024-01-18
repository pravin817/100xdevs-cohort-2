// Import zod here
const zod = require("zod");

// define a schema
const schema = zod.object({
  email: zod.string().email(),
  password: zod.string().min(8),
});

const validateInput = (obj) => {
  // use the schema to validate the object
  const response = schema.safeParse(obj);
  console.log(response);
};

// The object to be validated
const obj = {
  email: "Pravin@gmail.com",
  password: "12345678",
};

// Call the validateInput function
validateInput(obj);
