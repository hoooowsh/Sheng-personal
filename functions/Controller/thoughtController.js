const ThoughtDAO = require("../Database/DAO/thoughtDAO");
const UserDAO = require("../Database/DAO/userDAO");
const Thought = require("../Database/Model/thoughtModel");
const AppError = require("../Util/AppError");
const { isAdmin } = require("../Helper/admin");
const userDAO = require("../Database/DAO/userDAO");

/**
 * Add thought controller. Add thought to database with corresponding userId
 * @param {*} req - contains: title, content, date
 * @param {*} res - contains:
 * @param {*} next - next to Error Handler
 */
async function addThought(req, res, next) {
  try {
    // getting value from request body
    const { tokenUserId, tokenEmail, title, content, date } = req.body;
    if (!title || !content || !date) {
      throw new AppError("Missing required field", 400);
    }

    // check if the email is admin
    if (!isAdmin(tokenEmail)) {
      throw new AppError("You are not a master teapot", 401);
    }

    // add thought to database and respond to frontend
    const newThought = new Thought(title, content, date);
    const thoughtId = await ThoughtDAO.addThought(tokenUserId, newThought);
    res.status(201).send({ thoughtId });
  } catch (error) {
    next(error);
  }
}

/**
 * Get thought controller. Get thought from database with corresponding userId and thoughtId
 * @param {*} req - contains: thoughtId(param)
 * @param {*} res - contains: thought content
 * @param {*} next - next to Error Handler
 */
async function getThought(req, res, next) {
  try {
    const thoughtId = req.params.thoughtId;

    // first get user Id
    const userInfo = await UserDAO.getUserByEmail(process.env.ADMIN_EMAIL);
    const userId = userInfo.id;

    // get thought using admin Id and thought Id
    const thought = await ThoughtDAO.getThoughtById(userId, thoughtId);
    res.status(200).send({ thought: thought });
  } catch (error) {
    next(error);
  }
}

/**
 * Get all thoughts controller using userId
 * @param {*} req - contains: Null
 * @param {*} res - contains: thoughts list
 * @param {*} next - next to Error Handler
 */
async function getThoughtList(req, res, next) {
  try {
    // first get admin Id
    const userInfo = await UserDAO.getUserByEmail(process.env.ADMIN_EMAIL);
    const userId = userInfo.id;
    console.log("wtf");
    const thoughtList = await ThoughtDAO.getThoughtList(userId);
    res.status(200).send({ thoughtList: thoughtList });
  } catch (error) {
    next(error);
  }
}

module.exports = { addThought, getThought, getThoughtList };
