const {
  addStudentDetailsService,
  getAllStudent,
  deleteStudentById,
  updateStudentById,
} = require("../services/student.service");

const addStudentDetails = async (req, res) => {
  try {
    console.log("student controller->addStudentDetails");
    const result = await addStudentDetailsService(req.body);
    res.status(200).json(result);
  } catch {
    res.status(400).end();
  }
};

const getAllStudentDetails = async (req, res) => {
  try {
    const result = await getAllStudent();
    res.status(200).json(result);
  } catch {
    res.status(500).end();
  }
};

const deleteStudentDetail = async (req, res) => {
  try {
    const result = await deleteStudentById(req.params.id);
    res.status(200).json(result);
  } catch {
    res.status(500).end();
  }
};

const updateStudentDetails = async (req, res) => {
  try {
    console.log("update student");
    const result = await updateStudentById(req.params.id, req.body);
    res.status(200).json(result);
  } catch {
    res.status(500).end();
  }
};

module.exports = {
  addStudentDetails,
  getAllStudentDetails,
  deleteStudentDetail,
  updateStudentDetails,
};
