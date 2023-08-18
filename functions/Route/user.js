const express = require("express");
const UserRouter = express.Router();
require("dotenv").config();
const { createUser } = require("../Controller/userController");

UserRouter.post("/registerUser", createUser);

module.exports = UserRouter;
