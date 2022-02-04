const mongoose = require("mongoose");

const { Schema } = mongoose;

const StudentSchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: [3, "min length is 3 characters"],
    unique: true,
  },

  first_name: {
    type: String,
    required: true,
    unique: true,
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
});

module.exports = mongoose.model("Student", StudentSchema);
