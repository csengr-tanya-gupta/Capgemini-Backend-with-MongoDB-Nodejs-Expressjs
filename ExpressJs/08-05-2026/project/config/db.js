const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    if (!process.env.MONGODB_URL) {
      console.error("db connection url not provided");
    }
    const connection = await mongoose.connect(process.env.MONGODB_URL);
    console.log("Mongodb connected");
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;
