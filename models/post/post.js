const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    body: { type: String, required: true },
    creatorId: { type: String, required: true },
    creatorName: { type: String, required: true },
    creatorFullName: { type: String, required: true },
    likes: [],
  },
  {
    collection: "posts",
    timestamps: true,
    versionKey: false,
  }
);

const Post = mongoose.model("PostSchema", PostSchema);

module.exports = Post;
