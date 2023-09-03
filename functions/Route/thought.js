const express = require("express");
const ThoughtRoute = express.Router();
require("dotenv").config();
const { addThought, getThought } = require("../Controller/thoughtController");
const {
  FirebaseTokenValidator,
  AuthValidate,
} = require("../MiddleWare/VerifyToken");

ThoughtRoute.post("/add", FirebaseTokenValidator(), AuthValidate, addThought);

ThoughtRoute.get("/:thoughtId", getThought);

module.exports = ThoughtRoute;
