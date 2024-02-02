const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, lowercase: true, required: true },
  enrollmentDate: { type: Date, required: true },
  state: { type: String, default: "Maharashtra" },
});

const Student = mongoose.model("profile", userSchema);

module.exports = Student;
