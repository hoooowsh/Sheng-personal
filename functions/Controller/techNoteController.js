const UserDAO = require("../Database/DAO/userDAO");
const TechNoteDAO = require("../Database/DAO/techNoteDAO");
const TechNote = require("../Database/Model/techNoteModel");
const AppError = require("../Util/AppError");
const { isAdmin } = require("../Helper/admin");
const techNoteDAO = require("../Database/DAO/techNoteDAO");

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

/**
 * Get techNote controller. Get techNote from database with corresponding userId and techNoteId
 * @param {*} req - contains: techNoteId(param)
 * @param {*} res - contains: techNote content
 * @param {*} next - next to Error Handler
 */
async function getTechNote(req, res, next) {
  try {
    const techNoteId = req.params.techNoteId;

    // first get user Id
    const userInfo = await UserDAO.getUserByEmail(process.env.ADMIN_EMAIL);
    const userId = userInfo.id;

    // get thought using admin Id and thought Id
    const techNote = await TechNoteDAO.getTechNoteById(userId, techNoteId);
    res.status(200).send({ techNote: techNote });
  } catch (error) {
    next(error);
  }
}

/**
 * Get all techNotes controller using userId
 * @param {*} req - contains: Null
 * @param {*} res - contains: techNote list
 * @param {*} next - next to Error Handler
 */
async function gettechNoteList(req, res, next) {
  try {
    // first get admin Id
    const userInfo = await UserDAO.getUserByEmail(process.env.ADMIN_EMAIL);
    const userId = userInfo.id;
    const techNoteList = await techNoteDAO.getTechNoteList(userId);
    res.status(200).send({ techNoteList: techNoteList });
  } catch (error) {
    next(error);
  }
}

/**
 * Delete one techNote using userId and techNoteId
 * @param {*} req - contains: techNoteId
 * @param {*} res - null
 * @param {*} next - next to Error Handler
 */
async function deleteTechNote(req, res, next) {
  try {
    const { tokenUserId, tokenEmail, techNoteId } = req.body;
    if (!isAdmin(tokenEmail)) {
      throw new AppError("You are not a master teapot", 401);
    }
    await techNoteDAO.deleteTechNote(tokenUserId, techNoteId);
    res.status(200).send({});
  } catch (error) {
    next(error);
  }
}

module.exports = { addTechNote, getTechNote, gettechNoteList, deleteTechNote };
