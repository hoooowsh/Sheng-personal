const admin = require("firebase-admin");
const UserDAO = require("../Database/DAO/userDAO");
const User = require("../Database/Model/userModel");
const bcrypt = require("bcrypt");
const AppError = require("../Util/AppError");
const { isAdmin } = require("../Helper/admin");

async function loginUser(req, res, next) {
  try {
    // getting value from request body
    const { name, tokenUserId, tokenEmail } = req.body;
    if (!name) {
      throw new AppError("Missing required field", 400);
    }
    console.log(req.body);

    // if the user with correct id is in database already, sign him in directly
    let user;
    user = await UserDAO.getUserById(tokenUserId);
    if (user) {
      res.status(200).send({ tokenUserId });
    }

    // if user with current id is not in database yet, check if there is an entry with current user email
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
    await UserDAO.addUser(newUser, tokenUserId);
    res.status(201).send({ tokenUserId });
  } catch (error) {
    next(error);
  }
}

async function getUserByName(req, res, next) {}

async function getUserById(req, res, next) {}

module.exports = { loginUser, getUserByName, getUserById };
