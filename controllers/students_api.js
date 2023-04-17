const bcrypt = require("bcrypt");
const Students = require("../models/students");
const jwt = require("jsonwebtoken");

// Register

const Register = async (req, res) => {
  bcrypt.hash(req.body.Password, 10).then(
    async (hash) =>
      await Students.create({
        Email: req.body.Email,
        Dept: req.body.Dept,
        Name: req.body.Name,
        Roll_no: req.body.Roll_no,
        Role: req.body.Role,
        Phone: req.body.Phone,
        Placement: req.body.Placement,
        Address: req.body.Address,
        SSLC: req.body.SSLC,
        HSC: req.body.HSC,
        CGPA: req.body.CGPA,
        Password: hash,
      })
        .then((user) =>
          res.status(200).json({
            message: "User successfully created",
            user,
          })
        )
        .catch((error) =>
          res.status(400).json({
            message: "User not successful created",
            error: error.message,
          })
        )
  );
};

// Login

const Login = async (req, res) => {
  try {
    const { Email, Password, Role } = req.body;
    if (!(Email && Password)) {
      res.status(400).json({ Message: "All input required" });
    }
    const user = await Students.findOne({ Email: Email });

    if (user && (await bcrypt.compare(Password, user.Password))) {
      const token = jwt.sign(
        { user_id: user._id, Email },
        process.env.TOKEN_KEY,
        {
          expiresIn: "10m",
        }
      );

      res
        .status(200)
        .cookie("access_token", token)
        .json({ message: "Logged in successfully 😊 👌" });
      ``;
    }
    res.status(400).send("Invalid credentials");
  } catch (err) {
    res.send(err).status(500);
  }
};

//Profile

const Profile = async (req, res) => {
  try {
    const token = req.cookies.access_token;
    const decode = jwt.verify(token, process.env.TOKEN_KEY);
    const user = await Students.findOne({ _id: decode.user_id });
    res.send(user);
  } catch (err) {
    res.send(err);
  }
};

// Edit Profile

const EditProfile = async (req, res) => {
  try {
    const token = req.cookies.access_token;
    const decode = jwt.verify(token, process.env.TOKEN_KEY);
    const updatedUser = await Students.findOneAndUpdate(
      { _id: decode.user_id },
      { $set: req.body },
      { new: true }
    );
    res.json({
      message: "User updated",
      updatedUser,
    });
  } catch (err) {
    res.send(err);
  }
};
//Logout

const Logout = (req, res) => {
  try {
    res
      .clearCookie("access_token")
      .status(200)
      .json({ message: "Successfully logged out 😏 🍀" });
  } catch (err) {
    res.send(err);
  }
};

//Get All Users

const GetAllUsers = async (req, res) => {
  try {
    const admin = req.body.admin;
    if (admin) {
      const alluser = await Students.find({});
      res.send(alluser);
    } else {
      res.send("Only for admin uses");
    }
  } catch (err) {
    res.send(err);
  }
};

module.exports = {
  Register,
  Logout,
  Login,
  EditProfile,
  Profile,
  GetAllUsers,
};
