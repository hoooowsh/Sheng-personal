const admin = require("firebase-admin");
const UserDAO = require("../Database/DAO/userDAO");
const User = require("../Database/Model/userModel");
const bcrypt = require("bcrypt");

async function registerUser(req, res) {
  try {
    // getting value from request body
    const { firstName, lastName, email, password } = req.body;
    if (!firstName || !lastName || !email) {
      return res.status(400).send({ error: "Missing required field." });
    }

    // create salt and hash user password
    const salt = bcrypt.genSaltSync(10);
    const saltedPassword = bcrypt.hashSync(password, salt);

    // create user in firebase authentication
    const userRecord = await admin.auth().createUser({
      email,
      saltedPassword,
      displayName: `${firstName} ${lastName}`,
    });

    // create user in firebase firestore database
    userId = userRecord.uid;
    const newUser = new User(userId, firstName, lastName, salt);
    await UserDAO.addUser(newUser);
    res.status(201).send({ userId });
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).send({ error: "Something went wrong." });
  }
}

module.exports = { registerUser };
