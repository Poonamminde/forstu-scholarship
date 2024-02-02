const Profile = require("../model/profile.model");

const addProfiles = async (data) => {
  try {
    console.log("add");
    const student = new Profile({
      name: data.name,
      email: data.email,
      enrollmentDate: data.enrollmentDate,
    });
    return await student.save();
  } catch (error) {
    console.log(error);
  }
};

const getAllProfiles = async () => {
  console.log("profile");
  const profiles = await Profile.find();
  return profiles;
};

const getUserProfile = async (email) => {
  const profile = await Profile.find({ email: email });
  return profile;
};

const deleteProfileById = async (id) => {
  const result = await Profile.deleteOne({ _id: id });
  return result;
};
const updateProfileById = async (id, object) => {
  const result = await Profile.updateOne(
    { _id: id },
    { $set: { ...object } },
    { new: true }
  );
  return result;
};
module.exports = {
  addProfiles,
  getAllProfiles,
  getUserProfile,
  deleteProfileById,
  updateProfileById,
};
