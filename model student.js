const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: String,
  average: Number,
  grade: String,
  status: String
});

module.exports = mongoose.model("Student", studentSchema);
