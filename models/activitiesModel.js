const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const activitySchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Activity", activitySchema);
