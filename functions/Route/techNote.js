const express = require("express");
const TechNoteRoute = express.Router();
const {
  addTechNote,
  getTechNote,
  gettechNoteList,
  deleteTechNote,
} = require("../Controller/techNoteController");
const {
  FirebaseTokenValidator,
  AuthValidate,
} = require("../MiddleWare/VerifyToken");

TechNoteRoute.post("/add", FirebaseTokenValidator(), AuthValidate, addTechNote);

TechNoteRoute.get("/id/:techNoteId", getTechNote);

TechNoteRoute.get("/techNoteList", gettechNoteList);

TechNoteRoute.post(
  "/delete",
  FirebaseTokenValidator(),
  AuthValidate,
  deleteTechNote
);

module.exports = TechNoteRoute;
