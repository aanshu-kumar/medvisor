const express = require("express");
const router = express.Router();
const {
  queryChatbot,
  getUserChatHistory,
} = require("../controller/bot.controller.js");
const fetchuser = require("../middlewares/verifyUser");

router.post("/completions", fetchuser, queryChatbot);

router.get("/getchat", fetchuser, getUserChatHistory);

module.exports = router;
