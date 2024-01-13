const express = require("express");

const app = express();
const PORT = 3000;

// midddleware
app.use(express.json());

let users = [
  {
    name: "Pravin",
    kidneys: [
      {
        healthy: false,
      },
      {
        healthy: true,
      },
    ],
  },
];

app.get("/", (req, res) => {
  const johnKidney = users[0].kidneys;
  console.log(johnKidney);

  let numberofKidney = johnKidney.length;
  let cntHealthyKidney = 0;

  for (let i = 0; i < johnKidney.length; i++) {
    if (johnKidney[i].healthy === true) {
      cntHealthyKidney++;
    }
  }

  let cntUnhealthyKidney = numberofKidney - cntHealthyKidney;

  console.log("The healthy Kideny is: ", cntHealthyKidney);
  res.json({
    numberofKidney,
    cntUnhealthyKidney,
    cntHealthyKidney,
  });
});

// add kidney
app.post("/", (req, res) => {
  const isHealthy = req.body.isHealthy;

  users[0].kidneys.push({
    healthy: isHealthy,
  });
  res.json({
    msg: "Done",
  });
});

// Update the kidneys

app.put("/", (req, res) => {
  // make all the kidnenies healthy.

  for (let i = 0; i < users[0].kidneys.length; i++) {
    users[0].kidneys[i].healthy = true;
  }

  res.send({
    msg: "All kidneys are healthy now",
  });
});

// removing all the unhealhty kidneys
app.delete("/", function (req, res) {
  if (isThereAtleastOneUnhealthyKidney()) {
    const newKidneys = [];
    for (let i = 0; i < users[0].kidneys.length; i++) {
      if (users[0].kidneys[i].healthy) {
        newKidneys.push({
          healthy: true,
        });
      }
    }
    users[0].kidneys = newKidneys;
    res.json({ msg: "done" });
  } else {
    res.status(411).json({
      msg: "You have no bad kidneys",
    });
  }
});

function isThereAtleastOneUnhealthyKidney() {
  let atleastOneUnhealthyKidney = false;
  for (let i = 0; i < users[0].kidneys.length; i++) {
    if (!users[0].kidneys[i].healthy) {
      atleastOneUnhealthyKidney = true;
    }
  }
  return atleastOneUnhealthyKidney;
}

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
