const express = require("express");
const EmailRoute = express.Router();
const { sendContactEmail } = require("../Controller/emailController");

ThoughtRoute.post("/sendContactEmail", sendContactEmail);

module.exports = EmailRoute;
