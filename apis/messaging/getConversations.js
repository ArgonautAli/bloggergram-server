const Conversation = require("../../models/messaging/conversation");

exports.getConversation = async (req, res) => {
  try {
    const userId = req.params.userId;
    const conversations = await Conversation.find({
      members: { $in: [userId] },
    }).lean();
    res.json({
      status: "ok",
      message: "conversations found",
      data: conversations,
    });
  } catch (err) {
    res.json({ staus: "error", message: err });
  }
};
