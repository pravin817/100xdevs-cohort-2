const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "secret";

const PORT = 3000;
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("The server is running");
});

// The memory DB
const ALL_USERS = [
  {
    username: "pravinmhaske817@gmail.com",
    password: "123",
    name: "Pravin Mhaske",
  },
  {
    username: "raman@gmail.com",
    password: "123321",
    name: "Raman singh",
  },
  {
    username: "priya@gmail.com",
    password: "123321",
    name: "Priya kumari",
  },
];

const userExists = (username, password) =>
  ALL_USERS.some(
    (user) => user.username === username && user.password === password
  );

app.post("/signin", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  console.table([username, password]);

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesn't exit in our memory Database",
    });
  }

  const token = jwt.sign({ username: username }, jwtPassword);

  // if the user exist in DB return the jwt token
  return res.json({
    token,
  });
});

// Route to get the list of the people
app.get("/users", (req, res) => {
  const token = req.headers.authorization;

  const decoded = jwt.verify(token, jwtPassword);
  const username = decoded.username;

  res.json({
    users: ALL_USERS.filter((user)=> user.username !== username)
  });
});

app.listen(PORT, () => {
  console.log(`The server is running at : http://localhost:${PORT}/`);
});
