/*
    const express = require("express");

    const app = express();

    const PORT = 3000;

    function ticketChecker(req, res, next) {
    const ticket = req.query.ticket;

    if (ticket === "free") {
        next();
    } else {
        res.status(401).json({
        msg: "You need a valid ticket",
        });
    }
    }

    app.use(ticketChecker);

    app.get("/", (req, res) => {
    res.send("The server is running");
    });

    app.get("/ride1", (req, res) => {
    res.send("You rode the first ride!");
    });

    app.get("/ride2", (req, res) => {
    res.send("You rode the second ride!");
    });

    app.get("/ride3", (req, res) => {
    res.send("You rode the third ride!");
    });

    app.listen(PORT, () => {
    console.log(`The server is running at : http://localhost:${PORT}/`);
    });
*/

const express = require("express");
const PORT = 3000;
const app = express();

function isOldEnough(age) {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}

function isOldEnoughUsingMiddleware(req, res, next) {
  let age = req.query.age;

  if (age >= 18) {
    next();
  } else {
    res.status(411).json({
      msg: "Sorry you are not allowed from middleware",
    });
  }
}

// use the middleware
app.use(isOldEnoughUsingMiddleware);

app.get("/", (req, res) => {
  res.send("The server is running");
});

app.get("/ride1", (req, res) => {
  res.json({
    msg: "You have successfully riden the ride 1",
  });
});

app.get("/ride2", (req, res) => {
  res.json({
    msg: "You have successfully riden the ride 2",
  });
});

app.listen(PORT, () => {
  console.log(`The server is running at : http://localhost:${PORT}/`);
});
