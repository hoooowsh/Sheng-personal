const UserDAO = require("../Database/DAO/userDAO");
const JourneyDAO = require("../Database/DAO/journeyDAO");
const Journey = require("../Database/Model/journeyModel");
const AppError = require("../Util/AppError");
const { isAdmin } = require("../Helper/admin");

/**
 * Add Journey controller. Add Journey to database with corresponding userId
 * @param {*} req - contains: title, content, date
 * @param {*} res - contains: Journey id
 * @param {*} next - next to Error Handler
 */
async function addJourney(req, res, next) {
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

    // add Journey to database and respond to frontend
    const newJourney = new Journey(title, content, date);
    const journeyId = await JourneyDAO.addJourney(tokenUserId, newJourney);
    res.status(201).send({ journeyId: journeyId });
  } catch (error) {
    next(error);
  }
}

/**
 * Get Journey controller. Get Journey from database with corresponding userId and JourneyId
 * @param {*} req - contains: journeyId(param)
 * @param {*} res - contains: journey content
 * @param {*} next - next to Error Handler
 */
async function getJourney(req, res, next) {
  try {
    const journeyId = req.params.journeyId;

    // first get user Id
    const userInfo = await UserDAO.getUserByEmail(process.env.ADMIN_EMAIL);
    const userId = userInfo.id;

    // get journey using admin Id and journey Id
    const journey = await JourneyDAO.getJourneyById(userId, journeyId);
    res.status(200).send({ journey: journey });
  } catch (error) {
    next(error);
  }
}

/**
 * Get all journey controller using userId
 * @param {*} req - contains: Null
 * @param {*} res - contains: journey list
 * @param {*} next - next to Error Handler
 */
async function getJourneyList(req, res, next) {
  try {
    // first get admin Id
    const userInfo = await UserDAO.getUserByEmail(process.env.ADMIN_EMAIL);
    const userId = userInfo.id;
    const journeyList = await JourneyDAO.getJourneyList(userId);
    res.status(200).send({ journeyList: journeyList });
  } catch (error) {
    next(error);
  }
}

/**
 * Delete one journey using userId and journeyId
 * @param {*} req - contains: journeyId
 * @param {*} res - null
 * @param {*} next - next to Error Handler
 */
async function deleteJourney(req, res, next) {
  try {
    const { tokenUserId, tokenEmail, journeyId } = req.body;
    if (!isAdmin(tokenEmail)) {
      throw new AppError("You are not a master teapot", 401);
    }
    await JourneyDAO.deleteJourney(tokenUserId, journeyId);
    res.status(200).send({});
  } catch (error) {
    next(error);
  }
}

module.exports = { addJourney, getJourney, getJourneyList, deleteJourney };
