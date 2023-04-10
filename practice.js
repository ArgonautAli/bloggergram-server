// const express = require("express");
// const jwt = require("jsonwebtoken");
// const app = express();
// const { router } = require("./routes/authRoutes/authRoutes");
// const secretKey = "secret";

// app.get("/", (req, res) =>
//   res.json({
//     message: "base api",
//   })
// );

// app.post("/login", (req, res) => {
//   const user = {
//     id: 1,
//     name: "haider",
//     // password: "Haider@123" only things that are returned
//     email: "haider.salar@gmail.com",
//   };
//   jwt.sign({ user }, secretKey, { expiresIn: "300s" }, (err, token) => {
//     res.json({
//       token,
//     });
//   });
// });

// app.post("/profile", verifyToken, (req, res) => {
//   jwt.verify(req.token, secretKey, (err, authData) => {
//     res.json({
//       message: "got token!",
//       authData,
//     });
//   });
// });

// function verifyToken(req, res, next) {
//   const authheaders = req.headers["authorization"];
//   const bearerHeaders = authheaders.split(" ");
//   token = bearerHeaders[1];
//   req.token = token;
//   next();
// }

// // app.use("/", router);

// app.listen(5000, () => {
//   console.log("running on port 5000");
// });
