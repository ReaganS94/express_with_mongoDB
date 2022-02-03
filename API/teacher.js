const express = require("express");

const { getTeacher, createTeacher } = require("../controllers/teacher");

const api = express.Router();

api.route("/").get(getTeacher).post(createTeacher);

module.exports = api;
