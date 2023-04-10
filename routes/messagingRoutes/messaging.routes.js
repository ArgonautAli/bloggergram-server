const express = require("express");
const chat = express.Router();
const cors = require("cors");

const {
  createConversation,
} = require("../../apis/messaging/createConversation");
const { getConversation } = require("../../apis/messaging/getConversations");

const app = express();
app.use(cors());
app.use(express.json());

chat.post("/createConversation", createConversation);
chat.get("/getConversations/:userId", getConversation);

module.exports = { chat };
