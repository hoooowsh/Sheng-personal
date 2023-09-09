const express = require("express");
const CommentRoute = express.Router();
const {
  FirebaseTokenValidator,
  AuthValidate,
} = require("../MiddleWare/VerifyToken");
const { addComment } = require("../Controller/commentController");

CommentRoute.post("/add", FirebaseTokenValidator(), AuthValidate, addComment);

module.exports = CommentRoute;
