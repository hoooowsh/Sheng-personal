const express = require("express");
const TechNoteRoute = express.Router();
const { addTechNote } = require("../Controller/techNoteController");
const {
  FirebaseTokenValidator,
  AuthValidate,
} = require("../MiddleWare/VerifyToken");

TechNoteRoute.post("/add", FirebaseTokenValidator(), AuthValidate, addTechNote);

module.exports = TechNoteRoute;
