const express = require("express");
const EmailRoute = express.Router();
const { sendContactEmail } = require("../Controller/emailController");

EmailRoute.post("/sendContactEmail", sendContactEmail);

module.exports = EmailRoute;
