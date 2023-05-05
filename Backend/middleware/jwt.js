const jwt = require("jsonwebtoken");

const jwt_auth = (req, res, next) => {
  const x = req.header("authorization");
  token = x.split(" ")[1];
  if (!token) {
    return res.send("Access Denied");
  }
  try {
    const verified = jwt.verify(token, process.env.TOKEN_KEY);
    req.user = verified;
    next();
  } catch (err) {
    console.log("Message", err);
  }
};

module.exports = jwt_auth;
