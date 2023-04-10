const Post = require("../../models/post/post");

exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find({}).lean();
    res.json({ status: "ok", message: "all posts", data: posts });
  } catch (err) {
    console.log("Err", err);
    res.json({ status: "error", message: JSON.stringify(err) });
  }
};
