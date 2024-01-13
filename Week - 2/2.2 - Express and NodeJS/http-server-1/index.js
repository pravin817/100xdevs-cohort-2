const express = require("express");
// const bodyParser = require("body-parser");

const app = express();

const port = 3000;

// app.use(bodyParser.json());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/", (req, res) => {
  console.log("The body : ", req.body);
  console.log("The query : ", req.query);
  console.log("The Headers : ", req.headers);
  // res.send("Hello World");

  res.status(401).send("Hello World");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
