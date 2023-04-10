const Comment = require("../../models/post/comments");

exports.createComment = async (req, res) => {
  try {
    const { creatorId, creatorName, body } = req.body;
    const postId = req.params.postId;

    if (!postId)
      return res.json({ status: "error", message: "Post does not exist!" });
    if (!creatorId || !creatorName || !body)
      return res.json({ status: "error", message: "comment not posted" });

    const response = await Comment.create({
      creatorId,
      creatorName,
      body,
      postId,
    });
    res.json({ status: "ok", message: "comment posted succesfully" });
  } catch (err) {}
};
