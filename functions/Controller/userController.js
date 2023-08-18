const admin = require("firebase-admin");
const UserDAO = require("../Database/DAO/userDAO");
const User = require("../Database/Model/userModel");

async function createUser(req, res) {
  try {
    // getting value from request body
    const { firstName, lastName, email } = req.body;
    if (!firstName || !lastName || !email) {
      return res.status(400).send({ error: "Missing required field." });
    }

    // create user in firebase authentication
    const userRecord = await admin.auth().createUser({
      email,
      password,
      displayName: `${firstName} ${lastName}`,
    });

    // create user in firebase firestore database
    userId = userRecord.uid;
    const newUser = new User(userId, firstName, lastName);
    await UserDAO.addUser(newUser);
    res.status(201).send({ userId });
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).send({ error: "Something went wrong." });
  }
}

module.exports = { createUser };
