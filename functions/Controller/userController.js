const admin = require("firebase-admin");
const UserDAO = require("../Database/DAO/userDAO");
const User = require("../Database/Model/userModel");
const bcrypt = require("bcrypt");
const AppError = require("../Util/AppError");

async function registerUser(req, res, next) {
  try {
    // getting value from request body
    const { firstName, lastName, email, userId } = req.body;
    if (!firstName || !lastName || !email || !userId) {
      throw new AppError("Missing required field", 400);
    }

    // create user in firebase firestore database
    const newUser = new User(firstName, lastName, email);
    await UserDAO.addUser(newUser, userId);
    res.status(201).send({ userId });
  } catch (error) {
    next(error);
  }
}

async function getUserByName(req, res, next) {}

async function getUserById(req, res, next) {}

module.exports = { registerUser, getUserByName, getUserById };
