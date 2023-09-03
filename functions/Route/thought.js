const express = require("express");
const ThoughtRoute = express.Router();
require("dotenv").config();
const {
  addThought,
  getThought,
  getThoughtList,
} = require("../Controller/thoughtController");
const {
  FirebaseTokenValidator,
  AuthValidate,
} = require("../MiddleWare/VerifyToken");

ThoughtRoute.post("/add", FirebaseTokenValidator(), AuthValidate, addThought);

ThoughtRoute.get("/id/:thoughtId", getThought);

ThoughtRoute.get("/thoughtList", getThoughtList);

module.exports = ThoughtRoute;
