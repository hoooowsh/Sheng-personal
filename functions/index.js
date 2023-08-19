const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const functions = require("firebase-functions");
const bodyParser = require("body-parser");
var cors = require("cors");
const corsOptions = {
  origin: true,
  credentials: true,
};

require("dotenv").config();
const { admin, database } = require("./Config/firebase");

const express = require("express");
const http = require("http");

var app = express();
app.use(cors(corsOptions));
app.use(bodyParser.json());

const UserRouter = require("./Route/user");
const { globalErrorHandler } = require("./Helper/errorHandler");

app.get("/test", async (req, res) => {
  res.status(200).send("test  hi");
});

// user routes
app.use("/user", UserRouter);

// global error handler
app.use(globalErrorHandler);

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
// let server;
// async function main() {
//   var ipAddress = "127.0.0.1";
//   server = http.createServer(app).listen(PORT, () => {
//     if (process.env.NODE_ENV === "development") {
//       console.log(`Server listening at http://localhost:${PORT}`);
//     }
//   });
// }
// main();

exports.app = functions.https.onRequest(app);
