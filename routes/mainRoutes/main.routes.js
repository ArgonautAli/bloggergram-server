const express = require("express");
const app = express();
const router = express.Router();
const cors = require("cors");
const { authenticateToken } = require("../../middlewares/tokenVerification");

const { auth } = require("../authRoutes/auth.routes");
const { posts } = require("../postRoutes/post.routes");
const { upload } = require("../upload.routes");
const { users } = require("../userRoutes/user.routes");
const { chat } = require("../messagingRoutes/messaging.routes");

app.use(express.json());
app.use(cors());
app.options("*", cors());

router.use("/auth", auth);
router.use("/posts", posts);
router.use("/user", users);
router.use("/upload", upload);
router.use("/chat", chat);
router.use("/chat", "123");

module.exports = { router };
