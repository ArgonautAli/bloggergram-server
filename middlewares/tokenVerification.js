const jwt = require("jsonwebtoken");

exports.authenticateToken = async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  try {
    if (token === null)
      return res.json({ status: "401", message: "token not found" });

    jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
      if (err) return res.json({ status: "error", message: err });
      req.user = user;
      next();
    });
  } catch (err) {
    res.json({ status: "error", message: err });
  }
};
