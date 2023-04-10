const bodyParser = require("body-parser");
const fs = require("fs");

exports.uploadImage = async (req, res) => {
  try {
    console.log("req1", req);
    console.log("body", req.body);
    fs.writeFile("image.jpeg", req.body, (error) => {
      if (error) {
        throw error;
      }
    });

    res.send({ status: "ok", message: " file uploaded" });
  } catch (error) {
    res.sendStatus(500);
  }
};
