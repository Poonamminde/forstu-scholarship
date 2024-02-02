const {
  addProfiles,
  getAllProfiles,
  getUserProfile,
  deleteProfileById,
  updateProfileById,
} = require("../services/profile.service");
const { sendEmail } = require("../utility/email.utility");

const importExcelData = async (req, res) => {
  try {
    console.log("import data to database");
    const data = req.body.file;
    data.forEach(async (element, index) => {
      if (index > 0) {
        try {
          const result = await addProfiles({
            name: element[0],
            email: element[1],
            enrollmentDate: element[2],
          });
          if (result) {
            sendEmail(element[1]);
          }
        } catch (error) {
          res.status(400).json("User is not created", { user: element });
        }
      }
    });
  } catch {
    res.status(500).json({ message: "internal server error" });
  }
};

const getAllprofiles = async (req, res) => {
  try {
    const profiles = await getAllProfiles();
    res.status(200).json(profiles);
  } catch {
    res.status(500).end();
  }
};

const getProfile = async (req, res) => {
  try {
    const profile = await getUserProfile(req.params.email);
    res.status(200).json(profile);
  } catch {
    res.status(500).end();
  }
};

const deleteProfile = async (req, res) => {
  try {
    const result = await deleteProfileById(req.params.id);
    res.status(200).json(result);
  } catch {
    res.status(500).end();
  }
};

const updateProfile = async (req, res) => {
  try {
    const result = await updateProfileById(req.params.id, req.body);
    res.status(200).json(result);
  } catch {
    res.status(500).end();
  }
};

module.exports = {
  importExcelData,
  getAllprofiles,
  getProfile,
  deleteProfile,
  updateProfile,
};
