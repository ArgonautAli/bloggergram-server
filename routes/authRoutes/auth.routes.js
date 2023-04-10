const express = require("express");
const auth = require("express").Router();
const cors = require("cors");

const { login } = require("../../apis/auth/login/login");
const { signup } = require("../../apis/auth/signup/signup");
const app = express();

app.use(cors());
app.options("*", cors());

app.use(express.json());
auth.post("/login", login);
auth.post("/signup", signup);

module.exports = { auth };
