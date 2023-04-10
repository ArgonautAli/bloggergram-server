const Conversation = require("../../models/messaging/conversation");

exports.createConversation = async (req, res) => {
  try {
    const { senderId, recieverId } = req.body;
    const response = await Conversation.create({
      members: [senderId, recieverId],
    });
    res.json({ status: "ok", message: "Conversation created" });
  } catch (err) {
    const error = JSON.stringify(err);
    res.json({ status: "error", message: error });
  }
};
