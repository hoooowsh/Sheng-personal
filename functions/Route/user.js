const express = require("express");
const UserRouter = express.Router();
const { loginUser } = require("../Controller/userController");
const {
  FirebaseTokenValidator,
  AuthValidate,
} = require("../MiddleWare/VerifyToken");

UserRouter.post("/login", FirebaseTokenValidator(), AuthValidate, loginUser);

module.exports = UserRouter;
