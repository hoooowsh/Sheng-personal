const firestoreService = require("./../firestoreService");
const User = require("../Model/userModel");
const AppError = require("../../Util/AppError");

class UserDAO {
  /**
   * Get user using userId as a key
   * @param {String} id - userId to search user in database
   * @returns User object if exist, or null if does not exist
   */
  async getUserById(id) {
    const data = await firestoreService.getDocument("Users", id);
    return data ? User.fromFirestore(id, data) : null;
  }

  /**
   * Helper function to get User Object using user email
   * @param {String} email - user email
   * @returns User Object if exist, null if not
   */
  async getUserByEmail(email) {
    const data = await firestoreService.queryCollection(
      "Users",
      "email",
      "==",
      email
    );
    // If data is not empty, return the first user object
    if (data.length > 0) {
      return User.fromFirestore(data[0].id, data[0]);
    }
    return null;
  }

  /**
   * Add user using userId and User object
   * @param {String} id - user Id as a search key in database
   * @param {User} user - a User Object
   * @returns The user ID that stored in database
   */
  async addUser(id, user) {
    const userId = await firestoreService.addDocument(
      "Users",
      id,
      user.toFirestore()
    );
    return userId;
  }

  /**
   * Edit a user instance in User collection
   * @param {String} id - user id
   * @param {User} user - User Object
   * @returns Void
   */
  async editUser(id, user) {
    await firestoreService.setDocument("Users", id, user.toFirestore());
    return;
  }

  /**
   * Helper function to delete user in database
   * @param {String} id - user id
   */
  async deleteUser(id) {
    await firestoreService.deleteDocument("Users", id);
  }

  /**
   * Helper function to add a thought to User document
   * @param {String} userId - user id
   * @param {String} thoughtId - thought id as search key in database
   * @param {String} thoughtTitle - thought title
   */
  async addToUserThoughts(userId, thoughtId, thoughtTitle) {
    await firestoreService.addToFirstLevelMap(
      "Users",
      userId,
      "thoughts",
      thoughtId,
      {
        thoughtTitle: thoughtTitle,
      }
    );
  }
}

module.exports = new UserDAO();
