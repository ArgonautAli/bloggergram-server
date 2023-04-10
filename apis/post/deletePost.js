const Post = require("../../models/post/post");

exports.deletePost = async (req, res) => {
  try {
    const postId = req.params.postId;

    if (!postId)
      return res.json({ status: "error", message: "post not found!" });

    const post = await Post.find({ _id: postId }).lean().deleteOne();

    res.json({ status: "ok", message: "Post deleted succesfully" });
  } catch (err) {
    console.log("err", err);
    res.json({ status: "error", message: JSON.stringify(err) });
  }
};
