require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { loginUser } = require("../validator-email-name/controllers/user");
const dbURL = process.env.MONGO_URL;

/* mongoose
  .connect(dbURL)
  .then(() => {
    console.log("Mongodb atlas is connected!");
  })
  .catch((error) => {
    console.log(error);
    process.exit(1);
  }); */

const app = express();

const PORT = process.env.PORT || 9000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//home page..............................
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/./views/index.html");
});

//Register page..................................
app.post("/register", (req, res) => {
  const { email, password } = req.body;

  res.status(201).json({ email, password });
});

//Register page..................................
app.post("/login", (req, res) => {
  res.status(200).json({ message: "user is login" });
});

//route not found error......................
app.use((req, res, next) => {
  res.status(404).json({ message: "rout not found!" });
});

//handling server error....................
app.use((err, req, res, next) => {
  res.status(500).json({ message: "something broken!" });
});

//server create...................................
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
