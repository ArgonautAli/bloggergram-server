const Post = require("../../models/post/post");

exports.getPost = async (req, res) => {
  try {
    const creatorId = req.params.creatorId;
    const postId = req.params.postId;

    if (!creatorId)
      return res.json({ status: "error", message: "creator not found" });
    if (!postId)
      return res.json({ status: "error", message: "post not found" });
    const posts = await Post.find({ creatorId }).lean();

    const post = await posts.find((elem) => elem._id == postId);
    console.log("post", creatorId);
    res.json({ status: "ok", message: "post found", data: post });
  } catch (err) {
    res.json({ staus: "error", message: err });
  }
};
