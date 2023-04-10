const mongoose = require("mongoose");

const ConversationSchema = new mongoose.Schema(
  {
    members: { type: Array },
  },
  {
    timestamps: true,
    collection: "conversations",
  }
);

const Conversation = mongoose.model("ConversationSchema", ConversationSchema);

module.exports = Conversation;
