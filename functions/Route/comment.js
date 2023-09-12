const express = require("express");
const CommentRoute = express.Router();
const {
  FirebaseTokenValidator,
  AuthValidate,
} = require("../MiddleWare/VerifyToken");
const {
  addComment,
  getCommentList,
} = require("../Controller/commentController");

CommentRoute.post("/add", FirebaseTokenValidator(), AuthValidate, addComment);

CommentRoute.post("/commentList", getCommentList);

module.exports = CommentRoute;
