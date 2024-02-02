const router = require("express").Router();
const { fileValidationSchema } = require("../validations/file.validations");
const {
  studentValidationSchema,
} = require("../validations/student.validations");
const { validateSchema } = require("../middleware/file.middleware");
const {
  importExcelData,
  getAllprofiles,
  getProfile,
  deleteProfile,
  updateProfile,
} = require("../controller/profile.controller");
const {
  addStudentDetails,
  getAllStudentDetails,
  deleteStudentDetail,
  updateStudentDetails,
} = require("../controller/student.controller");

router.post("/college", validateSchema(fileValidationSchema), importExcelData);
router.get("/college", getAllprofiles);
router.delete("/college/:id", deleteProfile);
router.put("/college/:id", updateProfile);
router.get("/college/:email", getProfile);

router.post(
  "/student",
  validateSchema(studentValidationSchema),
  addStudentDetails
);
router.get("/student", getAllStudentDetails);
router.delete("/student/:id", deleteStudentDetail);
router.put("/student/:id", updateStudentDetails);

module.exports = { router };
