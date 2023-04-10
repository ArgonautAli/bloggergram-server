const express = require("express");
const Post = require("../../models/post/post");

exports.createPost = async (req, res) => {
  try {
    const { body, creatorName, creatorId, creatorFullName } = req.body;

    const response = await Post.create({
      body,
      creatorName,
      creatorId,
      creatorFullName,
    });

    res.json({ status: "ok", message: "Post created succesfully" });
  } catch (err) {
    const error = JSON.stringify(err);
    res.json({ status: "error", message: error });
  }
};
