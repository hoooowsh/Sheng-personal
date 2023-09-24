const UserDAO = require("../Database/DAO/userDAO");
const LeetcodeDAO = require("../Database/DAO/leetcodeDAO");
const Leetcode = require("../Database/Model/leetcodeModel");
const AppError = require("../Util/AppError");
const { isAdmin } = require("../Helper/admin");

/**
 * Add Leetcode controller. Add Leetcode to database with corresponding userId
 * @param {*} req - contains: title, topic, content, date
 * @param {*} res - contains: Leetcode id
 * @param {*} next - next to Error Handler
 */
async function addLeetcode(req, res, next) {
  try {
    // getting value from request body
    const { tokenUserId, tokenEmail, title, topic, content, date } = req.body;
    if (!title || !topic || !content || !date) {
      throw new AppError("Missing required field", 400);
    }

    // check if the email is admin
    if (!isAdmin(tokenEmail)) {
      throw new AppError("You are not a master teapot", 401);
    }

    // add Leetcode to database and respond to frontend
    const newLeetcode = new Leetcode(title, topic, content, date);
    const leetcodeId = await LeetcodeDAO.addTechNote(tokenUserId, newLeetcode);
    res.status(201).send({ leetcodeId: leetcodeId });
  } catch (error) {
    next(error);
  }
}

/**
 * Get leetcode controller. Get leetcode from database with corresponding userId and leetcodeId
 * @param {*} req - contains: leetcodeId(param)
 * @param {*} res - contains: leetcode content
 * @param {*} next - next to Error Handler
 */
async function getLeetcode(req, res, next) {
  try {
    const leetcodeId = req.params.leetcodeId;

    // first get user Id
    const userInfo = await UserDAO.getUserByEmail(process.env.ADMIN_EMAIL);
    const userId = userInfo.id;

    // get leetcode using admin Id and leetcode Id
    const leetcode = await LeetcodeDAO.getTechNoteById(userId, leetcodeId);
    res.status(200).send({ leetcode: leetcode });
  } catch (error) {
    next(error);
  }
}

/**
 * Get all leetcode controller using userId
 * @param {*} req - contains: Null
 * @param {*} res - contains: leetcode list
 * @param {*} next - next to Error Handler
 */
async function getLeetcodeList(req, res, next) {
  try {
    // first get admin Id
    const userInfo = await UserDAO.getUserByEmail(process.env.ADMIN_EMAIL);
    const userId = userInfo.id;
    const leetcodeList = await LeetcodeDAO.getTechNoteList(userId);
    res.status(200).send({ leetcodeList: leetcodeList });
  } catch (error) {
    next(error);
  }
}

/**
 * Delete one leetcode using userId and leetcodeId
 * @param {*} req - contains: leetcodeId
 * @param {*} res - null
 * @param {*} next - next to Error Handler
 */
async function deleteLeetcode(req, res, next) {
  try {
    const { tokenUserId, tokenEmail, leetcodeId } = req.body;
    if (!isAdmin(tokenEmail)) {
      throw new AppError("You are not a master teapot", 401);
    }
    await LeetcodeDAO.deleteLeetcode(tokenUserId, leetcodeId);
    res.status(200).send({});
  } catch (error) {
    next(error);
  }
}

module.exports = { addLeetcode, getLeetcode, getLeetcodeList, deleteLeetcode };
