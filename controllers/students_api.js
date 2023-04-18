const bcrypt = require("bcrypt");
const Students = require("../models/students");
const jwt = require("jsonwebtoken");
var nodemailer = require("nodemailer");

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
      await res
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

// Mail API
const Mailer = async (req, res) => {
  const token = req.cookies.access_token;
  const decode = jwt.verify(token, process.env.TOKEN_KEY);
  const user = await Students.findOne({_id:decode.user_id})
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "mageshmarch@gmail.com",
      pass: "yrfpqhzicquptvfx",
    },
  });
  const mailOptions = {
    from: "admin@collage.org",
    to: "magesh@divum.in",
    subject: "Placement",
    html: '<center><h1>Node Mailer<h1><img src="https://res.cloudinary.com/practicaldev/image/fetch/s--6NiDsq1m--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://pa1.narvii.com/6302/3cdf3ccd32e76952e68ecbc6bcb5d3738a20152a_hq.gif" alt="image description" style="width:500px; height:600px;"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquamnihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam recusandae alias error harum maxime adipisci amet laborum. Perspiciatis     minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit    quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur fugiat, temporibus enim commodi iusto libero magni deleniti quod quam <p>button type="submit" style="height: 10px; width: 30px; border-radius: 20px; background-color: blanchedalmond; color: black; "> Login</button><center>',
    html: `<b>Name :<b><p>${user.Name}<p><b>User Id :<b><p>${user._id}<p><b>Placement :<b><p>${user.Placement}<p><b>Email :<b><p>${user.Email}<p>`,
    // html: '<center><h1>Node Mailer<h1><img src="https://res.cloudinary.com/practicaldev/image/fetch/s--6NiDsq1m--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://pa1.narvii.com/6302/3cdf3ccd32e76952e68ecbc6bcb5d3738a20152a_hq.gif" alt="image description" style="width:500px; height:600px;"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquamnihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam recusandae alias error harum maxime adipisci amet laborum. Perspiciatis     minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit    quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur fugiat, temporibus enim commodi iusto libero magni deleniti quod quam <p>button type="submit" style="height: 10px; width: 30px; border-radius: 20px; background-color: blanchedalmond; color: black; "> Login</button><center>',
  };
  transporter.sendMail(mailOptions, function (err, info) {
    if (err) console.log(err);
    else
      res.json({
        message: "Mail successfully sent",
        info: info,
        status: "sucess",
      });
  });
};

const Delete = async (req, res) => {
  await Students.findByIdAndDelete(req.params.id)
    .then((user) =>
      res.status(200).json({
        message: `User deleted ${req.params.id}`,
      })
    )
    .catch((error) =>
      res.status(400).json({
        message: "Not able to fetch Company",
        error: error.message,
      })
    );
};

module.exports = {
  Register,
  Logout,
  Login,
  EditProfile,
  Profile,
  GetAllUsers,
  Mailer,
  Delete,
};
