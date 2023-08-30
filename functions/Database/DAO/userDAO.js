const firestoreService = require("./../firestoreService");
const User = require("../Model/userModel");

class UserDAO {
  async getUserById(id) {
    const data = await firestoreService.getDocument("Users", id);
    return data ? User.fromData(id, data) : null;
  }

  // passing a user document to this helper and save it to database
  async addUser(user, id) {
    const userId = await firestoreService.addDocument(
      "Users",
      user.toData(),
      id
    );
    return userId;
  }

  // editing a user by id
  async editUser(user, id) {}

  async deleteUser(id) {
    await firestoreService.deleteDocument("Users", id);
  }

  async getUserByEmail(email) {
    const data = await firestoreService.queryCollection(
      "Users",
      "email",
      "==",
      email
    );
    // If data is not empty, return the first user object
    if (data.length > 0) {
      return User.fromData(data[0].id, data[0]);
    }
    return null;
  }
}

module.exports = new UserDAO();
