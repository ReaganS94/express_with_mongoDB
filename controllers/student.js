const Student = require("../models/Student");

const getStudents = async (req, res, next) => {
  try {
    const student = await Student.find();
    res.json({
      data: student,
      msg: "Show all students",
    });
  } catch (err) {
    console.log(err);
  }
};

const getOneStudent = async (req, res, next) => {
  try {
    const { id } = req.params;
    const student = await Student.findById(id);
    res.json({
      data: student,
    });
  } catch (err) {
    console.log(err);
  }
};

const createStudent = async (req, res) => {
  try {
    const { name, first_name, email } = req.body;

    const student = await Student.create({
      name,
      first_name,
      email,
    });
    res.json({
      msg: "Added User",
      success: true,
      data: student,
    });
  } catch (err) {
    console.log(err);
    res.json({
      success: false,
      data: err,
    });
  }
};

const updateStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, first_name, email } = req.body;

    const student = await Student.findByIdAndUpdate(
      id,
      {
        name,
        first_name,
        email,
      },
      { new: true }
    );
    res.json({
      msg: `Student with id ${student.id} updated`,
      success: true,
      data: student,
    });
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  getStudents,
  createStudent,
  updateStudent,
  getOneStudent,
};
