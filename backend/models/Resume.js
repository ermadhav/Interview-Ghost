const mongoose = require("mongoose");

const resumeSchema = new mongoose.Schema({
  name: String,
  summary: String,
  experience: String,
  education: String,
  skills: String,
});

module.exports = mongoose.model("Resume", resumeSchema);
