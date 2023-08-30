const express = require("express");
const UserRouter = express.Router();
require("dotenv").config();
const {
  loginUser,
  getUserByName,
  getUserById,
} = require("../Controller/userController");
const {
  FirebaseTokenValidator,
  AuthValidate,
} = require("../MiddleWare/VerifyToken");

UserRouter.post("/login", FirebaseTokenValidator(), AuthValidate, loginUser);

UserRouter.post("/getUser", getUserByName);

UserRouter.get("/getUser", getUserById);

module.exports = UserRouter;
