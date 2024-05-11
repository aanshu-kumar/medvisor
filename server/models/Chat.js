const mongoose = require("mongoose");
const { Schema } = mongoose;

const userChatSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
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
