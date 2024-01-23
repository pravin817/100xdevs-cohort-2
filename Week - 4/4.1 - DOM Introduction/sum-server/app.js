const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("The server is up");
});

app.get("/sum", (req, res) => {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);

  const ans = a + b;
  res.send(ans.toString());
});

app.get("/interest", (req, res) => {
  const principal = parseInt(req.query.principal);
  const rate = parseInt(req.query.rate);
  const time = parseInt(req.query.time);

  let interst = (principal * rate * time) / 100;

  let amount = principal + interst;

  console.table([principal,rate,time])

  res.json({
    amount,
    interst,
  });
});

app.listen(PORT, () => {
  console.log(`The server is running at : http://localhost:${PORT}`);
});
