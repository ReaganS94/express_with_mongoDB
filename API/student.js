const express = require("express");

const {
  getStudents,
  getOneStudent,
  createStudent,
  updateStudent,
} = require("../controllers/student");

const api = express.Router();

api.route("/").get(getStudents).post(createStudent);

api.route("/:id").put(updateStudent).get(getOneStudent);

module.exports = api;
