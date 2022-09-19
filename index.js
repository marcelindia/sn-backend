const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({ msg: "Welcome to API!" });
});

app.listen(3000, () => {
  console.log(`Listening!`);
});
