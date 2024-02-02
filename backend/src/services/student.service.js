const Student = require("../model/student.model");

const addStudentDetailsService = async (data) => {
  console.log("student details");
  try {
    const student = new Student({ ...data }); //new Student({email: data.email, category: data.category, gender:data.gender,academic_marks:data});
    return await student.save();
  } catch {}
};

const getAllStudent = async () => {
  console.log("all students");
  const students = await Student.find({});
  console.log(students);
  return students;
};

const deleteStudentById = async (id) => {
  const result = await Student.deleteOne({ _id: id });
  return result;
};

const updateStudentById = async (id, object) => {
  console.log("update student");
  const result = await Student.updateOne(
    { _id: id },
    { $set: { ...object } },
    { new: true }
  );
  return result;
};

module.exports = {
  addStudentDetailsService,
  getAllStudent,
  deleteStudentById,
  updateStudentById,
};
