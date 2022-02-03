const express = require("express");
const app = express();
const connectDB = require("./dbinit");

const port = 5000;

const students = require("./API/student");
const teacher = require('./API/teacher')

connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/students", students);
app.use('/teachers', teacher);

app.get("/", (req, res) => res.send("Howdy World"));
app.listen(port, () => console.log(`server running on port ${port}`));
