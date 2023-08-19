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

  async getUsersByFirstName(firstName) {
    const data = await firestoreService.queryCollection(
      "Users",
      "firstName",
      "==",
      firstName
    );
    return data.map((item) => User.fromData(item.id, item));
  }
}

module.exports = new UserDAO();
