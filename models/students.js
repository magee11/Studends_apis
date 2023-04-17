const mongoose = require("mongoose");

var userSchema = new mongoose.Schema(
  {
    Name: {
      type: String,
      required: true,
    },
    Dept: {
      type: String,
      required: true,
    },
    Email: {
      type: String,
      required: true,
      unique: true,
    },
    Password: {
      type: String,
      required: true,
    },
    Phone: {
      type: String,
      required: true,
    },
    Role: {
      type: String,
      required: true,
    },
    Placement: {
      type: Boolean,
      required: true,
    },
    Address: {
      type: String,
      required: true,
    },
    SSLC: {
      type: Number,
      required: true,
      max: 500,
    },
    HSC: {
      type: Number,
      required: true,
      max: 600,
    },
    CGPA: {
      type: Number,
      required: true,
    },
  },
  { timestramp: true }
);

module.exports = mongoose.model("Students", userSchema);
