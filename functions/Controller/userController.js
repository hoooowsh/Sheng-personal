const UserDAO = require("../Database/DAO/userDAO");
const User = require("../Database/Model/userModel");
const AppError = require("../Util/AppError");
const { isAdmin } = require("../Helper/admin");

/**
 * Login user controller. Login user, create database entry for user if need
 * @param {*} req - contains: name
 * @param {*} res - contains: userId
 * @param {*} next - next to Error Handler
 */
async function loginUser(req, res, next) {
  try {
    // getting value from request body and check if body contains correct contents
    const { name, tokenUserId, tokenEmail } = req.body;
    if (!name) {
      throw new AppError("Missing required field", 400);
    }

    // if the user is in database already, sign in
    let user;
    user = await UserDAO.getUserById(tokenUserId);
    if (user) {
      res.status(200).send({ tokenUserId });
      return;
    }

    // if user is not in database yet, check if there is an entry with user email
    user = await UserDAO.getUserByEmail(tokenEmail);
    if (user) {
      // delete the old entry
      await UserDAO.deleteUser(user.id);
    }

    // check if the user is admin or not
    let newUser;
    if (isAdmin(tokenEmail)) {
      newUser = new User(tokenUserId, name, tokenEmail, true);
    } else {
      newUser = new User(tokenUserId, name, tokenEmail, false);
    }

    // add user to database and respond to frontend
    await UserDAO.addUser(tokenUserId, newUser);
    res.status(201).send({ tokenUserId });
  } catch (error) {
    next(error);
  }
}

module.exports = { loginUser };
