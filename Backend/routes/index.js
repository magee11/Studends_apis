const express = require("express");
const verify = require("../middleware/jwt");
const router = express.Router();
const {
  Register,
  Logout,
  Login,
  EditProfile,
  Profile,
  GetAllUsers,
  Mailer,
  Delete,
  Otp,
} = require("../controllers/students_api");
const {
  postCompany,
  getCompany,
  updateCompany,
  deleteCompany,
  getallCompany,
} = require("../controllers/company_api");

// Studens api
router.post("/register", Register);
router.post("/login", Login);
router.get("/profile", verify,Profile);
router.put("/edit", verify, EditProfile);
router.delete("/logout", verify, Logout);
router.get("/getall", GetAllUsers);
router.get("/mail", Mailer);
router.delete("/delete/:id", Delete);
router.get("/otp", Otp);

// Company apis

router.post("/createCompany", postCompany);
router.get("/getCompany", getCompany);
router.put("/updateCompany/:id", updateCompany);
router.delete("/deleteCompany/:id", deleteCompany);
router.get("/getallcompany", getallCompany);

module.exports = router;
