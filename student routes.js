const express = require("express");
const router = express.Router();
const Student = require("../models/Student");

// helper function
function getGrade(avg) {
  if (avg >= 75) return "A";
  if (avg >= 65) return "B";
  if (avg >= 50) return "C";
  if (avg >= 40) return "D";
  return "F";
}

// ADD student (fixed)
router.post("/add", async (req, res) => {
  try {
    const { name, math, science, english } = req.body;

    const average = ((math + science + english) / 3).toFixed(1);

    const student = new Student({
      name,
      average: Number(average),
      grade: getGrade(average),
      status: average >= 50 ? "Pass" : "Fail"
    });

    await student.save();
    res.json(student);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET students
router.get("/", async (req, res) => {
  const students = await Student.find().sort({ average: -1 });
  res.json(students);
});

module.exports = router;
