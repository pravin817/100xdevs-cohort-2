const express = require("express");
const zod = require("zod");
const app = express();
const port = 3000;

// define a schema

// const schema = zod.array(zod.number());

// Writing the ZOD Schema

/*

{
  email:string => email
  password:atleast 8 characters,
  country:"IN","US","UK"
}

*/

const schema = zod.object({
  email: zod.string(),
  password: zod.string(),
  country: zod.literal("IN").or(zod.literal("US")),
});

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/health-checkup", (req, res) => {
  const kidneys = req.body.kidneys;

  // const KindneyNumber = parseInt(kidneys);
  // console.log(KindneyNumber, typeof KindneyNumber);

  const response = schema.safeParse(kidneys);

  if (!response.success) {
    return res.status(400).json({
      msg: "Invalid data",
    });
  } else {
    res.send({
      response,
    });
  }

  res.send({
    response,
  });
});

// Global error handler
app.use((err, req, res, next) => {
  res.json({
    msg: "Something went wrong",
  });
});

// The app is listening on port 3000
app.listen(port, () => {
  console.log(`server is listening at http://localhost:${port}`);
});
