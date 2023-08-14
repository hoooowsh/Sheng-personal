const express = require("express");
const UserRouter = express.Router();
require("dotenv").config();
const createError = require("http-errors");

UserRouter.get(
  "/basicInfo",
  async (req, res) => {
    res.send("test user router")
  }
);

module.exports = UserRouter;
