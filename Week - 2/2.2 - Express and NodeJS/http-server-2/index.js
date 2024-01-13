const express = require("express");

const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.send("This is Jaadhu");
});

app.get("/router-data", (req, res) => {
  res.json({
    name: "Pravin",
    age: 18,
  });
});

app.post("/postreq", (req, res) => {
  res.json({
    name: "Pravin",
    age: 18,
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
