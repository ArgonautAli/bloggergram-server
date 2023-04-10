require("dotenv").config();
const { router } = require("./routes/mainRoutes/main.routes");
const express = require("express");
const app = express();
const cors = require("cors");
const { dbConnect } = require("./db");
const { socket } = require("./socket");

const port = process.env.PORT;
app.use(cors());
dbConnect;
socket;

// console.log("process env", process.env);

app.get("/", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.send("app is running");
});

app.use(express.json());

app.use("/", router);

app.listen(port, () => {
  console.log(`app is running on port ${port}`);
});
