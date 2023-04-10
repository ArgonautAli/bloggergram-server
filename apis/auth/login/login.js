const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const app = express();
const secretKey = "secret";
const User = require("../../../models/user/user");

exports.login = async (req, res) => {
  try {
    const { userName, password } = req.body;

    const user = await User.findOne({ userName }).lean();

    if (!user) {
      res.json({ status: "error", message: "User does not exist" });
    }
    if (await bcrypt.compare(password, user.password)) {
      const body = {
        _id: user._id,
        userName: user.userName,
      };
      jwt.sign(
        body,
        process.env.SECRET_KEY,
        { expiresIn: "24h" },
        (err, token) => {
          res.json({
            status: "ok",
            message: "login succesful",
            data: {
              userId: user._id,
              userName: user.userName,
              fullName: user.fullName,
              token,
            },
          });
        }
      );
    }
  } catch (err) {
    console.log("err", err);
  }
};
