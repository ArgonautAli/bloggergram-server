const express = require("express");
const upload = require("express").Router();
const cors = require("cors");
const { uploadImage } = require("../apis/upload/image");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(express.json());
upload.post(
  "/uploadImage",
  bodyParser.raw({ type: ["image/jpeg", "image/png"], limit: "5mb" }),
  uploadImage
);

module.exports = { upload };
