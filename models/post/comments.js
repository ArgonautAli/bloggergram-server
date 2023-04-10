const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema(
  {
    postId: {type: String, required: true},
    body: { type: String, required: true },
    creatorId: { type: String, required: true },
    creatorName: { type: String, required: true },
    likes: [],
  },
  { collection: "comments", timeseries: true }
);

const Comment = mongoose.model("CommentSchema", CommentSchema);

module.exports = Comment;
