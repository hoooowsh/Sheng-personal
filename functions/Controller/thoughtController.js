const ThoughtDAO = require("../Database/DAO/thoughtDAO");
const Thought = require("../Database/Model/thoughtModel");
const AppError = require("../Util/AppError");
const { isAdmin } = require("../Helper/admin");

async function addThought(req, res, next) {
  try {
    // getting value from request body
    const { tokenUserId, tokenEmail, title, content, date, comment } = req.body;
    if (!title || !content || !date || !comment) {
      throw new AppError("Missing required field", 400);
    }

    // check if the email is admin
    if (isAdmin(tokenEmail)) {
      throw new AppError("You are not a teapot", 401);
    }

    const newThought = new Thought(
      tokenUserId,
      tokenEmail,
      title,
      content,
      date,
      comment
    );
    // add user to database and respond to frontend
    console.log("11");
    const thoughtId = await ThoughtDAO.addThought(newThought);
    res.status(201).send({ thoughtId });
  } catch (error) {
    next(error);
  }
}

module.exports = { addThought };
