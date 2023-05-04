const mongoose = require("mongoose");

var companySchema = new mongoose.Schema(
  {
    Name: {
      type: String,
      required: true,
    },
    Location: {
      type: String,
      required: true,
    },
    Email: {
      type: String,
      required: true,
      unique: true,
    },
    Salary: {
      type: String,
      required: true,
    },
    Phone: {
      type: String,
      required: true,
    },
    Domain: {
      type: String,
      required: true,
    },
    Url:{
      type: String,
      required: true,
    },
    Date: {
      type: String,
      required: true,
    },
    Requirement: {
      type: [
        {
          SSLC: Number,
          HSC: Number,
          CGPA: Number,
        },
      ],
      required: true,
    },
  },
  { timestramp: true }
);

module.exports = mongoose.model("Company", companySchema);
