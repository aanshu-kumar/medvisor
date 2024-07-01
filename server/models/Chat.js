const mongoose = require("mongoose");
const { Schema } = mongoose;
var aggregatePaginate = require("mongoose-aggregate-paginate-v2");

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

userChatSchema.plugin(aggregatePaginate);

const Chat = mongoose.model("Chat", userChatSchema);
module.exports = { Chat };
