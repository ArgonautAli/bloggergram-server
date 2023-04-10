require("dotenv").config();

const messagePort = process.env.MESSAGE_PORT;

io = require("socket.io")(messagePort, {
  cors: {
    origin: "*",
  },
});

let users = {};

const addUser = (userId, socketId) => {
  // !users.some((user) => user.userId === userId) &&
  //   users.push({ userId, socketId });
  users(userId);
};

const getUser = (recieverId) => {
  return users.find((user) => user.userId == recieverId);
};

module.exports.socket = io.on("connection", (socket) => {
  console.log("a user connected");
  io.emit("welcome", "connected to socket");
  socket.on("addUsers", (userId) => {
    // addUser(userId, socket.id);
    console.log("userId", userId);
    users[userId] = socket.id;
    console.log("users", userId, socket.id);
    io.emit("getUsers", users);
  });

  socket.on("sendMessage", ({ senderId, recieverId, body }) => {
    console.log("users1", users);
    var user = users[recieverId];
    console.log("user", user);
    console.log("senderId, recieverId, body", senderId, recieverId, body);

    io.to(user).emit("getMessage", { senderId, body });
  });
});
