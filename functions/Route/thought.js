const express = require("express");
const ThoughtRoute = express.Router();
require("dotenv").config();
const { addThought } = require("../Controller/thoughtController");
const {
  FirebaseTokenValidator,
  AuthValidate,
} = require("../MiddleWare/VerifyToken");

ThoughtRoute.post("/addThought", addThought);

module.exports = ThoughtRoute;
