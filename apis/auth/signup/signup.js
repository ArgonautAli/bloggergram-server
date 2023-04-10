const express = require("express");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const User = require("../../../models/user/user");
const { json } = require("body-parser");

const app = express();
app.use(express.json());

exports.signup = async (req, res) => {
  try {
    const { userName, fullName, password: plainTextPassword } = req.body;

    console.log("req", req.body);

    // Hashing the password using bcrypt, md5, sha1, sha256, sh512...

    // 1. Collision should be improbable
    // 2. The algorithm should be slow fundamentally/ mathematically (so it can't be bruteforced quickly)

    // bcrypt is js implementation of low-level library (in c or c++ binary)

    // bcrypt.hash();
    // console.log(await bcrypt.hash(password, 10));

    const password = await bcrypt.hash(plainTextPassword, 10);

    const response = await User.create({
      fullName,
      userName,
      password,
    });

    res.json({ status: "ok", message: "User created succesfully" });
  } catch (err) {
    const error = JSON.stringify(err);
    res.json({ status: "error", message: err.code });
  }
};
