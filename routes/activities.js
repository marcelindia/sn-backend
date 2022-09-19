const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ msg: "Get ALL" });
});

router.get("/:id", (req, res) => {
  res.json({ msg: "Get One" });
});

router.post("/", (req, res) => {
  res.json({ msg: "Posted One" });
});

router.delete("/:id", (req, res) => {
  res.json({ msg: "Delete a activity" });
});

router.patch("/:id", (req, res) => {
  res.json({ msg: "Updated an activity!" });
});
module.exports = router;
