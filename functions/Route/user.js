const express = require("express");
const UserRouter = express.Router();
require("dotenv").config();
const { registerUser } = require("../Controller/userController");

UserRouter.post("/registerUser", registerUser);

module.exports = UserRouter;
