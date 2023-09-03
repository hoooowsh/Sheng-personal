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

module.exports = { addThought };
