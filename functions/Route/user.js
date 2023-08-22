const express = require("express");
const UserRouter = express.Router();
require("dotenv").config();
const {
  registerUser,
  getUserByName,
  getUserById,
} = require("../Controller/userController");

UserRouter.post("/registerUser", registerUser);

UserRouter.post("/getUser", getUserByName);

UserRouter.get("/getUser", getUserById);

module.exports = UserRouter;
