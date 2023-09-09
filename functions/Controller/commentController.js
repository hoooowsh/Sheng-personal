const ThoughtDAO = require("../Database/DAO/thoughtDAO");
const UserDAO = require("../Database/DAO/userDAO");
const CommentDAO = require("../Database/DAO/commentDAO");
const Comment = require("../Database/Model/commentModel");
const { AppError } = require("../Util/AppError");

async function addComment(req, res, next) {
  try {
    // getting value from request body
    const {
      tokenUserId,
      tokenUserName,
      thoughtId,
      content,
      date,
      isAnonymous,
    } = req.body;
    if (!content || !date || !thoughtId || isAnonymous == undefined) {
      throw new AppError("Missing required field", 400);
    }
    if (!isAnonymous && (!tokenUserId || !tokenUserName)) {
      throw new AppError("Missing required field", 400);
    }

    // create comment object
    const newComment = new Comment(
      tokenUserId,
      tokenUserName,
      content,
      date,
      isAnonymous
    );

    // get admin info 
    const adminInfo = await UserDAO.getUserByEmail(process.env.ADMIN_EMAIL);
    const adminId = adminInfo.id;

    // save it to database
    const commentId = await CommentDAO.addComment(
      adminId,
      thoughtId,
      newComment
    );
    res.status(201).send({ commentId });
  } catch (error) {
    next(error);
  }
}

module.exports = { addComment };
