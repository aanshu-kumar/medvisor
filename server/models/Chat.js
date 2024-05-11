import mongoose, { Schema } from "mongoose";

const userChatSchema = new Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
    message: {
      type: String,
      required: true,
    },
    aiResponse: {
      type: String,
    },
  },
  { timestamps: true }
);

export const Chat = mongoose.model("Chat", userChatSchema);
