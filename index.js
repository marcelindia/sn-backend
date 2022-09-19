require("dotenv").config();
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({ msg: "Welcome to API!" });
});

//process.env.PORT = tells app to take PORT by reading the env variable
app.listen(process.env.PORT, () => {
  console.log(`Listening!`);
});
