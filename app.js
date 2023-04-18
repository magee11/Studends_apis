const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const app = express();
require("dotenv").config();
const connectDB = require("./database/db");
const router = require("./routes");

app.use(morgan("tiny"));
app.use(cookieParser());
app.use(express.json());
app.use("/api/v1", router);

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Backend is working...");
});

connectDB();
app.listen(PORT, () => {
  console.log(`Backend is listening on${process.env.PORT}`);
});
