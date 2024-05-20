const express = require("express");
const router = express.Router();
const {
  signupForUser,
  signinForUser,
} = require("../controller/authController");

router.post("/signup", signupForUser);

router.post("/signin", signinForUser);

module.exports = router;
