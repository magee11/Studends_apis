const mongoose = require("mongoose");

const MONGO_URI = process.env.MONGO_URI;

const connectDB = async () => {
  mongoose
    .connect(MONGO_URI)
    .then(() => console.log("Connected Successfully"))
    .catch((err) => console.error("Not Connected", err));
};

module.exports = connectDB;
