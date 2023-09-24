const express = require("express");
const JourneyRoute = express.Router();
const {
  addJourney,
  getJourney,
  getJourneyList,
  deleteJourney,
} = require("../Controller/journeyController");
const {
  FirebaseTokenValidator,
  AuthValidate,
} = require("../MiddleWare/VerifyToken");

JourneyRoute.post("/add", FirebaseTokenValidator(), AuthValidate, addJourney);

JourneyRoute.get("/id/:journeyId", getJourney);

JourneyRoute.get("/journeyList", getJourneyList);

JourneyRoute.post(
  "/delete",
  FirebaseTokenValidator(),
  AuthValidate,
  deleteJourney
);

module.exports = JourneyRoute;
