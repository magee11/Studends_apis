const Company = require("../models/company");
const students = require("../models/students");

// Create a company
const postCompany = async (req, res) => {
  await Company.create({
    Email: req.body.Email,
    Location: req.body.Location,
    Name: req.body.Name,
    Salary: req.body.Salary,
    Domain: req.body.Domain,
    Phone: req.body.Phone,
    Date: req.body.Date,
    Url: req.body.Url,
    Requirement: req.body.Requirement,
  })
    .then((user) =>
      res.status(200).json({
        message: "Company successfully created",
        user,
      })
    )
    .catch((error) =>
      res.status(400).json({
        message: "Company not successful created",
        error: error.message,
      })
    );
};

// Get company
const getCompany = async (req, res) => {
  const Name = req.body.name;
  await Company.findOne({ Name: Name })
    .then((user) =>
      res.status(200).json({
        message: `Data Fetching Company ${Name}`,
        user,
      })
    )
    .catch((error) =>
      res.status(400).json({
        message: "Not able to fetch Company",
        error: error.message,
      })
    );
};

// Update company
const updateCompany = async (req, res) => {
  const id = req.params.id;
  await Company.findOneAndUpdate(
    { _id: id },
    { $set: req.body },
    { new: true }
  )
    .then((user) =>
      res.status(200).json({
        message: "Data Updated Company ",
        user,
      })
    )
    .catch((error) =>
      res.status(400).json({
        message: "Not able to update Company",
        error: error.message,
      })
    );
};

// Delete company
const deleteCompany = async (req, res) => {
    await Company.findByIdAndDelete(req.params.company)
    .then((user) =>
      res.status(200).json({
        message: "Company deleted successfully",
        user,
      })
    )
    .catch((error) =>
      res.status(400).json({
        message: " Problem deleting company",
        error: error.message,
      })
    );
};

//Get all company
const getallCompany = async(req, res) => {
    await Company.find({})
    .then((user) =>
      res.status(200).json({
        message: `List of all company`,
        user,
      })
    )
    .catch((error) =>
      res.status(400).json({
        message: "Problem with fetching company data",
        error: error.message,
      })
    );
};

module.exports = {
  postCompany,
  getCompany,
  updateCompany,
  deleteCompany,
  getallCompany,
};
