const express = require("express");
const UserRouter = express.Router();
require("dotenv").config();
const {
  registerUser,
  getUserByName,
  getUserById,
} = require("../Controller/userController");
const {
  FirebaseTokenValidator,
  AuthValidate,
} = require("../MiddleWare/VerifyToken");

UserRouter.post(
  "/registerUser",
  FirebaseTokenValidator(),
  AuthValidate,
  registerUser
);

UserRouter.post("/getUser", getUserByName);

UserRouter.get("/getUser", getUserById);

module.exports = UserRouter;
