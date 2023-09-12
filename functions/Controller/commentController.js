const ThoughtDAO = require("../Database/DAO/thoughtDAO");
const UserDAO = require("../Database/DAO/userDAO");
const CommentDAO = require("../Database/DAO/commentDAO");
const Comment = require("../Database/Model/commentModel");
const { AppError } = require("../Util/AppError");

/**
 * Add comment controller. Add comment to database with corresponding userId, and objid
 * @param {*} req - contains: {objId, objName, content, date, isAnonymous}
 * @param {*} res - contains: comment id
 * @param {*} next - next to Error Handler
 */
async function addComment(req, res, next) {
  try {
    // getting value from request body
    const {
      tokenUserId,
      tokenUserName,
      objId,
      objName,
      content,
      date,
      isAnonymous,
    } = req.body;
    if (!content || !date || !objId || !objName || isAnonymous == undefined) {
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
      objId,
      objName,
      newComment
    );
    res.status(201).send({ commentId });
  } catch (error) {
    next(error);
  }
}

/**
 * Get all comments controller using userId and obj id
 * @param {*} req - contains: objId, objName
 * @param {*} res - contains: comments list
 * @param {*} next - next to Error Handler
 */
async function getCommentList(req, res, next) {
  try {
    // get user id and thought id, get data from database
    const { objId, objName } = req.body;
    const userInfo = await UserDAO.getUserByEmail(process.env.ADMIN_EMAIL);
    const userId = userInfo.id;
    const commentList = await CommentDAO.getCommentList(userId, objId, objName);
    res.status(200).send({ commentList: commentList });
  } catch (error) {
    next(error);
  }
}

module.exports = { addComment, getCommentList };
