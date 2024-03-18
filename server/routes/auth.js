const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const saltRounds = 10;

router.post("/signup", async function (req, res) {
  let success = false;
  const email = req.body.email;
  const username = req.body.username;
  const name = req.body.name;
  const password = req.body.password;

  if (!(username && email && name && password)) {
    return res.status(400).json({
      msg: "All fields are required!",
    });
  }
  try {
    let user = await User.findOne({ $or: [{ email, username }] });
    if (user) {
      return res.status(400).json({
        success,
        error:
          "Sorry! a user already exists with this email, try using another email.",
      });
    }
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);
    user = await User.create({
      username: username,
      name: name,
      email: email,
      password: hashedPassword,
    });

    const data = {
      user: {
        id: user.id,
      },
    };

    var authtoken = jwt.sign({ data }, process.env.JWT_SECRET);
    success = true;
    res.json({ success, authtoken });
  } catch (err) {
    console.error(err.message);
    res.status(500).json("Internal server error!");
  }
});

module.exports = router;
