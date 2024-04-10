const express = require("express");
const router = express.Router();
const { queryChatbot } = require("../controller/botController");
const fetchuser = require("../middlewares/verifyUser");

router.post("/request", fetchuser, queryChatbot);

module.exports = router;
