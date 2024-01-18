const express = require("express");
const zod = require("zod");

const app = express();
const port = 3000;

//  Doubt: How to write get the error message

const schema = zod.string().email();
const response = schema.safeParse("tsrdfgyhij");

console.log(response.errors);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/health-checkup", (req, res) => {
  console.log(req.body.kidneys.length);

  res.send({
    msg: "All right",
  });
});

// Define a global error handler

app.use((err, req, res, next) => {
  console.log(err);
  res.json({
    msg: "Something went wrong",
  });
});

app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
