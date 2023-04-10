// const Post = require("../../models/post/post");
const Comment = require("../../models/post/comments");

exports.getComments = async (req, res) => {
  try {
    const postId = req.params.postId;

    if (!postId)
      return res.json({ status: "error", messsage: "Post not found!" });

    const comments = await Comment.find({ postId }).lean();

    res.json({ status: "ok", message: "comments recieved", data: comments });
  } catch (err) {
    res.json({ status: "error", messsage: err });
  }
};
