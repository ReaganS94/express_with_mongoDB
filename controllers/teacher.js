const Teacher = require("../models/Teacher");

const getTeacher = async (req, res, next) => {
  try {
    const teacher = await Teacher.find();
    res.json({
      data: teacher,
      msg: "Show all Teachers",
    });
  } catch (err) {
    console.log(err);
  }
};

const createTeacher = async (req, res) => {
  try {
    const { name, first_name, email, adminRights } = req.body;

    const teacher = await Teacher.create({
      name,
      first_name,
      email,
      adminRights,
    });
    res.json({
      msg: "Added Teacher",
      success: true,
      data: teacher,
    });
  } catch (err) {
    console.log(err);
    res.json({
      success: false,
      data: err,
    });
  }
};

module.exports = {
  getTeacher,
  createTeacher,
};
