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
} = require("../controllers/students_api");

router.post("/register", Register);
router.post("/login", Login);
router.get("/profile", verify, Profile);
router.put("/edit", verify, EditProfile);
router.delete("/logout", verify, Logout);
router.get("/getall", GetAllUsers);
module.exports = router;
