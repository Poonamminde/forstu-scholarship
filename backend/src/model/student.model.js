const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true, required: true },
  gender: { type: String, required: true },
  annual_income: { type: Number, required: true },
  academic_marks: { type: Number, required: true },
  disability: { type: String, required: true },
  category: { type: String, required: true },
  scholarship: { type: String, required: true },
});

const Student = mongoose.model("students", userSchema);

module.exports = Student;
