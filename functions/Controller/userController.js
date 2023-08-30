const admin = require("firebase-admin");
const UserDAO = require("../Database/DAO/userDAO");
const User = require("../Database/Model/userModel");
const bcrypt = require("bcrypt");
const AppError = require("../Util/AppError");
const { isAdmin } = require("../Helper/admin");

async function registerUser(req, res, next) {
  try {
    // getting value from request body
    const { name, email, userId } = req.body;
    if (!name || !email || !userId) {
      throw new AppError("Missing required field", 400);
    }
    console.log(req.body);

    // create user in firebase firestore database
    let newUser;
    if (isAdmin(email)) {
      console.log("right");
      newUser = new User(name, email, true);
    } else {
      newUser = new User(name, email, false);
    }
    console.log(newUser);
    await UserDAO.addUser(newUser, userId);
    res.status(201).send({ userId });
  } catch (error) {
    next(error);
  }
}

async function getUserByName(req, res, next) {}

async function getUserById(req, res, next) {}

module.exports = { registerUser, getUserByName, getUserById };
