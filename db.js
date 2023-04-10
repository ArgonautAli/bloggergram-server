const mongoose = require("mongoose");

const connectionParams = {
  useUnifiedTopology: true,
};

mongoose.set("strictQuery", false);

exports.dbConnect = mongoose
  .connect(process.env.DB_STRING, connectionParams)
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => console.log("err connecting to db", err));
