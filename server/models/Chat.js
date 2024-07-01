const mongoose = require("mongoose");
const { Schema } = mongoose;

const userChatSchema = new Schema(
  {
    userMessage: {
      type: String,
      required: true,
    },
    aiResponse: {
      type: String,
    },
  },
  { timestamps: true }
);

const Chat = mongoose.model("Chat", userChatSchema);
module.exports = { Chat };
