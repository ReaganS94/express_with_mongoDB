const mongoose = require("mongoose");

const { Schema } = mongoose;

const TeacherSchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  first_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please add a valid email",
    ],
  },
  adminRights: {
    type: Boolean,
    required: true,
  },
});

module.exports = mongoose.model("Teacher", TeacherSchema, "teachers");
