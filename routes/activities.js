const express = require("express");
const Activity = require("../models/activitiesModel");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ msg: "Get ALL" });
});

router.get("/:id", (req, res) => {
  res.json({ msg: "Get One" });
});

router.post("/", async (req, res) => {
  const { title, description, type } = req.body;

  try {
    const activity = await Activity.create({ title, description, type });
    res.status(200).json(activity);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete("/:id", (req, res) => {
  res.json({ msg: "Delete a activity" });
});

router.patch("/:id", (req, res) => {
  res.json({ msg: "Updated an activity!" });
});
module.exports = router;
