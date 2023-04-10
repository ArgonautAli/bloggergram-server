const express = require("express");
const Post = require("../../models/post/post");

exports.getPosts = async (req, res) => {
  try {
    const creatorId = req.params.creatorId;
    if (!creatorId)
      return res.json({ status: "error", message: "creator not found" });
    const posts = await Post.find({ creatorId }).lean();
    res.json({ status: "ok", message: "posts recieved", data: posts });
  } catch (err) {
    res.json({ status: "error", message: err });
  }
};
