const express = require("express");
const LeetcodeRoute = express.Router();
const {
  addLeetcode,
  getLeetcode,
  getLeetcodeList,
  deleteLeetcode,
} = require("../Controller/leetcodeController");
const {
  FirebaseTokenValidator,
  AuthValidate,
} = require("../MiddleWare/VerifyToken");

LeetcodeRoute.post("/add", FirebaseTokenValidator(), AuthValidate, addLeetcode);

LeetcodeRoute.get("/id/:leetcodeId", getLeetcode);

LeetcodeRoute.get("/leetcodeList", getLeetcodeList);

LeetcodeRoute.post(
  "/delete",
  FirebaseTokenValidator(),
  AuthValidate,
  deleteLeetcode
);

module.exports = LeetcodeRoute;
