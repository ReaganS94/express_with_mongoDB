const mongoose = require("mongoose");

const connectDB = async () => {
  const conn = await mongoose.connect(
    "mongodb+srv://wd22:peakyblinders@wd22exercise.yigwj.mongodb.net/WD22?retryWrites=true&w=majority"
  );

  console.log(`MongoDB connected ${conn.connection.host}`);
};

module.exports = connectDB;
