const express = require("express");
const mongoose = require("mongoose");
const Activity = require("../models/activitiesModel");
const router = express.Router();

router.get("/", async (req, res) => {
  const activity = await Activity.find({});

  res.status(200).json(activity);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No activity found!" });
  }

  const activity = await Activity.findById(id);
  if (!activity) {
    return res.status(404).json({ error: "Activity Not Found" });
  }
  res.status(200).json(activity);
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
