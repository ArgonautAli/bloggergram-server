const express = require("express");
const users = express.Router();
const cors = require("cors");

const { getUsers } = require("../../apis/users/getUsers");

const app = express();
app.use(cors());
app.use(express.json());

users.get("/getAllUsers", getUsers);

module.exports = { users };
