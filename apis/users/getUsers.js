const User = require("../../models/user/user");

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find({}, "userName fullName").lean();
    res.json({ status: "ok", message: "all users", data: users });
  } catch (err) {
    console.log(err);
    res.json({ status: "error", message: JSON.stringify(err) });
  }
};
