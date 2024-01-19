// const express = require("express");
// const jwt = require("jsonwebtoken");
// const mongoose = require("mongoose");
// const jwtPassword = "12345";

// // coonect with the mongoDb
// mongoose.connect("MongoDB_URL");

// // define the user schema
// const User = mongoose.model("User",{
//     name:String,
//     username:String,
//     password:String,
// });

// const PORT = 3000;

// const app = express();
// app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("The server is running");
// });

// const userExists = (username, password) =>
//   ALL_USERS.some(
//     (user) => user.username === username && user.password === password
//   );

// app.post("/signin", (req, res) => {
//   const username = req.body.username;
//   const password = req.body.password;

// //   console.table([username, password]);

//   if (!userExists(username, password)) {
//     return res.status(403).json({
//       msg: "User doesn't exit in our memory Database",
//     });
//   }

//   const token = jwt.sign({ username: username }, jwtPassword);

//   // if the user exist in DB return the jwt token
//   return res.json({
//     token,
//   });
// });

// // Route to get the list of the people
// app.get("/users", (req, res) => {
//   const token = req.headers.authorization;

//   const decoded = jwt.verify(token, jwtPassword);
//   const username = decoded.username;

//   res.json({
//     users: ALL_USERS.filter((user) => user.username !== username),
//   });
// });

// app.listen(PORT, () => {
//   console.log(`The server is running at : http://localhost:${PORT}/`);
// });

const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

mongoose.connect(
  "mongodb+srv://admin1:xuLiIcnqpI4XQ0ec@cluster0.admn5vp.mongodb.net/"
);

const User = mongoose.model("User", {
  name: String,
  email: String,
  password: String,
});

const user = new User({
  name: "Pravin Mhaske",
  email: "Pravin@gmail.com",
  password: "heloo123",
});

// user.save().then((data) => {
//   console.log(data);
//   console.log("User Created sucessfully");
// });

app.get("/", (req, res) => {
  res.send("The server is running");
});

app.post("/signup", async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  // check if the user already exist in the database
  const userExists = User.findOne({ email: email });

  if (userExists) {
    return res.status(403).json({
      msg: "User already exist",
    });
  }

  // Else create the new user
  const user = new User({
    name: name,
    username: email,
    password: password,
  });

  // Save the user into the database
  user.save().then((data) => {
    console.log(data);
    res.json({
      msg: "User Created sucessfully",
    });
  });
});

app.listen(3000, () => {
  console.log("The server is running at http://localhost:3000");
});
