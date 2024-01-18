/*
    const express = require("express");

    const app = express();

    const PORT = 3000;

    app.use(express.json());

    app.get("/health-checkup", (req, res) => {
    const kidneyId = req.query.kidneyId;
    const username = req.headers.username;
    const password = req.headers.password;

    // check the username and password
    if (username !== "admin" || password !== "admin") {
        res.status(403).json({
        msg: "User does't exist",
        });

        return;
    }

    // Check the kidneys user have

    console.table([kidneyId, username, password]);
    console.table([typeof kidneyId, typeof username, typeof password])

    if (kidneyId !== "1" && kidneyId !== "2") {
        res.status(411).json({
        msg: "Wrong input",
        });
        return;
    }

    // Check the kidney status

    return res.status(200).json({
        msg: "Kidney is healthy",
    });
    });

    app.listen(PORT, (req, res) => {
    console.log(`Server is running on port ${PORT}`);
    });

*/

// The optimised way by using the middlewares

const express = require("express");

const app = express();

const PORT = 3000;

let cnt = 0;

const RequestCount = (req, res, next) => {
  cnt++;
  console.log("The request count : ", cnt);
  next();
};

app.use(RequestCount);
app.use(express.json());

// Input Validation

app.post("/health-checkup", (req, res, next) => {
  const kidneys = req.body.kidneys;

  console.log(kidneys);
  // Handle the input validation

//   if (!kidneys) {
//     res.json({
//       msg: "Please enter the kidneys",
//     });
//     return;
//   }
  const len = kidneys.length;

  res.send("The length of kidneys are " + len);
});

// app.get("/health-checkup", (req, res) => {
//   const kidneyId = req.query.kidneyId;
//   const username = req.headers.username;
//   const password = req.headers.password;

//   // check the username and password
//   if (username !== "admin" || password !== "admin") {
//     res.status(403).json({
//       msg: "User does't exist",
//     });
//     return;
//   }

//   if (kidneyId !== "1" && kidneyId !== "2") {
//     res.status(411).json({
//       msg: "Wrong input",
//     });
//     return;
//   }

//   // Check the kidney status
//   return res.status(200).json({
//     msg: "Kidney is healthy",
//   });
// });


// Global Catches

app.use(function(err,req,res,next){
    res.json({
        msg: "Something went wrong on server, please wait for sometime"
    })
})


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
