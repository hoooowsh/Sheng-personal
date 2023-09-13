const UserDAO = require("../Database/DAO/userDAO");
const TechNoteDAO = require("../Database/DAO/techNoteDAO");
const TechNote = require("../Database/Model/techNoteModel");
const AppError = require("../Util/AppError");
const { isAdmin } = require("../Helper/admin");

/**
 * Add techNote controller. Add techNote to database with corresponding userId
 * @param {*} req - contains: title, topic, content, date
 * @param {*} res - contains: techNote id
 * @param {*} next - next to Error Handler
 */
async function addTechNote(req, res, next) {
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

    // add techNote to database and respond to frontend
    const newTechNote = new TechNote(title, topic, content, date);
    const techNoteId = await TechNoteDAO.addTechNote(tokenUserId, newTechNote);
    res.status(201).send({ techNoteId: techNoteId });
  } catch (error) {
    next(error);
  }
}

module.exports = { addTechNote };
