const express = require("express");
const posts = express.Router();
const cors = require("cors");

const { createPost } = require("../../apis/post/createPost");
const { getPosts } = require("../../apis/post/getPosts");
const { getPost } = require("../../apis/post/getPost");
const { createComment } = require("../../apis/post/createComment");
const { getComments } = require("../../apis/post/getComments");
const { deletePost } = require("../../apis/post/deletePost");
const { getAllPosts } = require("../../apis/post/getAllPosts");

const { authenticateToken } = require("../../middlewares/tokenVerification");

const app = express();

app.use(cors());

app.use(express.json());

posts.post("/createPost", authenticateToken, createPost);
posts.get("/getAllPosts", getAllPosts);
posts.get("/getPosts/:creatorId", getPosts);
posts.get("/getPost/:creatorId/:postId", getPost);
posts.delete("/deletePost/:postId", authenticateToken, deletePost);
posts.post("/createComment/:postId", authenticateToken, createComment);
posts.get("/getComments/:postId", getComments);

module.exports = { posts };
