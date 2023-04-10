const Message = require("../../models/messaging/message");

exports.message = async (req, res) => {
  try {
    const { senderId, conversationId, text } = req.body;
    const response = await Message.create({
      senderId,
      conversationId,
      text,
    }).lean();
    res.json({ status: "ok", message: "message created" });
  } catch (err) {
    res.json({ status: "error", message: err });
  }
};
